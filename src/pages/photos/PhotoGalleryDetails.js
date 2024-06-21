import { Box, Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import * as moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import React, {
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Viewer from "react-images-viewer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import Banner from "../../components/shared/Banner";
import ImageCard from "../../components/shared/imageCard/ImageCard";
import { pagination } from "../../components/shared/utils";
import { getImages } from "../../publicFunctions";
import actions from "../../redux/actions";
import useStylesPagination from "../../styles/components/pagination/pagination";
import useStyles from "../../styles/pages/photos/imageListStyles";

const PhotoGalleryDetails = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const reducers = useSelector((state) => state);
  const [images, setImages] = useState([]);
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [paginate, setPaginate] = useState({
    requiredArr: [],
    pgCount: 0,
  });
  const paginationClasses = useStylesPagination();
  const { alias } = useParams();
  const dispatch = useDispatch();
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  const { getByAlias } = actions;
  useEffect(() => {
    let sort = "category";
    if (alias);
    dispatch(getByAlias({ sort, alias }));
  }, [alias]);

  useEffect(() => {
    if (reducers?.crud?.byAliasReturned?.success) {
      setData(reducers?.crud?.byAliasReturned);
    } else if (
      !reducers?.crud?.byAliasReturned?.success &&
      reducers?.crud?.byAliasReturned?.message
    )
      window.location?.replace("/not-found");
  }, [reducers?.crud?.byAliasReturned]);

  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");
  const classes = useStyles();

  useEffect(() => {
    if (data?.files && data?.files?.length > 0) {
      let imagesArray = getImages(data?.files);
      let newImages = [];
      if (imagesArray?.length > 0)
        imagesArray?.map((image, index) =>
          newImages?.push({
            src: `/api/file/download/${image?.uuid}?size=large`,
            thumbnail: `/api/file/download/${image?.uuid}?size=large`,
            index: index,
          })
        );
      setImages(newImages);
    }
  }, [data?.files]);

  useLayoutEffect(() => {
    const displayedContent = images;
    const { count, requiredArr } = pagination(displayedContent, 9, pageNum);
    setPaginate({ requiredArr, pgCount: count });
  }, [images, pageNum]);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = useCallback(() => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  }, []);

  const handlePaginationClick = (e, num) => {
    setPageNum(num);
  };

  const imageSection = useMemo(
    () =>
      paginate?.requiredArr?.map((item) => {
        return (
          <Grid>
            <ImageCard
              image={item}
              data={images}
              hanleClick={() => openImageViewer(item?.index)}
              index={item?.index}
              alt=""
            />
          </Grid>
        );
      }),
    [paginate.requiredArr]
  );
  return (
    <>
      <Banner />
      <Container maxWidth="xl" className={classes.root}>
        <Typography className={classes.title}>{data?.title}</Typography>
        {data?.privateDate && (
          <Typography className={classes.date}>
            {moment(data?.privateDate)
              .format(" DD MMMM YYYY")
              .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))}
          </Typography>
        )}
        <Grid container className={classes.viewer}>
          {imageSection}
        </Grid>
        {isViewerOpen && (
          <div className="imgViewerContainer">
            <Viewer
              imgs={images}
              isOpen={true}
              width={2000}
              currImg={currentImage}
              onClickPrev={() => setCurrentImage(currentImage - 1)}
              onClickNext={() => setCurrentImage(currentImage + 1)}
              disableScroll={false}
              closeOnClickOutside={true}
              onClose={closeImageViewer}
              customControls={"full-screen"}
            />
          </div>
        )}
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
      </Container>
    </>
  );
};
export default memo(PhotoGalleryDetails);
