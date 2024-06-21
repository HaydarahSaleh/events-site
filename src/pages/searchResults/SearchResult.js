import { Box, Container, Grid, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { createBrowserHistory } from "history";
import { t } from "i18next";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { SearchResultCard } from "../../components/searchBar/SearchResultCard";
import Banner from "../../components/shared/Banner";
import MainSearchBar from "../../components/shared/mainSearchBar/MainSearchBar";
import NoSearchData from "../../components/shared/noData/NoSearchData";
import actions from "../../redux/actions";
import useStylesPagination from "../../styles/components/pagination/pagination";
import useStyles from "../../styles/pages/searchResult/searchResultStyles";

let timeout;
function SearchResult() {
  const { getResults, getSuggestions } = actions;
  const classes = useStyles();
  const [data, setData] = useState(null);
  const [dataSuggestions, setDataSuggestions] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const [count, setCount] = useState(1);
  const [contentCount, setContentCount] = useState(1);
  const [noData, setNoData] = useState(false);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchWord, setSearchWord] = useState("");
  const [searchStart, setSearchStart] = useState(false);
  const [sections, setSections] = useState("all");
  const history = createBrowserHistory();
  const paginationClasses = useStylesPagination();
  const dispatch = useDispatch();
  const reducers = useSelector((state) => state);

  const filterAllPosts = () => {
    setSearchStart(!searchStart);
  };
  const handlePaginate = (e, num) => {
    setPageNum(num);
  };

  const location = useLocation();

  useEffect(() => {
    const resetPageNum = () => {
      setPageNum(1);
    };
    window.addEventListener("searchPopUp", resetPageNum);

    return () => {
      window.removeEventListener("searchPopUp", resetPageNum);
    };
  }, []);

  useLayoutEffect(() => {
    let query = location.state?.query;
    if (query !== undefined) {
      setSearchTitle(query);
      setSearchWord(query);
      const sort = "search/elastic";
      const data = {
        searchWord: query,
        sections: sections ? sections : "all",
        limit: 3,
        offset: (pageNum - 1) * 3,
      };
      dispatch(getResults({ sort, data }));
      const newLocation = {
        ...location,
        state: { ...location.state, query: undefined },
      };
      history?.replace(newLocation, "");
    }
  }, []);

  useEffect(() => {
    if (searchTitle !== "") {
      const sort = "search/elastic";
      const data = {
        searchWord: searchTitle,
        sections: sections ? sections : "all",
        limit: 3,
        offset: (pageNum > 0 ? pageNum - 1 : 0) * 3,
      };
      dispatch(getResults({ sort, data }));
    }
  }, [pageNum, searchStart]);

  useEffect(() => {
    if (reducers?.search?.getResultsReturned?.searchWord) {
      setSearchTitle(reducers?.search?.getResultsReturned?.searchWord);
      setSearchWord(reducers?.search?.getResultsReturned?.searchWord);
    }
    if (reducers?.search?.getResultsReturned?.searchResult?.length > 0) {
      setData(reducers?.search?.getResultsReturned?.searchResult);
      setContentCount(reducers?.search?.getResultsReturned?.count);
      setCount(Math?.ceil(reducers?.search?.getResultsReturned?.count / 3));
      setNoData(false);
    } else if (reducers.search.getResultsReturned.searchResult?.length === 0) {
      setNoData(true);
      setData(reducers.search.getResultsReturned.searchResult);
    }
  }, [reducers.search.getResultsReturned]);

  useEffect(() => {
    if (
      reducers?.search?.getSuggestionsReturned?.searchSuggestions?.length > 0
    ) {
      setDataSuggestions(
        reducers?.search?.getSuggestionsReturned?.searchSuggestions
      );
    } else if (
      reducers?.search?.getSuggestionsReturned?.searchSuggestions?.length === 0
    ) {
      setDataSuggestions(
        reducers?.search?.getSuggestionsReturned?.searchSuggestions
      );
    }
  }, [reducers?.search?.getSuggestionsReturned]);

  const handleChange = async (e) => {
    setPageNum(1);
    setSearchTitle(e?.target?.value);
    if (timeout) clearTimeout(timeout);
    if (e?.target?.value && e.target.value.length > 2) {
      timeout = setTimeout(async () => {
        const data = {
          searchWord: searchTitle,
          sections: sections ? sections : "all",
          limit: 3,
          offset: (pageNum - 1) * 3,
          spinner: "none",
        };
        dispatch(getSuggestions({ sort: "search/elastic", data }));
        setSearchTitle(e.target.value);
      }, 1000);
    }
  };

  return (
    <>
      <Banner />
      <Container maxWidth="xl" className={classes.root}>
        <MainSearchBar
          handleClick={filterAllPosts}
          setSearchTitle={setSearchTitle}
          data={dataSuggestions}
          setSearchStart={setSearchStart}
          setSections={setSections}
          searchTitle={searchTitle}
          searchStart={searchStart}
          onChange={handleChange}
        />
        {data?.length > 0 && !noData ? (
          <Grid container spacing={2} className={classes.container}>
            <Box className={classes.resultBox}>
              <Typography className={classes.result}>
                {t("SEARCH.RESULTS")}
              </Typography>
              <Typography className={classes.resultCount}>
                <span className={classes.resultPhrase}>{contentCount}</span>
                {t("SEARCH.RESULTS_COUNT")}
                <span
                  className={classes.resultPhrase}
                >{`"${searchWord}"`}</span>
              </Typography>
            </Box>
            {data?.map((item) => {
              return (
                <Grid item xs={12} sm={12} md={12} className={classes.grid}>
                  <SearchResultCard item={item} phrase={searchTitle} />
                </Grid>
              );
            })}
          </Grid>
        ) : noData ? (
          <NoSearchData morePaddingTop />
        ) : null}
        {!noData && data && data?.length > 0 ? (
          <Box
            sx={{ marginBottom: "20px!important", paddingTop: "30px" }}
            className={classes.pagination}
          >
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
          </Box>
        ) : null}
      </Container>
    </>
  );
}
export default SearchResult;
