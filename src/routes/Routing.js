import { CssBaseline, Paper } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { StylesProvider, ThemeProvider, jssPreset } from "@mui/styles";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  default as React,
  Suspense,
  lazy,
  memo,
  useEffect,
  useRef,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import FloatingButton from "../components/shared/floatingButton/FloatingButton";
import actions from "../redux/actions";
import { darkTheme, makeTheme } from "../styles/globalTheme/makeTheme";
// import Magazine from "../pages/magazine/magazine";

const ExitForm = lazy(() => import("../components/shared/exitForm/ExitForm"));
const Home = lazy(() => import("../pages/home/Home"));
const BasicPage = lazy(() => import("../pages/basicPage/BasicPage"));

const Error404 = lazy(() => import("../pages/error404/Error404"));
const Footer = lazy(() => import("../pages/home/footer/Footer"));

function Routing() {
  const {
    basicTheme,
    basicTheme: { isRTL, isDark },
  } = useSelector((state) => state.theme_reducer);
  const { t } = useTranslation();
  const dispatch = useDispatch();
  window.navigateToDefault = () => window.navigateTo("/home");
  const componentRef = useRef();
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const theme = isDark ? darkTheme(basicTheme) : makeTheme(basicTheme);

  const materialTheme = createTheme(theme);
  const { getDataMenus, getAll, getDataConf, homeLoaded, getDataSlider } =
    actions;
  const reducer = useSelector((state) => state);
  const [menuItems, setMenuItems] = useState([]);
  const [configurations, setConfigurations] = useState([]);
  const [headerMenuItems, setHeaderMenuItems] = useState([]);
  const [footerMenuItems, setFooterMenuItems] = useState([]);
  const [quickLinks, setQuickLinks] = useState([]);
  const [magazines, setMagazines] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [toggleSpinner, setToggleSpinner] = useState(false);
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  console.log(reducer, "#######REDUCERS######");

  useEffect(() => {
    if (!reducer?.homeLoading.homeLoaded) setToggleSpinner(true);
    else setToggleSpinner(false);
  }, [reducer?.homeLoading.homeLoaded]);

  useEffect(() => {
    if (!reducer.crud?.dataConfssReturned?.configurations?.length)
      dispatch(
        getDataConf({
          sort: "configuration",
        })
      );
  }, []);
  useEffect(() => {
    {
      if (!reducer.crud?.dataMenusReturned?.menuItems?.length)
        dispatch(getDataMenus({ sort: "menuItem" }));
    }

    if (!reducer?.crud?.dataSliderReturned?.posts?.length)
      dispatch(
        getDataSlider({
          data: {
            type: "sliders",
          },
          sort: "post",
        })
      );

    if (!reducer?.crud?.allReturned?.image?.length)
      dispatch(
        getAll({
          sort: "category",
          data: {
            type: "image",
          },
        })
      );
    if (!reducer?.crud?.allReturned?.about?.length)
      dispatch(
        getAll({
          sort: "post",
          data: {
            type: "about",
          },
        })
      );
    if (!reducer?.crud?.allReturned?.events?.length)
      dispatch(
        getAll({
          sort: "post",
          data: {
            type: "events",
          },
        })
      );
  }, []);
  useEffect(() => {
    if (
      reducer?.crud?.dataSliderReturned?.posts &&
      reducer?.crud?.allReturned?.events &&
      reducer.crud?.dataMenusReturned?.menuItems &&
      reducer.crud?.dataConfssReturned?.configurations
    ) {
      dispatch(
        homeLoaded({
          homeLoaded: true,
        })
      );
    }
  }, [
    reducer?.crud?.allReturned?.events,
    reducer.crud?.dataMenusReturned?.menuItems,
    reducer.crud?.dataConfssReturned?.configurations,
  ]);
  useEffect(() => {
    if (reducer?.crud?.dataConfssReturned?.configurations) {
      setConfigurations(reducer?.crud?.dataConfssReturned?.configurations);
    }
  }, [reducer.crud?.dataConfssReturned?.configurations]);

  return (
    <StylesProvider jss={jss}>
      <ThemeProvider theme={materialTheme}>
        <CssBaseline />

        <Paper
          ref={componentRef}
          display="flex"
          flex-direction="column"
          width="100%"
          dir={isRTL ? "rtl" : "ltr"}
          id="full-page"
          style={{
            background: materialTheme.palette.background.default,
            position: "relative",
            minHeight: "100vh",
            height: "100%",
            boxShadow: "none",
            display: "flex",
            flexDirection: "column",
            filter:
              theme && theme?.globals?.type === "blind"
                ? "grayscale(100%)"
                : "inherit",
          }}
        >
          <Suspense fallback={<h1></h1>}>
            <Routes>
              <Route path={`/`} element={<Navigate replace to="/home" />} />
              <Route path={`/:language/home`} element={<Home />} />

              <Route
                path={`/:language/section/:type/:alias`}
                element={<BasicPage />}
              />

              <Route
                path={`/:language/not-found`}
                element={<Error404 title={t("ERROR.LANGUAGEMASSAGE")} />}
              />
              <Route
                path={`/:language/404`}
                element={
                  <Error404
                    title={t("ERROR.QUE")}
                    message={t("ERROR.MASSAGE")}
                  />
                }
              />
              <Route
                path={"*"}
                element={
                  <Error404
                    title={t("ERROR.QUE")}
                    message={t("ERROR.MASSAGE")}
                  />
                }
              />
            </Routes>
            <Footer configurations={configurations} />
          </Suspense>
          <ExitForm />
        </Paper>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default memo(Routing);
