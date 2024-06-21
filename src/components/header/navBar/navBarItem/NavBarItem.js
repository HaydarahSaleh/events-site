import { Box } from "@mui/material";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch, AiOutlineSetting } from "react-icons/ai";
import { MdLanguage } from "react-icons/md";
import { useDispatch } from "react-redux";
import useStyles from "../../../../styles/components/navBar/navBarItem/navBarItemStyle";
import SearchModal from "../../../search/SearchModal";
import LanguagesTab from "./LanguageTab";

const NavBarItem = (props) => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();
  let { toggleSettingModal, openSearch, handleClickOpen } = props;

  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  const SearchScreen = window.location.pathname === `/${lang}/search-results`;
  const dispatch = useDispatch();
  const [openLangTab, setOpenLangTab] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleOpenClick = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setQuery("");
  };
  const handleToggleLangTab = () => {
    setOpenLangTab(true);
  };

  const handleCloseLangTab = () => {
    setOpenLangTab(false);
  };

  function handleListKeyDownLangTab() {
    setOpenLangTab(true);
  }
  const Logout = () => {
    localStorage.removeItem("iconToken");
    localStorage.removeItem("iconUser");
    sessionStorage.removeItem("iconUserSession");
    sessionStorage.removeItem("iconTokenSession");
    localStorage.removeItem("iconRememberMe");
    window.location = "/home";
  };

  return (
    <Box className={classes.navBarItem}>
      {!SearchScreen && (
        <Box className={classes.containBoxSearch}>
          <Box className={classes.icon}>
            <AiOutlineSearch
              className={classes.navBarIcon}
              onClick={handleOpenClick}
            />
          </Box>

          <SearchModal
            handleClickOpen={handleClickOpen}
            openSearch={openSearch}
            open={open}
            close={handleClose}
            query={query}
            setQuery={setQuery}
          />
        </Box>
      )}
      {/* {localStorage.getItem("iconToken") ||
      sessionStorage.getItem("iconTokenSession") ? (
        <Box
          className={classes.containBoxLogin}
          onClick={(e) => {
            window.location = "/profile";
          }}
        >
          <Box
            className={classes.icon}
            onClick={() => {
              window.location = "/profile";
            }}
          >
            <CgProfile className={classes.navBarIcon} />
          </Box>
        </Box>
      ) : null}
      {localStorage.getItem("iconToken") ||
      sessionStorage.getItem("iconTokenSession") ? (
        <Box
          className={classes.containBoxLogin}
          onClick={(e) => {
            Logout();
            window.location = "/home";
          }}
        >
          <Box className={classes.icon}>
            <CiLogout className={classes.navBarIcon} />
          </Box>
        </Box>
      ) : (
        <Box
          className={classes.containBoxLogin}
          // onClick={(e) => {
          //   window.location = "/login";
          // }}
        >
          <Box className={classes.icon}>
            <CiLogin className={classes.navBarIcon} />
          </Box>
        </Box>
      )} */}

      <Box
        className={classes.containBoxSetting}
        onClick={(e) => {
          toggleSettingModal();
        }}
      >
        <Box className={classes.icon}>
          <AiOutlineSetting className={classes.navBarIcon} />
        </Box>
      </Box>
      <Box className={classes.containBoxLang}>
        <Box className={classes.icon}>
          <MdLanguage
            className={classes.navBarIcon}
            onClick={handleToggleLangTab}
          />
        </Box>
        <LanguagesTab
          open={openLangTab}
          handleClose={handleCloseLangTab}
          handleListKeyDown={handleListKeyDownLangTab}
        />
      </Box>
    </Box>
  );
};
export default NavBarItem;
