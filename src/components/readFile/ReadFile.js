import { Box } from "@mui/material";
import { TextDirection, Viewer, Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import ar_AE from "@react-pdf-viewer/locales/lib/ar_AE.json";
import { pageNavigationPlugin } from "@react-pdf-viewer/page-navigation";
import React, { memo } from "react";
import useStyles from "../../styles/components/shared/readFile/readFile";
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";
const ReadFile = ({ file }) => {
  const classes = useStyles();
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const defaultPageNavigationPlugin = pageNavigationPlugin();

  return (
    <Box className={classes.root}>
      {file && (
        <Worker workerUrl={pdfjsWorker}>
          <Viewer
            localization={ar_AE}
            theme={{
              direction: TextDirection.RightToLeft,
            }}
            plugins={[defaultLayoutPluginInstance, defaultPageNavigationPlugin]}
            fileUrl={file}
            enableToolbar={false}
          />
        </Worker>
      )}
    </Box>
  );
};

export default memo(ReadFile);
