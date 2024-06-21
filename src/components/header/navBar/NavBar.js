import { Box, Container } from "@mui/material";
import React, { useCallback, useState } from "react";
import useStyles from "../../../styles/components/navBar/navBarStyle";
import Settings from "../../settings/Settings";
import { Search } from "../search/Search";
import NavBarItem from "./navBarItem/NavBarItem";

function NavBar() {
  const classes = useStyles();
  const [startSearch, setStartSearch] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const toggleSettingModal = useCallback(() => {
    setOpenSettings(!openSettings);
  }, [openSettings]);

  const toggleSearchField = () => {
    setStartSearch(!startSearch);
  };

  return (
    <Container maxWidth="xl" className={classes.navBarBoxFixed}>
      <Search
        toggleSearchField={toggleSearchField}
        startSearch={startSearch}
        searchClass={classes.search}
        iconClass={classes.searchIcon}
        inputClass={classes.inputStyle}
        closeIconClass={classes.closeIcon}
      />
      <Box className={classes.tabBox}>
        <Box className={classes.navBarItemBox}>
          <NavBarItem
            toggleSearchField={toggleSearchField}
            startSearch={startSearch}
            toggleSettingModal={toggleSettingModal}
          />
        </Box>
      </Box>
      <Settings open={openSettings} toggleSettingModal={toggleSettingModal} />
    </Container>
  );
}
export default NavBar;
