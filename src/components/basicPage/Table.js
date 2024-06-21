import GetAppIcon from "@mui/icons-material/GetApp";
import { IconButton } from "@mui/material";
import * as moment from "moment";
import MUIDataTable from "mui-datatables";
import * as React from "react";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getFileUrl } from "../../publicFunctions";
import actions from "../../redux/actions";
import { useStyles } from "../../styles/components/table/table";
import { FiBookOpen } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
export default function DataGridDemo({
  newsFiles,
  type,
  alias,
  setFiles,
  setData,
  setCurrentFile,
}) {
  const reducers = useSelector((state) => state);
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { downloadCountAction, downloadCountCompleted } = actions;
  const [newsData, setNewsData] = useState([]);
  const [downloadCount, setDownloadCount] = useState("");
  const [isOn, setIsOn] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [updatedFiles, setUpdatedFiles] = useState(newsFiles);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  const columns = [
    t("NEWS.TABLEHEAD.TITLE"),
    t("NEWS.TABLEHEAD.DOWNLOADED"),
    t("NEWS.TABLEHEAD.YAER"),
    type === "encyclopedia"
      ? t("NEWS.TABLEHEAD.VIEW")
      : t("NEWS.TABLEHEAD.TYPE"),
    t("NEWS.TABLEHEAD.DOWNLOAD"),
  ];

  useEffect(() => {
    if (reducers.files.downloadCountCompleted) {
      setDownloadCount(
        reducers?.files?.downloadCountCompleted?.file?.downloaded
      );
    }
  }, [reducers.files.downloadCountCompleted]);
  useEffect(() => {
    if (!reducers.files.downloadCountCompleted) return;
    setFiles((prev) => {
      let arr = [];
      let filtered = prev.filter(
        (row) => row?.id !== reducers.files.downloadCountCompleted?.file?.id
      );
      let newFile = reducers?.files?.downloadCountCompleted?.file;
      if (prev?.filter((item) => item?.id === newFile?.id)?.length > 0) {
        arr.push(...filtered);
        arr.push(newFile);
        return arr;
      } else return prev;
    });
    dispatch(downloadCountCompleted({}));
  }, [reducers.files.downloadCountCompleted]);

  const handleClick = (url, title) => {
    if (!url) return;
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", title ? title : "File");
    document.body.appendChild(link);
    link.click();
    link.remove();
  };
  const createRows = useCallback(
    (arr) => {
      if (arr) {
        let array = [];
        let obj = {};
        arr?.map((item) => {
          const id = item?.id;

          const handleNavigate = () => {
            // searchParams.set("fileId", id);
            // setSearchParams(searchParams);

            setData([]);
            setCurrentFile(item);
            // navigate(`/${lang}/encyclopedia/${alias}`, {
            //   state: { fileId: id },
            // });
          };
          const param1 = searchParams.get("param1");
          obj[`${t("NEWS.TABLEHEAD.TITLE")}`] = item?.title
            ? item?.title[lang]
            : t("NEWS.TABLEHEAD.NOTITLE");
          type !== "encyclopedia"
            ? (obj[`${t("NEWS.TABLEHEAD.TYPE")}`] = item?.mimetype?.includes(
                "pdf"
              ) ? (
                <img
                  src="/assets/images/pdf.png"
                  className="icon"
                  alt="pdf icon"
                />
              ) : item?.mimetype?.includes("image") ? (
                <img
                  src="/assets/images/img.png"
                  className="icon"
                  alt="img icon"
                />
              ) : (
                <img
                  src="/assets/images/excel.png"
                  className="icon"
                  alt="excel icon"
                />
              ))
            : (obj[`${t("NEWS.TABLEHEAD.VIEW")}`] = (
                <a>
                  <FiBookOpen onClick={handleNavigate} />
                </a>
              ));
          obj[`${t("NEWS.TABLEHEAD.YAER")}`] = moment(item.startDate)
            .format(" YYYY")
            .replace(/[٠-٩]/g, (y) => "٠١٢٣٤٥٦٧٨٩".indexOf(y));
          obj[`${t("NEWS.TABLEHEAD.DOWNLOAD")}`] = (
            <IconButton
              onClick={async () => {
                const url = await getFileUrl(item?.uuid);

                handleClick(
                  url,
                  item?.title ? item?.title[lang] : t("NEWS.TABLEHEAD.NOTITLE")
                );
                if (item && item?.id)
                  dispatch(
                    downloadCountAction({
                      id: item?.id,
                      language: lang,
                    })
                  );
              }}
            >
              <GetAppIcon className="icon" />
            </IconButton>
          );

          obj[`${t("NEWS.TABLEHEAD.DOWNLOADED")}`] =
            downloadCount &&
            reducers?.files?.downloadCountCompleted?.file?.id === item?.id
              ? downloadCount
              : item.downloaded;

          array?.push(obj);
          obj = {};
          return null;
        });
        return array;
      }
    },

    [downloadCount]
  );

  const rows = createRows(newsFiles);
  useEffect(() => {
    if (rows) {
      setNewsData(rows);
    }
  }, [createRows, newsFiles]);
  const options = {
    filterType: "checkbox",
    selectToolbarPlacement: "none",
    download: false,
    filter: false,
    print: false,
    search: false,
    viewColumns: false,
    selectableRows: false,
    responsive: "standard",
    fixedHeader: false,
    pagination: type !== "encyclopedia" ? true : false,
    textLabels: {
      pagination:
        type !== "encyclopedia"
          ? {
              rowsPerPage: t("NEWS.TABLEHEAD.PAGINATION"),
              displayRows: t("NEWS.TABLEHEAD.OF"),
            }
          : false,
    },
  };
  return (
    <>
      <MUIDataTable
        className={`${classes.root} ${classes.news}`}
        data={newsData}
        columns={columns}
        options={options}
      />
    </>
  );
}
