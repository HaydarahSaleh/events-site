import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import PrintOutlinedIcon from "@mui/icons-material/PrintOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import { Box, Button } from "@mui/material";
import ButtonGroup from "@mui/material/ButtonGroup";
import Tooltip from "@mui/material/Tooltip";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import * as htmlToImage from "html-to-image";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import useStyles from "../../../styles/components/shared/bannerStyle";
import ReportForm from "../reportForm/ReportForm";
import SharedDialog from "../sharedDialog/SharedDialog";
import SharingBtns from "./SharingBtns";

function FeedBackBtns({ componentRef }) {
  const classes = useStyles();
  const { t } = useTranslation();
  const [openSharing, setOpenSharing] = useState(false);
  const [openReport, setOpenReport] = useState(false);
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(null);
  const [message, setMessage] = useState("");
  const [dots, setDots] = useState(false);
  const handlePrint = useReactToPrint({
    content: () => componentRef?.current,
  });
  const useToolTipStyles = makeStyles((theme) => ({
    arrow: {
      color: `${theme.globals.colors.primary}!important`,
    },
    tooltip: {
      backgroundColor: `${theme.globals.colors.primary}!important`,
    },
  }));

  function Hint(props) {
    const classes = useToolTipStyles();

    return <Tooltip arrow classes={classes} {...props} />;
  }
  const handleOpenReport = () => {
    setOpenReport(true);
  };

  const handleReportClose = () => {
    setOpenReport(false);
  };

  const handleToggle = () => {
    setOpenSharing(true);
  };

  const handleClose = () => {
    setOpenSharing(false);
  };

  function handleListKeyDown() {
    setOpenSharing(true);
  }
  return (
    <ButtonGroup
      variant="contained"
      color="primary"
      aria-label="contained primary button group"
    >
      <Hint title={t("FEED_BACK.REPORT")}>
        <Button
          onClick={handleOpenReport}
          className={clsx(classes.button, classes.border)}
        >
          <BlockOutlinedIcon />
        </Button>
      </Hint>
      {/* <ExitForm open={openReport} /> */}
      <ReportForm open={openReport} handleClose={handleReportClose} />
      <Hint title={t("FEED_BACK.SHARE")}>
        <Button
          aria-haspopup="true"
          onClick={handleToggle}
          aria-controls={openSharing ? "menu-list-grow" : undefined}
          className={classes.border}
        >
          <ShareOutlinedIcon />
        </Button>
      </Hint>
      <SharingBtns
        className={classes.sharing}
        open={openSharing}
        handleClose={handleClose}
        handleListKeyDown={handleListKeyDown}
      />
      <ReactToPrint
        onBeforeGetContent={(e) =>
          htmlToImage
            .toPng(document.getElementById("full-page"))
            .then(function (dataUrl) {
              setData(dataUrl);
            })
        }
        onAfterPrint={() => {
          setOpen(false);
          setMessage("");
          setDots(false);
        }}
        trigger={() => (
          <Hint title={t("FEED_BACK.PRINT")}>
            <Button className="printBtn">
              <Box
                className={classes.printBox}
                onClick={(e) => {
                  setOpen(true);
                  setDots(true);
                  setMessage(t("FEED_BACK.PRINTPAGE"));
                }}
              >
                <PrintOutlinedIcon />
              </Box>
            </Button>
          </Hint>
        )}
        content={() => document.getElementById("img")}
      />

      {data ? <img src={data} id="img" className="image-to-print" /> : null}
      <SharedDialog open={open} description={message} dots={dots} />
    </ButtonGroup>
  );
}

export default FeedBackBtns;
