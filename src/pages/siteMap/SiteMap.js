import { Box } from "@mui/material";
import { Container } from "@mui/system";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { GoTriangleDown } from "react-icons/go";
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { uid } from "react-uid";
import Banner from "../../components/shared/Banner";
import useStyles from "../../styles/pages/siteMap/siteMap";
function SiteMap(props) {
  const [menuItems, setMenuItems] = useState([]);
  const classes = useStyles();

  const {
    basicTheme: { isRTL },
  } = useSelector((state) => state.theme_reducer);
  const reducer = useSelector((state) => state);
  useEffect(() => {
    if (reducer.crud?.dataMenusReturned?.menuItems?.length > 0) {
      let allLinks = [];
      let array = [];
      let headerLinks = reducer.crud?.dataMenusReturned?.menuItems?.filter(
        (item) => item?.id === 1
      );
      let footerLinks = reducer.crud?.dataMenusReturned?.menuItems?.filter(
        (item) => item?.id === 2
      )[0];

      if (headerLinks?.length > 0) allLinks?.push(headerLinks[0]);
      let footerObj = {
        ...footerLinks,
        childrens: [
          {
            title: footerLinks?.title,
            url: footerLinks?.url,
            childrens: footerLinks?.childrens,
          },
        ],
      };
      if (footerObj) allLinks?.push(footerObj);
      if (allLinks?.length > 0) {
        allLinks = allLinks?.map((item) => item?.childrens);
        allLinks?.map((item) => item?.map((subItem) => array?.push(subItem)));
        setMenuItems(array);
      }
    }
  }, [reducer.crud?.dataMenusReturned?.menuItems]);
  const renderSubMenu = useCallback(
    (item, Icon, grandson) => {
      return (
        <ul className={`childList ${grandson}`}>
          {item?.childrens?.map((child) => {
            return (
              <li key={uid(child)} className="navLinkChild">
                <a href={child.link}>
                  {Icon}
                  {child?.title}
                </a>
                {child.childrens
                  ? child.childrens.length > 0
                    ? renderSubMenu(child, <BsCircleFill />, "grandson")
                    : null
                  : null}
              </li>
            );
          })}
        </ul>
      );
    },
    [isRTL]
  );
  const renderMenu = useMemo(() => {
    return menuItems?.map((item) => {
      return (
        <li key={uid(item)} className="navLink">
          <a href={item?.url ? item?.url : item?.link} className="parentLink">
            {item.title}
          </a>
          {item?.childrens && renderSubMenu(item, <BsCircleFill />, "")}
        </li>
      );
    });
  }, [menuItems, isRTL]);

  const renderContent = () => {
    return <ul className="siteMapContainer parentUL">{renderMenu}</ul>;
  };

  return (
    <>
      <Banner />
      <Box className={classes.rootBox}>
        <Container maxWidth="xl" className={classes.root}>
          {renderContent()}
        </Container>
      </Box>
    </>
  );
}

export default memo(SiteMap);
