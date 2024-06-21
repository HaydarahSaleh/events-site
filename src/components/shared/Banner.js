import { Box, Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../redux/actions";
import useStyles from "../../styles/components/shared/bannerStyle";
import BreadCrumb from "../shared/BreadCrumb";
import BasicRating from "../shared/rating/Rating";
import FeedBackBtns from "./feedBackBtns/FeedBackBtns";
import SharedDialog from "./sharedDialog/SharedDialog";

const { getData, clear, created } = actions;
const Banner = (props) => {
  const { t } = useTranslation();
  const [selectedPage, setSelectedPage] = useState({});
  const [pageTitle, setPageTitle] = useState(null);
  const [pagePicture, setPagePicture] = useState(null);
  const [rating, setRating] = useState(0);
  const [open, setOpen] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const reducers = useSelector((state) => state);
  let { title } = props;
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    const url = window.location.href;
    if (url) dispatch(getData({ sort: "rate/askfor", data: { url: url } }));
  }, [window.location.href]);

  useEffect(() => {
    if (reducers?.crud?.dataReturned?.feedBack)
      setRating(Number(reducers?.crud?.dataReturned?.feedBack?.rate));

    if (
      reducers?.crud?.dataReturned?.feedBack?.pagePicture &&
      reducers?.crud?.dataReturned?.feedBack?.pagePicture?.uuid
    )
      setPagePicture(reducers?.crud?.dataReturned?.feedBack?.pagePicture);
  }, [reducers]);

  useEffect(() => {
    if (selectedPage) {
      if (selectedPage?.page) {
        setPageTitle(selectedPage?.page);
        return;
      } else if (selectedPage?.category) {
        setPageTitle(selectedPage?.category);
        return;
      } else if (selectedPage?.parentPage) {
        setPageTitle(selectedPage?.parentPage);
      }
    }
  }, [selectedPage]);

  useEffect(() => {
    if (
      reducers?.crud?.created &&
      reducers?.crud?.created?.success &&
      reducers?.crud?.created?.feedBack &&
      reducers?.crud?.created?.sort === "rate/report"
    ) {
      setOpen(true);
      setDialogTitle(t("LABEL.THANKS"));
      setDescription(t("LABEL.SENDSUCCESSFULLY"));
      setSuccess(true);
      setMessage(t("LABEL.SUCCESS"));
      const url = window.location.href;
      if (url) dispatch(getData({ sort: "rate/askfor", data: { url: url } }));
      dispatch(created({ data: false }));
    } else if (
      reducers?.crud?.created &&
      !reducers?.crud?.created?.success &&
      reducers?.crud?.created?.sort === "rate/report"
    ) {
      setOpen(true);
      setDialogTitle(t("LABEL.SORRY"));
      setDescription(t("LABEL.TRYLATER"));
      setMessage(t("LABEL.VOTEDBEFORE"));
      setSuccess(false);
      dispatch(created({ data: false }));
    }
  }, [reducers]);

  const handleOkay = () => {
    setOpen(false);
    dispatch(clear({ data: {} }));
  };
  return (
    <>
      <Container
        className={classes.boxContainer}
        style={{
          backgroundImage:
            pagePicture && pagePicture?.uuid && pagePicture?.id !== 3
              ? `url(/api/file/download/${pagePicture?.uuid})`
              : "url(/assets/images/peace.jpg)",
          zIndex: 9,
          maxWidth: "100%",
          backgroundSize:"cover",
          backgroundColor: "#fff",
          backgroundPosition: "0%",
        }}
      >
        <Box className={classes.pageTitlebox}>
          <Typography className={classes.pageTitle}>{pageTitle}</Typography>
        </Box>
      </Container>

      <Container maxWidth="xl" className={classes.crumb}>
        <Box className={classes.pageRate}>
          <BreadCrumb
            separator="<"
            aria-label="breadcrumb"
            className={classes.crumbDetail}
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
          <Box className="ratingNBtns">
            <Box className="btns">
              <FeedBackBtns />
            </Box>
            <Box className="rating">
              <BasicRating number={rating} />
            </Box>
          </Box>
        </Box>

        <SharedDialog
          open={open}
          buttons={true}
          okayBtn={true}
          title={dialogTitle}
          description={description}
          message={message}
          success={success}
          handleOkay={handleOkay}
        />
      </Container>
    </>
  );
};
export default Banner;
