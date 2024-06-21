import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Toolbar,
} from "@mui/material";
import clsx from "clsx";
import React, { useCallback, useState } from "react";
import { FiHome } from "react-icons/fi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { uid } from "react-uid";
import useStyles from "../../../styles/components/menuBar/menuBarStyle";
import Settings from "../../settings/Settings";
import NavBarItem from "../navBar/navBarItem/NavBarItem";
import HeaderDialog from "../headerDialog/HeaderDialog";
let lang = JSON.parse(localStorage.getItem("iconLang"))
  ? JSON.parse(localStorage.getItem("iconLang"))
  : "ar";
const SubMenu = (childrens) => {
  return (
    <ul className="subItem">
      <Box className="rectangle2"></Box>
      <Box className="rectangle"></Box>
      {childrens.map((item) => {
        return (
          <li key={uid(item)} style={{ listStyleType: "none" }}>
            <Link to={`/${lang + item?.link}`} className="subItemText">
              {item?.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
function MenuBar({ menuItems, visible }) {
  let navigate = useNavigate();
  var size = 7;
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [startSearch, setStartSearch] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const handleClickOpenMenuBar = () => {
    setOpen(true);
  };

  const handleCloseMenuBar = () => {
    setOpen(false);
  };
  const handleClickOpen = () => {
    setOpenSearch(true);
  };
  const toggleSettingModal = useCallback(() => {
    setOpenSettings(!openSettings);
  }, [openSettings]);

  const handleClose = () => {
    setOpenSearch(false);
  };
  const toggleSearchField = () => {
    setSearchValue("");
    setStartSearch(!startSearch);
  };
  const handleSearch = () => {
    if (!searchValue.length) {
      return;
    } else {
      navigate(`/search-results/${searchValue}/`);
    }
  };
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <Container
      maxWidth="xl"
      className={clsx(classes.menuBoxFixed, classes.menuContainer)}
    >
      <AppBar className={classes.menuBox}>
        <Toolbar disableGutters className={classes.toolBar}>
          <Box
            className={
              visible ? classes.logoBox : clsx(classes.logoBox, classes.before)
            }
          >
            <Link to={`/${lang}/home`}>
              <img src="/assets/images/logo.png" />
            </Link>
          </Box>

          <Box className={classes.itemBox}>
            <Box className={classes.IconsBox}>
              <Link to={`/${lang}/home`}>
                <Box className={classes.boxIcon}>
                  <FiHome className={classes.icon} />
                </Box>
              </Link>

              <Box className={classes.boxMenu}>
                <IconButton
                  size="large"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleClickOpenMenuBar}
                  color="inherit"
                >
                  <MenuIcon className={classes.iconMenu} />
                </IconButton>
              </Box>
            </Box>

            <Box className={classes.tabBox}>
              {menuItems
                .slice(0, lang === "fr" ? size - 1 : size)
                .map((item) => {
                  return (
                    <li key={uid(item)} className={classes.menuStyle}>
                      {item?.link ? (
                        <NavLink
                          to={
                            item?.link?.startsWith("http")
                              ? item?.link
                              : lang + item?.link
                          }
                        >
                          <Button key={uid(item)} className={classes.button}>
                            <span>{item?.title}</span>
                          </Button>
                        </NavLink>
                      ) : (
                        <Button key={uid(item)} className={classes.button}>
                          <span>{item?.title}</span>
                        </Button>
                      )}

                      {item?.childrens?.length > 0 && SubMenu(item?.childrens)}
                    </li>
                  );
                })}
            </Box>
            <Box className={classes.navBarItem}>
              <NavBarItem
                toggleSearchField={toggleSearchField}
                startSearch={startSearch}
                toggleSettingModal={toggleSettingModal}
                handleSearch={handleSearch}
                handleChange={handleChange}
                handleClickOpen={handleClickOpen}
                openSearch={openSearch}
              />
            </Box>
          </Box>

          <HeaderDialog
            open={open}
            handleClose={handleCloseMenuBar}
            menuItems={menuItems}
          />
        </Toolbar>
      </AppBar>
      <Settings open={openSettings} toggleSettingModal={toggleSettingModal} />
    </Container>
  );
}
export default MenuBar;
