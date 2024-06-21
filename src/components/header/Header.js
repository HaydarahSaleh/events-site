import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import useStyles from "../../styles/components/navBar/navBarStyle";
import MenuBar from "./menuBar/MenuBar";

function Header({ menuItems, notifications }) {
  const classes = useStyles();
  const [visible, setVisible] = useState(false);
  let lang = JSON.parse(localStorage.getItem("iconLang"))
    ? JSON.parse(localStorage.getItem("iconLang"))
    : "ar";

  useEffect(() => {
    let fromTop = document.documentElement.scrollTop;

    if (fromTop === 0) setVisible(false);
  }, [visible]);

  const HomeScreen = window.location.pathname === `/${lang}/home`;

  useEffect(() => {
    window.addEventListener(
      "scroll",
      function () {
        let fromTop = document.documentElement.scrollTop;
        if (fromTop === 0) setVisible(false);
        if (fromTop >= 40) setVisible(true);
      },
      false
    );
  }, []);

  return (
    <Box>
      <Box
        className={
          !HomeScreen
            ? classes.innerBox
            : visible
            ? classes.visibleBox
            : classes.secondBox
        }
      >
        <MenuBar menuItems={menuItems} visible={visible} />
      </Box>
    </Box>
  );
}
export default Header;
