import {
  Box,
  Button,
  Card,
  Grid,
  CardActions,
  Link,
  Typography,
} from "@mui/material";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AOS from "aos";
import moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import React, { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import actions from "../../../redux/actions";
import useStyles from "../../../styles/components/shared/pdfCard/pdfCardStyles";
import { getFileUrl, getFiles } from "../../../publicFunctions";
import { FiBookOpen } from "react-icons/fi";
import { BsCloudDownload } from "react-icons/bs";

function SharedCard(props) {
  const classes = useStyles();
  let { files, data } = props;
  const { downloadCountAction } = actions;
  const dispatch = useDispatch();
  const { t } = useTranslation();

  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 50 });
    AOS.refresh();
  }, []);

  const handleClick = (url, title) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title ? title : "File");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");

  const arrayFile = [
    files?.find(
      (item) => item?.title?.en === "The conceptual paper for the conference"
    ),
    files?.find((item) => item?.title?.en === "framing word"),
    files?.find((item) => item?.title?.en === "Conference agenda"),
    files?.find((item) => item?.title?.en === "The Final Statement"),
  ];

  return (
    <>
      {arrayFile && arrayFile?.length > 0
        ? arrayFile.map((item) => {
            return (
              <>
                {item !== undefined && (
                  <Grid item xs={12} lg={3} md={3} sm={12}>
                    <Card
                      className={classes.card}
                      data-aos="fade-up"
                      data-aos-duration="1500"
                    >
                      <Box className={classes.content}>
                        <CardMedia>
                          <Box className={classes.ImageBox}>
                            <img src="/assets/images/articles.png" alt="" />
                          </Box>
                        </CardMedia>
                        <CardContent className={classes.cardContent}>
                          <Box className={classes.titleBox}>
                            <Typography className={classes.title}>
                              <bdi>
                                {item?.title && item.title[lang]
                                  ? item.title[lang]
                                  : "File"}
                              </bdi>
                            </Typography>
                          </Box>
                        </CardContent>
                        <CardActions className={classes.action}>
                          <Box className={classes.iconBox}>
                            <FiBookOpen className={classes.icon} />
                            <a
                              href={`/${lang}/annual-fourms/${data?.alias}?file=${item?.id}`}
                            >
                              <Button size="small">{t("BUTTON.VIEW")}</Button>
                            </a>
                          </Box>
                          <Box className={classes.iconBox}>
                            <BsCloudDownload className={classes.icon} />
                            <Button
                              size="small"
                              onClick={async () => {
                                dispatch(
                                  downloadCountAction({
                                    id: item?.id,
                                    language: lang,
                                  })
                                );
                                const url = await getFileUrl(item?.uuid);
                                handleClick(
                                  url,
                                  item.title[lang] ? item.title[lang] : "File"
                                );
                              }}
                            >
                              {t("BUTTON.DOWNLOAD")}
                            </Button>
                          </Box>
                        </CardActions>
                      </Box>
                    </Card>
                  </Grid>
                )}
              </>
            );
          })
        : null}
    </>
  );
}

export default memo(SharedCard);
