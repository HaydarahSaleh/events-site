import { Box, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";
import {
  default as React,
  Suspense,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import SearchBar from "../../components/searchBar/SearchBar";
import Banner from "../../components/shared/Banner";
import { getDataInfo } from "../../publicFunctions";
import actions from "../../redux/actions";
import useStyles from "../../styles/pages/gallery/galleryStyles";
import GalleryPanel from "./GalleryPanel";
import { createBrowserHistory } from "history";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function MediaCenter() {
  const dispatch = useDispatch();
  const reducers = useSelector((state) => state);
  const { getAll, filterPosts, filterPostsReturned } = actions;
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const { t } = useTranslation();
  const [type, setType] = useState("news");
  const [sort, setSort] = useState("post/years");
  const [dataOfSection, setData] = useState([]);
  const [sortCategory, setSortCategory] = useState("photo");
  const [pageNum, setPageNum] = useState(1);
  const [count, setCount] = useState(6);
  const [searchStart, setSearchStart] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [noData, setNoData] = useState(false);
  const location = useLocation();
  const history = createBrowserHistory();

  useLayoutEffect(() => {
    if (value === 1) {
      setType("image");
    } else if (value === 0) {
      setType("news");
    } else if (value === 2) {
      setType("video");
    }
  }, [value]);

  useLayoutEffect(() => {
    const query = location?.state?.query;
    if (query !== undefined) {
      setValue(query);
      const newLocation = {
        ...location,
        state: { ...location.state, query: undefined },
      };
      history?.replace(newLocation, "");
    }
  }, []);

  const handleChange = (event, newValue) => {
    setData([]);
    setPageNum(1);
    setValue(newValue);
    setSearchStart(false);
    setSearchName("");
    setSearchYear("");
    switch (newValue) {
      case 0:
        setType("news");
        setSort("post/years");
        break;
      case 1:
        setType("image");
        setSort("category/years");
        setSortCategory("photo");
        break;
      case 2:
        setType("video");
        setSort("category/years");
        setSortCategory("video");
        break;

      default:
        setType("news");
        setSort("post/years");
        break;
    }
  };

  useEffect(() => {
    if (searchStart) {
      if (year || title) {
        const sort =
          type === "news" || type === "events"
            ? "filter/posts"
            : `filter/${sortCategory}/gallery`;
        const data = {
          title: title ? title : "",
          year: year ? year : "",
          type: type,
          limit: 6,
          offset: (pageNum - 1) * 6,
        };

        dispatch(filterPosts({ sort, data }));
      }
    } else {
      let sort = getDataInfo(type);
      let data = {
        type: type,
        limit: 6,
        offset: (pageNum - 1) * 6,
      };
      dispatch(getAll({ sort, data }));
    }
  }, [type, pageNum, clicked]);

  useEffect(() => {
    setData([]);
    let searchData = reducers?.filterPosts?.filterPostsReturned?.data?.results;
    switch (value) {
      case 0:
        if (searchStart) {
          if (searchData?.length === 0) {
            setNoData(true);
          } else {
            setData(searchData);
            setNoData(false);
            setCount(
              Math?.ceil(
                reducers?.filterPosts?.filterPostsReturned?.data?.count / 6
              )
            );
          }
        } else {
          if (type === "news") {
            setData(reducers?.crud?.allReturned?.news);
            setNoData(false);
          }
          setCount(Math?.ceil(reducers?.crud?.allReturned?.count / 6));
        }

        break;
      case 1:
        if (searchStart) {
          if (!searchData?.length) {
            setNoData(true);
          } else {
            setData(searchData);
            setNoData(false);
            setCount(
              Math?.ceil(
                reducers?.filterPosts?.filterPostsReturned?.data?.count / 6
              )
            );
          }
        } else {
          setData(reducers?.crud?.allReturned?.image);
          setCount(Math?.ceil(reducers?.crud?.allReturned?.count / 6));
          setNoData(false);
        }
        break;
      case 2:
        if (searchStart) {
          if (!searchData?.length) {
            setNoData(true);
          } else {
            setData(searchData);
            setNoData(false);
            setCount(
              Math?.ceil(
                reducers?.filterPosts?.filterPostsReturned?.data?.count / 6
              )
            );
          }
        } else {
          setData(reducers?.crud?.allReturned?.video);
          setCount(Math?.ceil(reducers?.crud?.allReturned?.count / 6));
          setNoData(false);
        }
        break;

      default:
        setData([]);
    }
  }, [
    reducers?.filterPosts,
    reducers?.crud?.allReturned,
    value,
    searchStart,
    clicked,
  ]);

  useEffect(() => {
    if (!searchStart) dispatch(filterPostsReturned({ data: false }));
  }, [searchStart]);

  useEffect(() => {
    if (emptyFields) {
      setSearchStart(false);
    }
  }, [value, emptyFields]);
  const filterAllPosts = ({ searchYear, searchName }) => {
    setPageNum(1);
    if (searchYear || searchName) {
      setClicked(!clicked);
    }
  };
  return (
    <>
      <Banner />
      <Container maxWidth="xl" className={classes.boxContainer}>
        <Box className={classes.mediaContainer}>
          <Box className={classes.mediaHeader}>
            <Box
              className={classes.tabBarBox}
              data-aos="zoom-in-down"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <AppBar position="static" className={classes.mediaTabs}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="scrollable"
                  scrollButtons
                  allowScrollButtonsMobile
                  aria-label="full width tabs example"
                  className={classes.tabs}
                >
                  <Tab
                    label={<span>{t("TITLE.NEWS")}</span>}
                    {...a11yProps(0)}
                    className={classes.tabStyle}
                  />

                  <Tab
                    label={<span>{t("TITLE.PHOTOS")}</span>}
                    {...a11yProps(1)}
                    className={classes.tabStyle}
                  />
                  <Tab
                    label={<span>{t("TITLE.VIDEOS")}</span>}
                    {...a11yProps(2)}
                    className={classes.tabStyle}
                  />
                </Tabs>
              </AppBar>
            </Box>
          </Box>
          <Suspense fallback={<div className="loading..." />}>
            <TabPanel value={value} index={value} className={classes.tabss}>
              <SearchBar
                setEmptyFields={(val) => setEmptyFields(val)}
                filterAllPosts={({ searchYear, searchName }) => {
                  filterAllPosts({ searchYear, searchName });
                  setYear(searchYear);
                  setTitle(searchName);
                }}
                searchYear={searchYear}
                searchName={searchName}
                setSearchName={setSearchName}
                setSearchYear={setSearchYear}
                nameLabel={true}
                yearLabel={true}
                sort={sort}
                sortCategory={sortCategory}
                type={type}
                field="privateDate"
                setSearchStart={setSearchStart}
              />
              <GalleryPanel
                setData={() => setData([])}
                value={value}
                galleryType={type}
                dataOfSection={dataOfSection}
                pageNum={pageNum}
                setPageNum={setPageNum}
                count={count}
                noData={noData}
              />
            </TabPanel>
          </Suspense>
        </Box>
      </Container>
    </>
  );
}
