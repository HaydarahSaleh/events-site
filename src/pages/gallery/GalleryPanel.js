import { Box, Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { memo } from "react";
import NoData from "../../components/shared/noData/NoData";
import { getImage } from "../../publicFunctions";
import useStylesPagination from "../../styles/components/pagination/pagination";
import useStyles from "../../styles/pages/gallery/galleryStyles";
import GalleryCard from "./GalleryCard";

function MediaCenterPanel(props) {
  let { value, dataOfSection, pageNum, setPageNum, count, noData } = props;
  const classes = useStyles();
  const paginationClasses = useStylesPagination();

  const handlePaginate = (e, num) => {
    setPageNum(num);
  };
  const getPath = () => {
    return value === 0
      ? `news`
      : value === 1
      ? `photos`
      : value === 2
      ? `videos`
      : `publications`;
  };

  return (
    <Container maxWidth="xl" className={classes.root}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
        {dataOfSection?.length > 0 && !noData ? (
          dataOfSection?.map((item) => {
            return (
              <Grid item xs={12} md={4} sm={6}>
                <GalleryCard
                  item={item}
                  image={
                    item?.cardImages && item?.cardImages?.length
                      ? getImage(item?.cardImages)
                      : null
                  }
                  tab={value}
                  path={`/${getPath(value)}/${item?.alias}`}
                />
              </Grid>
            );
          })
        ) : noData ? (
          <NoData />
        ) : null}
      </Grid>
      <Box
        sx={{ marginBottom: "20px!important" }}
        className={classes.pagination}
      >
        {dataOfSection?.length > 0 ? (
          <Stack spacing={2}>
            <Pagination
              variant="outlined"
              color="primary"
              onChange={handlePaginate}
              count={count}
              page={pageNum}
              className={paginationClasses.root}
              size="small"
            />
          </Stack>
        ) : null}
      </Box>
    </Container>
  );
}

export default memo(MediaCenterPanel);
