import { Box, Container, Grid, Pagination } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import PhotoCard from "../../components/photos/PhotoCard";
import Banner from "../../components/shared/Banner";
import { getLinks } from "../../publicFunctions";
import actions from "../../redux/actions";
import useStyles from "../../styles/pages/videos/videoListStyles";
import { useLayoutEffect } from "react";
import { pagination } from "../../components/shared/utils";
import useStylesPagination from "../../styles/components/pagination/pagination";
import NoData from "../../components/shared/noData/NoData";
import { useTranslation } from "react-i18next";

const VideoGalleryDetails = () => {
  const reducers = useSelector((state) => state);
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [noData, setNoData] = useState(false);
  const classes = useStyles();
  const paginationClasses = useStylesPagination();
  const { t } = useTranslation();
  const [paginate, setPaginate] = useState({
    requiredArr: [],
    pgCount: 0,
  });
  const { alias } = useParams();
  const dispatch = useDispatch();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");
  const { getByAlias } = actions;

  useEffect(() => {
    let sort = "category";
    if (alias);
    dispatch(getByAlias({ sort, alias, language: lang }));
  }, [alias]);

  useEffect(() => {
    if (reducers?.crud?.byAliasReturned?.success) {
      setData(reducers?.crud?.byAliasReturned);
      setNoData(reducers?.crud?.byAliasReturned?.links?.length ? false : true);
    } else if (
      !reducers?.crud?.byAliasReturned?.success &&
      reducers?.crud?.byAliasReturned?.message
    ) {
      window.location?.replace("/not-found");
    } else if (reducers?.crud?.byAliasReturned?.links?.length === 0) {
      setNoData(true);
    }
  }, [reducers?.crud?.byAliasReturned]);
  useLayoutEffect(() => {
    const displayedContent = getLinks(data?.links);
    const { count, requiredArr } = pagination(displayedContent, 6, pageNum);
    setPaginate({ requiredArr, pgCount: count });
  }, [data.links, pageNum]);

  const handlePaginationClick = (e, num) => {
    setPageNum(num);
  };

  const videos = paginate?.requiredArr?.map((item) => {
    return (
      <Grid item xs={12} sm={6} md={4}>
        <PhotoCard item={item} typeOfItem={"link"} />
      </Grid>
    );
  });

  return (
    <>
      <Banner />
      <Container maxWidth="xl" className={classes.root}>
        {data?.title ? (
          <Typography className={classes.title}>{data?.title}</Typography>
        ) : null}
        {data?.privateDate && (
          <Typography className={classes.date}>
            {moment(data?.privateDate)
              .format(" DD MMMM YYYY")
              .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))}
          </Typography>
        )}
        {data?.description ? (
          <Typography
            className={classes.description}
            dangerouslySetInnerHTML={{
              __html: `${data?.description}`,
            }}
          />
        ) : null}
        {videos?.length ? (
          <Grid container spacing={2} className={classes.paddingTop24}>
            {videos}
          </Grid>
        ) : noData ? (
          <NoData text={t("LABEL.NOVIDEO")} />
        ) : null}
        {videos?.length ? (
          <Box
            sx={{ marginBottom: "20px!important" }}
            className={classes.pagination}
          >
            <Pagination
              count={paginate.pgCount}
              variant="outlined"
              shape="rounded!important"
              onChange={handlePaginationClick}
              className={paginationClasses.root}
              size="small"
            />
          </Box>
        ) : null}
      </Container>
    </>
  );
};
export default memo(VideoGalleryDetails);
