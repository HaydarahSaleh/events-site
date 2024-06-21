import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  IconButton,
  Typography,
  Paper,
} from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { BiSearch } from "react-icons/bi";
import useStyles from "../../../styles/components/shared/mainSearchBar/mainSearchBarStyles";
import Button from "../../button/Button";

function MainSearchBar(props) {
  let {
    handleClick,
    setSearchTitle,
    data,
    setSearchStart,
    setSections,
    searchTitle,
    searchStart,
  } = props;
  const classes = useStyles();
  const { t } = useTranslation();
  const [checkedItems, setCheckedItems] = useState(["all"]);
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "en";
  const checkHandler = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCheckedItems([...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems?.filter((item) => item !== value));
    }
  };

  useEffect(() => {
    if (checkedItems?.length === 1 && checkedItems?.includes("all")) {
      setSections(["all"]);
    } else {
      setSections(checkedItems?.join(","));
    }
  }, [checkedItems]);

  // function handleChange(e) {
  //   setSearchTitle(e.target.value);
  //   setSections(checkedItems);
  // }

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
  return (
    <form
      className={classes.searchText}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Grid container spacing={2} className={classes.formContainer}>
        <Grid
          item
          sm={8}
          md={10}
          xs={12}
          className={classes.marginTop24}
          sx={{ width: "100%", position: "relative" }}
        >
          <Box className={classes.label}>{t("LABEL.SEARCH")}</Box>

          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={data}
            value={searchTitle}
            renderInput={(params) => (
              <TextField
                {...params}
                onChange={props.onChange}
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
            onKeyPress={(e) => {
              if (e.which === 13) {
                setSearchTitle(e?.target?.value);
                setSearchStart(!searchStart);
              }
            }}
            getOptionLabel={(option) => {
              if (option?.title) {
                return option.title[lang];
              } else {
                return searchTitle;
              }
            }}
            filterOptions={(options) => {
              return options;
            }}
            renderOption={renderOption}
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
          />
        </Grid>
        <Grid item sm={4} md={2} xs={12} className={classes.buttonGrid}>
          <Box className={classes.center}>
            <Button
              label={t("BUTTON.SEARCH")}
              className={classes.button}
              primary
              onClick={handleClick}
            />
            <IconButton className={classes.searchIcon}>
              <BiSearch />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
      <Typography className={classes.advancedSearch}>
        {t("SEARCH.ADVANCED_TEXT")}
      </Typography>
      <Grid item sm={4} md={4} xs={6} className={classes.advanced}>
        <FormControlLabel
          checked={checkedItems?.indexOf("all") > -1}
          control={<Checkbox onChange={checkHandler} value={"all"} />}
          label={t("SEARCH.ALL")}
        />
        <FormControlLabel
          control={<Checkbox onChange={checkHandler} value="news" />}
          label={t("SEARCH.NEWS")}
        />
        <FormControlLabel
          control={<Checkbox onChange={checkHandler} value="researches" />}
          label={t("SEARCH.RESEARCH")}
        />
        <FormControlLabel
          control={<Checkbox onChange={checkHandler} value="image" />}
          label={t("SEARCH.IMAGE")}
        />
        <FormControlLabel
          control={<Checkbox onChange={checkHandler} value="publications" />}
          label={t("SEARCH.PUBLICATIONS")}
        />
      </Grid>
    </form>
  );
}
export default MainSearchBar;
