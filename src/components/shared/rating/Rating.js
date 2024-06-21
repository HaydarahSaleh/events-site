import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../../redux/actions";
import useStyles from "../../../styles/components/headerDialog/headerDialog";

const { createNew } = actions;
export default function BasicRating(props) {
  const { t } = useTranslation();
  let { number } = props;
  const [value, setValue] = useState(number);
  const [disabled, setDisabled] = useState(true);
  const classes = useStyles();
  const dispatch = useDispatch();
  const reducers = useSelector((state) => state);

  useEffect(() => {
    if (reducers?.crud?.created?.success && reducers?.crud?.created?.feedBack) {
      setValue(reducers?.crud?.created?.feedBack?.rating);
    }
  }, [reducers?.crud?.created]);

  useEffect(() => {
    if (number) setValue(number);
  }, [number]);

  useEffect(() => {
    if (reducers?.crud?.dataReturned?.feedBack) {
      setDisabled(!reducers?.crud?.dataReturned?.feedBack?.askForRating);
    }
  }, [reducers]);

  const sendFeedBack = (newValue) => {
    if (Number(newValue) > 0) {
      const data = {};
      data["url"] = window.location.href;
      data["rate"] = Number(newValue);

      dispatch(createNew({ sort: "rate/feedback", payload: data }));
    }
  };

  return (
    <Box className={classes.ratingBox}>
      <Typography component="legend" className={classes.ratingTitle}>
        {t("BREADCRUMBS.RATING")}
      </Typography>
      <Rating
        className={classes.rating}
        name="size-small"
        size="small"
        value={value}
        disabled={
          disabled ||
          (reducers?.crud?.created?.success &&
            reducers?.crud?.created?.feedBack)
            ? true
            : false
        }
        onChange={(event) => {
          if (event.target.value) {
            setValue(event.target.value);
            sendFeedBack(event.target.value);
          }
        }}
      />
    </Box>
  );
}
