import { Box, Grid, Slide, TextField, Paper } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import React, { memo, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actions from "../../redux/actions";
import useStyles from "../../styles/components/searchModal/searchModalStyles";
import Button from "../button/Button";
let timeout;
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

function SearchModal(props) {
  let { open, close, query, setQuery } = props;
  const [data, setData] = useState([]);
  const { getResults, getSuggestions } = actions;
  const dispatch = useDispatch();
  const [searchStart, setSearchStart] = useState(false);
  const [searchWord, setSearchWord] = useState(null);
  const navigate = useNavigate();
  const reducers = useSelector((state) => state);
  const handleChange = async (e) => {
    setSearchWord(e?.target?.value);
    if (timeout) clearTimeout(timeout);
    if (e?.target?.value && e?.target?.value.length > 2) {
      timeout = setTimeout(async () => {
        const data = {
          searchWord: e?.target?.value,
          limit: 3,
          offset: 0,
          spinner: "none",
        };
        setSearchStart(!searchStart);
        dispatch(getSuggestions({ sort: "search/elastic", data }));
      }, 1000);
    }
  };

  const renderOption = (props, option) => {
    if (data && data?.length > 0 && option && option?.title) {
      if (option?.url) {
        return (
          <a
            href={option?.url}
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          >
            {option?.title[lang]}
          </a>
        );
      } else {
        return <div {...props}> {option?.title[lang]}</div>;
      }
    }
  };
  // const handleQueryChange = (event) => {
  //   setQuery(event.target.value);
  // };
  const handleSearchSubmit = (event) => {
    let text = searchWord;
    setQuery("");
    const url = window.location.href?.split("/");
    let correctUrl = "/" + url?.filter((item, index) => index > 3)?.join("/");
    if (correctUrl === "/search-results") {
      const newEvent = new Event("searchPopUp");
      const data = {
        searchWord: text,
        sections: "all",
        limit: 3,
        offset: 0,
      };
      dispatch(getResults({ sort: "search/elastic", data }));
      window.dispatchEvent(newEvent);
    } else navigate(`${lang}/search-results`, { state: { query: text } });
    close();
  };
  useEffect(() => {
    if (
      reducers?.search?.getSuggestionsReturned?.searchSuggestions?.length > 0
    ) {
      setData(reducers?.search?.getSuggestionsReturned?.searchSuggestions);
    } else if (
      reducers?.search?.getSuggestionsReturned?.searchSuggestions?.length === 0
    ) {
      setData(reducers?.search?.getSuggestionsReturned?.searchSuggestions);
    }
  }, [reducers?.search?.getSuggestionsReturned?.searchSuggestions]);

  let lang = JSON.parse(localStorage.getItem("adfpLang"))
    ? JSON.parse(localStorage.getItem("adfpLang"))
    : "ar";

  const { t } = useTranslation();

  const classes = useStyles();
  return (
    <>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={close}
        aria-describedby="alert-dialog-slide-description"
        className={classes.root}
      >
        <DialogContent>
          <Grid container spacing={2} className={classes.formContainer}>
            <Grid item sm={9} xs={12} className={classes.marginTop24}>
              <Box className={classes.label}>{t("LABEL.TITLE")}</Box>
              <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                classes={{ root: classes.autoComplete }}
                options={data}
                value={query ? query : null}
                PaperComponent={({ children }) => (
                  <Paper
                    className={classes.selectPaper}
                    style={{
                      textTransform: "capitalize",
                    }}
                  >
                    {children}
                  </Paper>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    onKeyPress={(e) => {
                      if (e.which === 13) {
                        handleSearchSubmit();
                        setSearchStart(!searchStart);
                      }
                    }}
                    onChange={handleChange}
                    // onChange={handleQueryChange}
                    className={classes.field}
                  />
                )}
                getOptionLabel={(option) => {
                  if (option?.title) {
                    return option.title[lang];
                  } else {
                    return "";
                  }
                }}
                filterOptions={(options) => {
                  return options;
                }}
                renderOption={renderOption}
              />
            </Grid>

            <Grid item sm={2.5} xs={12}>
              <Box className={classes.center}>
                <Button
                  label={t("BUTTON.SEARCH")}
                  className={classes.button}
                  primary
                  onClick={(e) => {
                    handleSearchSubmit();
                    // handleQueryChange();
                    handleChange();
                    setSearchStart(!searchStart);
                  }}
                />
              </Box>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default memo(SearchModal);
