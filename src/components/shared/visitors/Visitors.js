import React from "react";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

function Visitors() {
  const { t } = useTranslation();
  const { pageInfoReturned } = useSelector((state) => state);

  return (
    <Box component="span" className="visitors">
      {t("VISITORS")}: {pageInfoReturned?.siteVisitors}
    </Box>
  );
}

export default Visitors;
