import LinkIcon from "@mui/icons-material/Link";
import {
  Box,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Link,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import * as moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import React, { memo } from "react";
import { useTranslation } from "react-i18next";
import { CgCalendarDates } from "react-icons/cg";
import { MdLocationOn } from "react-icons/md";
import useStyles from "../../styles/pages/basicPage/basicPage";
import BasicPageSlider from "./BasicPageSlider";
import Table from "./Table";

const MainBasicPage = (props) => {
  const { t } = useTranslation();
  let {
    description,
    data,
    title,
    images,
    type,
    privateDate,
    endTime,
    location,
    startTime,
    files,
    setFiles,
    videoGalleryLink,
    photoGalleryLink,
    newsLink,
    surveyLink,
    liveBroadCastLink,
    winners,
    categoryTitle,
  } = props;
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");
  const eventDateNow =
    Date.parse(startTime) <= Date.now() && Date.parse(endTime) >= Date.now();
  const classes = useStyles();
  let days;
  let activeFrom;
  let activeTo;
  if (type === "events") {
    const d = moment(startTime).format("YYYY-MM-D");
    const d1 = moment(endTime).format("YYYY-MM-D");
    var given = moment(d, "YYYY-MM-DD");
    var current = moment().startOf("day");
    days = moment.duration(given.diff(current)).asDays();
    activeFrom = moment(current).isBefore(d);
    activeTo = moment(current).isAfter(d1);
  }

  function cardLink({ title, link }) {
    return (
      <Grid item lg={6} md={6} sm={6} xs={12}>
        <Link href={link}>
          <Box className={clsx(link ? classes.linkBox : classes.inactiveLink)}>
            <Box className={clsx(link ? classes.activeCircle : classes.circle)}>
              <LinkIcon style={{ color: "rgba(255,255,255,0.6)" }} />
            </Box>
            <Typography className={classes.linkTitle}>{title}</Typography>
          </Box>
        </Link>
      </Grid>
    );
  }

  return (
    <Box className={classes.root}>
      {type !== "generalPages" && (
        <Typography className={classes.title}>{title}</Typography>
      )}
      {privateDate && type !== "events" && type !== "generalPages" ? (
        <Typography className={classes.date}>
          {moment(privateDate)
            .format("DD MMM YYYY")
            .replace(/[٠-٩]/g, (y) => "٠١٢٣٤٥٦٧٨٩".indexOf(y))}
        </Typography>
      ) : null}
      {type === "events" && categoryTitle ? (
        <Typography className={classes.categotyTitle}>
          {categoryTitle}
        </Typography>
      ) : null}
      {type === "events" ? (
        <Box className={classes.eventInfo}>
          {startTime && endTime ? (
            <>
              <Box className={classes.dateTime}>
                <CgCalendarDates className={classes.icon} />
                <Typography className={classes.date}>
                  <span className={classes.labelDate}>{t("LABEL.FROM")}</span>
                  <span className={classes.timeSpan}>
                    {moment(startTime)
                      .format("DD MMM YYYY")
                      .replace(/[٠-٩]/g, (y) => "٠١٢٣٤٥٦٧٨٩".indexOf(y))}
                  </span>

                  <span className={classes.labelDate}>{t("LABEL.TO")}</span>
                  <span className={classes.timeSpan}>
                    {moment(endTime)
                      .format("DD MMM YYYY")
                      .replace(/[٠-٩]/g, (y) => "٠١٢٣٤٥٦٧٨٩".indexOf(y))}
                  </span>
                </Typography>
              </Box>
            </>
          ) : null}
          {location ? (
            <a href={location} target="_blank" className={classes.eventMap}>
              <MdLocationOn className={classes.iconLocation} />
              <Typography className={classes.titleLocation}>
                {location}
              </Typography>
            </a>
          ) : null}
          {eventDateNow ? (
            <Box className={classes.happenBox}>
              <Typography className={classes.happenText}>
                {t("LABEL.HAPPEN")}
              </Typography>
              <Box className={classes.borderBoxNow}>
                <Box className={classes.circleError}></Box>
              </Box>
            </Box>
          ) : null}
        </Box>
      ) : null}

      {type === "events" && eventDateNow && liveBroadCastLink ? (
        <Grid container className={classes.liveGrid}>
          <Grid item xs={12} md={12} lg={12} className={classes.mediaRoot}>
            <CardMedia
              component="iframe"
              title={""}
              image={liveBroadCastLink?.replace("watch?v=", "embed/")}
              className={classes.mediaBox}
              allowFullScreen={true}
              frameBorder="0px"
            />
          </Grid>
        </Grid>
      ) : null}
      {type === "events" && eventDateNow && liveBroadCastLink ? null : (
        <BasicPageSlider images={images} type={type} />
      )}

      <CardContent className={classes.cardContent}>
        <div
          className={classes.description}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </CardContent>
      {(type === "events" || type === "news") &&
      (surveyLink || newsLink || photoGalleryLink || videoGalleryLink) ? (
        <Box className={classes.linksContainer}>
          <Typography className={classes.typoFile}>
            {t("BASICPAGE.RELATED_LINKS")}
          </Typography>

          <Grid container>
            {surveyLink
              ? cardLink({ title: t("BASICPAGE.SURVEY"), link: surveyLink })
              : null}
            {newsLink
              ? type === "news"
                ? cardLink({
                    title: t("BASICPAGE.EXTRNAL_LINK"),
                    link: newsLink,
                  })
                : cardLink({ title: t("BASICPAGE.NEWS"), link: newsLink })
              : null}
            {photoGalleryLink
              ? cardLink({
                  title: t("BASICPAGE.PHOTO_GALLERY"),
                  link: photoGalleryLink,
                })
              : null}
            {videoGalleryLink
              ? cardLink({
                  title: t("BASICPAGE.VIDEO_GALLERY"),
                  link: videoGalleryLink,
                })
              : null}
          </Grid>
        </Box>
      ) : null}

      {files?.length > 0 && (
        <Container maxWidth="xl" className={classes.container}>
          <Typography className={classes.typoFile}>
            {t("BASICPAGE.FILES")}
          </Typography>
          <Table newsFiles={files} setFiles={setFiles} />
        </Container>
      )}
    </Box>
  );
};
export default memo(MainBasicPage);
