import { Box, Container, Link, Typography } from "@mui/material";
import clsx from "clsx";
import * as moment from "moment";
import "moment/locale/ar-sa";
import "moment/locale/en-au";
import "moment/locale/fr";
import {
  default as React,
  memo,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { useTranslation } from "react-i18next";
import { BsEyeFill } from "react-icons/bs";
import { IoMdDownload } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import MainBasicPage from "../../components/basicPage/MainBasicPage";
import Button from "../../components/button/Button";
import ReadFile from "../../components/readFile/ReadFile";
import Banner from "../../components/shared/Banner";
import NoData from "../../components/shared/noData/NoData";
import {
  getDataInfo,
  getFileUrl,
  getFiles,
  getImages,
  isPdf,
} from "../../publicFunctions";
import actions from "../../redux/actions";
import useStyles from "../../styles/pages/basicPage/basicPage";

const { readFileAction, downloadCountAction, getByAlias } = actions;

function BasicPage(props) {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  const { alias, type } = useParams();
  const [files, setFiles] = useState();
  const [currentFile, setCurrentFile] = useState("");
  const [viewCount, setViewCount] = useState("");
  const [downloadCount, setDownloadCount] = useState("");
  const [disabled, setDisabled] = useState(false);
  const classes = useStyles();
  const reducers = useSelector((state) => state);
  const urlParams = new URLSearchParams(window.location.search);

  const fileId = urlParams.get("file");
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";
  moment.locale(lang === "ar" ? "ar-sa" : lang === "fr" ? "fr" : "en-au");
  let { startDate } = props;
  useEffect(() => {
    let sort = getDataInfo(type);

    if (alias) dispatch(getByAlias({ sort, alias, language: lang }));
  }, [alias, type]);

  useEffect(() => {
    if (
      reducers?.crud?.byAliasReturned &&
      reducers?.crud?.byAliasReturned?.files?.length > 0
    ) {
      setFiles(getFiles(reducers?.crud?.byAliasReturned?.files));
    }
  }, [reducers?.crud?.byAliasReturned]);

  useLayoutEffect(() => {
    if (reducers?.crud?.byAliasReturned) {
      if (reducers?.crud?.byAliasReturned?.success) {
        setData(reducers?.crud?.byAliasReturned);
      }
    } else if (
      !reducers?.crud?.byAliasReturned?.success &&
      reducers?.crud?.byAliasReturned?.message
    ) {
      window.location?.replace("/not-found");
    }
  }, [reducers?.crud?.byAliasReturned, fileId]);

  useEffect(() => {
    if (reducers?.crud?.byAliasReturned?.success) {
      if (
        fileId &&
        (reducers?.crud?.byAliasReturned?.type === "encyclopedia" ||
          type === "annual-fourms")
      ) {
        setCurrentFile(files?.filter((item) => item?.id === Number(fileId)));
      } else setCurrentFile(getFiles(reducers?.crud?.byAliasReturned?.files));
    }
  }, [data, fileId]);

  useEffect(() => {
    if (currentFile && currentFile[0]?.id) {
      let id = currentFile[0]?.id;
      dispatch(readFileAction({ id: id }));
    }
  }, [currentFile]);

  useEffect(() => {
    if (reducers?.files?.readCompleted) {
      setViewCount(reducers?.files?.readCompleted?.file?.viewed);
    }
  }, [reducers?.files?.readFileAction]);

  useEffect(() => {
    if (reducers.files.downloadCountCompleted) {
      setDisabled(false);
      setDownloadCount(
        reducers?.files?.downloadCountCompleted?.file?.downloaded
      );
    }
  }, [reducers.files.downloadCountCompleted]);

  const handleDownload = (url, title) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title ? title : "File");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <>
      <Banner />
      <Container maxWidth="xl" className={classes.root}>
        {data && isPdf(type) === false && data?.type !== "encyclopedia" && (
          <MainBasicPage
            title={data?.title}
            data={data}
            description={data?.description}
            privateDate={startDate ? data?.startDate : data?.privateDate}
            subtitles={`${t("TITLE.NEWS")}`}
            images={
              data?.files && data?.files?.length > 0
                ? getImages(data?.files)
                : null
            }
            type={type}
            files={files}
            setFiles={setFiles}
            newsLink={data?.newsLink}
            photoGalleryLink={data?.photoGalleryLink}
            location={data?.extraData?.locationLink}
            videoGalleryLink={data?.videoGalleryLink}
            liveBroadCastLink={data?.liveBroadCastLink}
            surveyLink={data?.surveyLink}
            startTime={data?.startTime ? data?.startTime : null}
            endTime={data?.endTime ? data?.endTime : null}
            winners={data?.winners}
            categoryTitle={data?.categoryTitle ? data?.categoryTitle[lang] : ""}
          />
        )}
        {(isPdf(type) === true || data?.type === "encyclopedia") &&
        currentFile?.length > 0 ? (
          <Box className={classes.paddingTop24}>
            <Box className={classes.publicationBox}>
              <Box className={classes.detailsBox}>
                {type === "annual-fourms" ? (
                  <>
                    <Typography className={classes.title}>
                      {currentFile[0]?.title && currentFile[0].title[lang]
                        ? currentFile[0].title[lang]
                        : data.title}
                    </Typography>
                  </>
                ) : (
                  <>
                    {" "}
                    {data?.title ? (
                      <Typography className={classes.title}>
                        {" "}
                        {data.title}
                      </Typography>
                    ) : null}
                    {data?.writer ? (
                      <Box display="flex" className={classes.mb2}>
                        <Link
                          href={`/writer/${data?.writer?.id}`}
                          className={clsx(classes.writer, classes.date)}
                        >
                          {data?.writer?.title[lang]}
                        </Link>
                        {data?.privateDate ? (
                          <Typography className={classes.date}>
                            {moment(data?.privateDate)
                              .format("DD MMM YYYY")
                              .replace(/[٠-٩]/g, (y) =>
                                "٠١٢٣٤٥٦٧٨٩".indexOf(y)
                              )}
                          </Typography>
                        ) : null}
                      </Box>
                    ) : data?.privateDate ? (
                      <Typography className={clsx(classes.date, classes.mb2)}>
                        {moment(data?.privateDate)
                          .format("DD MMM YYYY")
                          .replace(/[٠-٩]/g, (y) => "٠١٢٣٤٥٦٧٨٩".indexOf(y))}
                      </Typography>
                    ) : null}
                  </>
                )}
              </Box>
              <Box className={classes.fileBox}>
                <Box className={classes.buttons}>
                  <IoMdDownload className={classes.fileIcon} />
                  <span className={classes.iconLabel}>
                    {t("BASICPAGE.DOWNLOADED")}
                  </span>
                  <Typography className={classes.number}>
                    {downloadCount ? downloadCount : currentFile[0]?.downloaded}
                  </Typography>
                </Box>
                <Box className={classes.buttons}>
                  <BsEyeFill className={classes.fileIcon} />
                  <span className={classes.iconLabel}>
                    {t("BASICPAGE.VIEWS")}
                  </span>
                  <Typography className={classes.number}>
                    {viewCount ? viewCount : currentFile[0]?.viewed}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {type !== "annual-fourms" && data?.description ? (
              <Box className={classes.mt32}>
                {" "}
                <Typography
                  className={classes.description}
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </Box>
            ) : null}
            <Button
              label={t("NEWS.TABLEHEAD.DOWNLOAD")}
              disabled={disabled}
              primary
              onClick={async () => {
                setDisabled(true);
                dispatch(
                  downloadCountAction({
                    id: currentFile[0].id,
                    language: lang,
                  })
                );

                const url = await getFileUrl(currentFile[0].uuid);
                handleDownload(url, currentFile[0]?.title[lang]);
              }}
            ></Button>
            {currentFile?.length > 0 ? (
              <ReadFile file={`/api/file/download/${currentFile[0]?.uuid}`} />
            ) : (
              <NoData />
            )}
          </Box>
        ) : //   : currentFile?.length === 0 ? (
        //     <NoData />

        // )
        null}
      </Container>
    </>
  );
}

export default memo(BasicPage);
//
