import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import React, { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { staticPages } from "../../publicData";

function BreadCrumb(props) {
  const reducers = useSelector((state) => state);
  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);
  const { alias } = useParams();
  let { selectedPage, setSelectedPage } = props;
  const { t } = useTranslation();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  const getLink = (link) => {
    let returnedLink = link;
    if (link === "/videos" || link === "/news" || link === "/photos")
      returnedLink = "/gallery";
    return returnedLink;
  };
  useEffect(() => {
    const url = window.location.href?.split("/");
    let correctUrl = "/" + url?.filter((item, index) => index > 3)?.join("/");
    let staticPage = staticPages?.filter(
      (item) => item?.link === correctUrl || correctUrl?.includes(item?.link)
    );
    if (staticPage?.length > 0) {
      if (alias)
        setSelectedPage({
          ...selectedPage,
          parentPageLink: getLink(staticPage[0]?.link),
          parentPage: staticPage[0]?.title[lang],
          categoryLink: "#",
          category: t("LABEL.DETAILS"),
        });
      else
        setSelectedPage({
          ...selectedPage,
          parentPageLink: getLink(staticPage[0]?.link),
          parentPage: staticPage[0]?.title[lang],
        });
    } else {
      if (reducers?.crud?.dataMenusReturned?.feedBack?.title)
        setSelectedPage({
          ...selectedPage,
          pageLink: "#",
          page: reducers?.crud?.dataMenusReturned?.feedBack?.title,
        });

      if (reducers?.crud?.dataMenusReturned?.menuItems?.length > 0) {
        let links = reducers?.crud?.dataMenusReturned?.menuItems?.filter(
          (item) => item?.id === 1 || item?.id === 2
        );
        let allLinks = [];
        let menuIems = [];
        links?.map((item) =>
          item?.childrens?.map((child) => menuIems?.push(child))
        );
        menuIems?.map((item) => {
          allLinks?.push({ ...item });
          item?.childrens?.map((child) =>
            allLinks?.push({
              ...child,
              parentLink: item?.link,
              parent_title: item?.title,
            })
          );
        });

        if (allLinks?.length > 0) {
          if (!alias) {
            let selectedPage = allLinks?.filter(
              (item) => item?.link === correctUrl
            )[0];
            if (selectedPage) {
              if (selectedPage?.parent_title)
                setSelectedPage({
                  ...selectedPage,
                  parentPageLink: selectedPage?.parentLink,
                  parentPage: selectedPage?.parent_title,
                  categoryLink: selectedPage?.link,
                  category: selectedPage?.title,
                });
              else
                setSelectedPage({
                  ...selectedPage,
                  parentPageLink: selectedPage?.link,
                  parentPage: selectedPage?.title,
                });
            }
          } else {
            let newUrl = correctUrl;
            let selectedPage = allLinks?.filter(
              (item) => item?.link === newUrl
            )[0];

            if (!selectedPage) {
              newUrl = correctUrl?.split("/");
              newUrl = "/" + newUrl?.filter((item, index) => index === 1);
              selectedPage = allLinks?.filter(
                (item) => item?.link === newUrl
              )[0];
              if (!selectedPage) {
                newUrl = correctUrl?.split("/");
                newUrl =
                  "/" +
                  newUrl
                    ?.filter((item, index) => index > 0 && index < 3)
                    ?.join("/");
                selectedPage = allLinks?.filter(
                  (item) => item?.link === newUrl
                )[0];
              }
            }
            if (newUrl && selectedPage) {
              if (selectedPage?.parent_title?.replace(/\s/g, "-"))
                setSelectedPage({
                  ...selectedPage,
                  parentPageLink: selectedPage?.parentLink,
                  parentPage: selectedPage?.parent_title,
                  categoryLink: selectedPage?.link,
                  category: selectedPage?.title,
                });
              else {
                setSelectedPage({
                  ...selectedPage,
                  parentPageLink: selectedPage?.link,
                  parentPage: selectedPage?.title,
                  categoryLink: "#",
                  category: t("LABEL.DETAILS"),
                });
              }
            }
          }
        }
      }
    }
  }, [reducers, window.location.href, alias]);

  return (
    <>
      {selectedPage ? (
        <Breadcrumbs
          separator={
            isRTL ? <ChevronLeftIcon /> : <NavigateNextIcon fontSize="small" />
          }
          aria-label="breadcrumb"
        >
          <Link to="/home">{t("LABEL.HOME")}</Link>
          {selectedPage?.parentPage ? (
            <Link
              to={
                selectedPage?.parentPageLink
                  ? selectedPage?.parentPageLink
                  : "#"
              }
            >
              {selectedPage?.parentPage}
            </Link>
          ) : null}
          {selectedPage?.category ? (
            <Link
              to={selectedPage?.categoryLink ? selectedPage?.categoryLink : "#"}
            >
              {selectedPage?.category}
            </Link>
          ) : null}
          {selectedPage?.pageLink ? (
            <Link to={selectedPage?.pageLink}>{selectedPage?.page}</Link>
          ) : null}
        </Breadcrumbs>
      ) : null}
    </>
  );
}

export default memo(BreadCrumb);
