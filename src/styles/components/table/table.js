import { Rotate90DegreesCcw } from "@mui/icons-material";
import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 24,
    width: "100%",
    height: "100%",
    boxShadow: "unset",
    backgroundColor: "unset",
    "& > div": {
      "&::-webkit-scrollbar": {
        width: "0.4em",
        height: 8,
        borderRadius: "4px",
      },
      "&::-webkit-scrollbar-track": {
        "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: theme.palette.primary.main,
        borderRadius: "4px",
      },
    },
    "& button.downloadBtn": {
      fontFamily:
        theme.direction === "rtl"
          ? `${theme.globals.fontFamily.ar}!important`
          : `${theme.globals.fontFamily.en}!important`,
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: theme.globals.fontSize.s - 2,
      lineHeight: "19px",
      color: theme.palette.secondary.main,
      border: `1px solid ${theme.palette.secondary.main}`,
      boxSizing: "border-box",
      borderRadius: "3px",
      marginBottom: "15px",
    },

    "& table": {
      "& caption": {
        padding: 0,
      },
      "& svg.icon": {
        color: `${theme.palette.secondary.main}`,
        fontSize: theme.globals.fontSize.s + 2,
      },

      "& svg.comment": {
        color: theme.palette.primary.main,
        fontSize: theme.globals.fontSize.lg - 2,
      },

      "& thead": {
        background:
          theme.palette.type === "dark"
            ? theme.globals.colors.primary
            : theme.globals.colors.lightgray,

        "& th.MuiTableCell-root": {
          borderBottom: "0",
          padding: 6,

          "& button": {
            marginLeft: "auto",
            marginRight: "auto",

            "& span.MuiButton-label div": {
              fontFamily:
                theme.direction === "rtl"
                  ? `${theme.globals.fontFamily.ar}!important`
                  : `${theme.globals.fontFamily.en}!important`,
              color: theme.palette.primary.main,
              fontSize: theme.globals.fontSize.xs,
            },
          },
        },

        "& th:first-of-type": {
          borderRadius: "4px 0px 0px 4px",
        },

        "& th:last-of-type": {
          borderRadius: "0 4px 4px 0",
        },

        "& tr th": {
          background: "unset",
          textAlign: "start",
          fontFamily:
            theme.direction === "rtl"
              ? `${theme.globals.fontFamily.ar}!important`
              : `${theme.globals.fontFamily.en}!important`,
          fontWeight: "600",
          color: theme.palette.primary.main,
          "& span": {
            "& button": {
              fontFamily:
                theme.direction === "rtl"
                  ? `${theme.globals.fontFamily.ar}!important`
                  : `${theme.globals.fontFamily.en}!important`,
              "&.MUIDataTableBodyCell-root": {},
              fontStyle: "normal",
              fontSize: theme.globals.fontSize.xs,
              fontWeight: theme.globals.fontWeight.l,
              color: theme.globals.colors.black,
              marginRight: "unset",
              marginLeft: "unset",
              "& div": {
                fontFamily:
                  theme.direction === "rtl"
                    ? `${theme.globals.fontFamily.ar}!important`
                    : `${theme.globals.fontFamily.en}!important`,
              },
              "& .MUIDataTableHeadCell-data": {
                fontFamily:
                  theme.direction === "rtl"
                    ? `${theme.globals.fontFamily.ar}!important`
                    : `${theme.globals.fontFamily.en}!important`,
              },
            },
          },
        },
      },

      "& tbody": {
        "& tr": {
          "& td": {
            fontFamily:
              theme.direction === "rtl"
                ? `${theme.globals.fontFamily.ar}!important`
                : `${theme.globals.fontFamily.en}!important`,
            fontStyle: "normal",

            fontSize: theme.globals.fontSize.s - 1,
            lineHeight: "20px",
            color:
              theme.palette.type === "dark"
                ? theme.globals.colors.white
                : theme.palette.primary.main,
            textAlign: "start",

            "& > div": {
              display: "grid",
              placeItems: "center",
              fontFamily:
                theme.direction === "rtl"
                  ? `${theme.globals.fontFamily.ar}!important`
                  : `${theme.globals.fontFamily.en}!important`,
              color: theme.globals.colors.black,
              fontSize: theme.globals.fontSize.xs + 2,
            },
          },

          "& td:nth-child(6), & td:nth-child(9)": {
            cursor: "pointer",

            "& div svg": {
              transform: "scale(1)",
              transition: "transform 0.4s",
            },

            "&:hover div svg": {
              transform: "scale(1.3)",
            },
          },
        },
      },
      "& tfoot": {
        "& tr": {
          "& td": {
            "& > div": {
              "& > div": {
                direction:
                  theme.direction === "rtl" ? "ltr!important" : "ltr!important",
                overflow: "hidden",
                "& > div": {
                  "& > p": {
                    color: theme.globals.colors.black,
                    fontFamily:
                      theme.direction === "rtl"
                        ? `${theme.globals.fontFamily.ar}!important`
                        : `${theme.globals.fontFamily.en}!important`,
                  },
                  "& > div": {
                    marginLeft: 0,
                    "& .MuiSelect-select": {
                      color: theme.globals.colors.black,
                    },
                    "& .MuiSvgIcon-root": {
                      color: theme.globals.colors.arrowTable,
                    },
                    "& Button": {
                      padding: 0,
                      color: theme.globals.colors.black,
                      "& svg": {
                        color: theme.globals.colors.black,
                        transform:
                          theme.direction === "rtl"
                            ? "rotate(-180deg)"
                            : "inherit",
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },

  news: {
    backgroundColor: `${theme.globals.colors.card}!important`,
    boxShadow: "none!important",
    "& tbody": {
      "& tr": {
        "& td:nth-child(2)": {
          "& > div": {
            height: 25,
            width: 25,
            marginLeft: "auto",
            marginRight: "auto",
          },
        },
        "& td:nth-child(1)": {
          maxWidth: 90,

          "& > div": {
            direction: theme.direction,
            marginLeft: "auto",
            marginRight: "auto",
            display: "-webkit-box",
            overflow: "hidden",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            textAlign: "center",

            [theme.breakpoints.down(550)]: {
              fontSize: `${theme.globals.fontSize.xs}px!important`,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            },
          },
        },

        "& td:nth-child(4)": {
          cursor: "pointer",

          "& div svg": {
            transform: "scale(1)",
            transition: "transform 0.4s",
          },

          "&:hover div svg": {
            transform: "scale(1.3)",
          },
        },
      },
    },
    "& .MUIDataTablePagination": {},
  },
}));
