import { Box, Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import SearchBar from "../../components/searchBar/SearchBar";
import Banner from "../../components/shared/Banner";
import NoData from "../../components/shared/noData/NoData";
import { getImage } from "../../publicFunctions";
import actions from "../../redux/actions";
import useStylesPagination from "../../styles/components/pagination/pagination";
import useStyles from "../../styles/pages/publications/publicationsStyles";

function Publications() {
  const { getAll, filterPosts, filterPostsReturned } = actions;
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [count, setCount] = useState(1);
  const [searchStart, setSearchStart] = useState(false);
  const [emptyFields, setEmptyFields] = useState(false);
  const [year, setYear] = useState("");
  const [title, setTitle] = useState("");
  const [clicked, setClicked] = useState(false);
  const [searchName, setSearchName] = useState("");
  const [searchYear, setSearchYear] = useState("");
  const [noData, setNoData] = useState(false);
  const paginationClasses = useStylesPagination();
  const dispatch = useDispatch();
  const reducers = useSelector((state) => state);

  const handlePaginate = (e, num) => {
    setPageNum(num);
  };

  const filterAllPosts = ({ searchYear, searchName }) => {
    setPageNum(1);
    if (searchYear || searchName) {
      setClicked(!clicked);
    }
  };

  useEffect(() => {
    if (searchStart) {
      if (year || title) {
        const sort = "filter/posts";
        const data = {
          title: title ? title : "",
          year: year ? year : "",
          type: "publications",
          limit: 6,
          offset: (pageNum - 1) * 6,
        };

        dispatch(filterPosts({ sort, data }));
      }
    } else {
      let sort = "post";
      let data = {
        type: "publications",
        limit: 6,
        offset: (pageNum - 1) * 6,
      };
      dispatch(getAll({ sort, data }));
    }
  }, [pageNum, clicked]);

  useEffect(() => {
    setData([]);
    let searchData = reducers?.filterPosts?.filterPostsReturned?.data?.results;
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
    } else if (reducers?.crud?.allReturned?.publications?.length > 0) {
      setNoData(false);
      setData(reducers?.crud?.allReturned?.publications);
      setCount(Math?.ceil(reducers?.crud?.allReturned?.count / 6));
    } else if (reducers?.crud?.allReturned?.publications?.length === 0) {
      setNoData(true);
    }
  }, [
    reducers?.filterPosts,
    reducers?.crud?.allReturned,
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
  }, [emptyFields]);

  return (
    <>
      <Banner />
      <Container maxWidth="xl" className={classes.root}>
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
          sort="post/years"
          type="publications"
          field="privateDate"
          setSearchStart={setSearchStart}
        />

        {data?.length > 0 && !noData ? (
          <Grid
            container
            maxWidth="xl"
            className={classes.Gridcontainer}
            spacing={2}
          >
            {data?.map((item) => {
              return (
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                  sm={6}
                  className={classes.cardGrid}
                >
                  <PublicationCard
                    item={item}
                    image={
                      item?.files && item?.files?.length
                        ? getImage(item?.files)
                        : null
                    }
                    typeOfItem={item.type}
                    date={item?.privateDate}
                    downloadButtons={true}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : noData ? (
          <NoData morePaddingTop />
        ) : null}
        <Box
          sx={{ marginBottom: "20px!important" }}
          className={classes.pagination}
        >
          {data?.length > 0 && !searchStart ? (
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
    </>
  );
}
export default Publications;
