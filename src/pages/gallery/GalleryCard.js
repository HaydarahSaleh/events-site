import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import { CardContent, CardMedia } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import AOS from "aos";
import clsx from "clsx";
import moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import React, { memo, useEffect, useState } from "react";
import { BsEyeFill } from "react-icons/bs";
import { RiDownloadLine } from "react-icons/ri";
import { getFiles } from "../../publicFunctions";
import useStyles from "../../styles/components/photoCard/photoCardStyle";
import { Link } from "react-router-dom";

const PhotoCard = (props) => {
  const { homePage, item, typeOfItem, path, image, date } = props;
  const [newFile, setNewFile] = useState();

  useEffect(() => {
    AOS.init({ duration: 2000, delay: 50 });
    AOS.refresh();
  }, []);

  useEffect(() => {
    if (item?.type === "publications") {
      let files = item?.files;
      let currFile = getFiles(files);
      setNewFile(currFile[0]);
    }
  }, [item.type]);
  const classes = useStyles();

  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");

  return (
    <Link to={`/${lang + path}`}>
      <Card
        className={homePage ? clsx(classes.marginY) : classes.MediaCenterCard}
        data-aos="flip-right"
      >
        {typeOfItem === "link" ? (
          <CardMedia
            component="iframe"
            title={item.alt || ""}
            image={item?.link}
            allowFullScreen={true}
            frameBorder="0"
          />
        ) : (
          <CardMedia className={classes.image}>
            <img
              src={
                item?.files?.length > 0
                  ? `/api/file/download/${image?.uuid}?size=medium`
                  : `/assets/images/book.png`
              }
              alt={image?.alt}
            />
          </CardMedia>
        )}
        {typeOfItem === "videos" && (
          <Box className={classes.icon}>
            <VideoLibraryIcon style={{ color: "#BF9E66" }} />
          </Box>
        )}
        {typeOfItem === "photos" && (
          <Box className={classes.icon}>
            <PhotoLibraryIcon style={{ color: "#BF9E66" }} />
          </Box>
        )}
        <CardContent className={classes.cardContent}>
          <Box display="flex" flexDirection="row">
            <Typography className={classes.date}>
              {moment(date ? date : item?.privateDate)
                .format("DD MMM YYYY")
                .replace(/[٠-٩]/g, (y) => "٠١٢٣٤٥٦٧٨٩".indexOf(y))}
            </Typography>

            {typeOfItem === "publications" && (
              <Box className={classes.fileBox}>
                <Box>
                  <span className={classes.num}>
                    {newFile?.downloaded ? newFile?.downloaded : "0"}
                  </span>
                  <RiDownloadLine
                    className={clsx(classes.fileIcon, classes.marginRight4)}
                  />{" "}
                </Box>
                <Box>
                  {" "}
                  <span className={classes.num}>
                    {newFile?.viewed ? newFile?.viewed : "0"}{" "}
                  </span>
                  <BsEyeFill className={classes.fileIcon} />{" "}
                </Box>
              </Box>
            )}
          </Box>
          <Typography
            className={
              typeOfItem === "link" ? classes.vedioTitle : classes.title
            }
            dangerouslySetInnerHTML={{
              __html: `${item?.title}`,
            }}
          ></Typography>

          <Typography
            className={classes.description}
            dangerouslySetInnerHTML={{
              __html: `${item?.description}`,
            }}
          ></Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default memo(PhotoCard);
