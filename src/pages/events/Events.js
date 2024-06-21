import { Container, Grid } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import { default as React, useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import InnerEventCard from "../../components/eventCard/InnerEventCard";
import SearchBar from "../../components/searchBar/SearchBar";
import Banner from "../../components/shared/Banner";
import NoData from "../../components/shared/noData/NoData";
import { getImage } from "../../publicFunctions";
import actions from "../../redux/actions";
import useStylesPagination from "../../styles/components/pagination/pagination";
import useStyles from "../../styles/pages/events/events";

export default function Events() {
  const dispatch = useDispatch();
  const reducers = useSelector((state) => state);
  const paginationClasses = useStylesPagination();
  const { getAll, filterPosts, filterPostsReturned } = actions;
  const [data, setData] = useState(null);
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
  const classes = useStyles();

  const filterAllPosts = ({ searchYear, searchName }) => {
    setPageNum(1);
    if (searchYear || searchName) {
      setClicked(!clicked);
    }
  };

  useEffect(() => {
    if (searchStart) {
      if (year || title) {
        setSearchStart(true);
        const sort = "filter/posts";
        const data = {
          title: title ? title : "",
          year: year ? year : "",
          type: "events",
          limit: 6,
          offset: (pageNum - 1) * 6,
        };

        dispatch(filterPosts({ sort, data }));
      }
    } else {
      let sort = "post";
      let data = {
        type: "events",
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
    } else if (reducers?.crud?.allReturned?.events?.length > 0) {
      setData(reducers?.crud?.allReturned?.events);
      setNoData(false);
      setCount(Math?.ceil(reducers?.crud?.allReturned?.count / 6));
    } else if (reducers?.crud?.allReturned?.researches?.length === 0) {
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

  const handlePaginate = (e, num) => {
    setPageNum(num);
  };
  useLayoutEffect(() => {
    setPageNum(1);
  }, []);

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
          type="events"
          field="startTime"
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
                  xs={12}
                  sm={6}
                  lg={4}
                  md={4}
                  className={classes.gridItem}
                >
                  <InnerEventCard
                    item={item}
                    path={`/events/${item?.alias}`}
                    image={
                      item?.cardImages && item?.cardImages?.length
                        ? getImage(item?.cardImages)
                        : null
                    }
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : noData ? (
          <NoData morePaddingTop />
        ) : null}
        {data?.length > 0 ? (
          <Pagination
            className={paginationClasses.root}
            count={count}
            variant="outlined"
            page={pageNum}
            shape="rounded"
            onChange={handlePaginate}
          />
        ) : null}
      </Container>
    </>
  );
}
