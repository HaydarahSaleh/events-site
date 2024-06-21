import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import React, { memo } from "react";
import {
  EmailShareButton,
  EmailIcon,
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";

function SharingBtns({ open, handleClose, handleListKeyDown }) {
  const url = window.location.href;

  return (
    <Popper
      open={open}
      transition
      disablePortal
      style={{
        display: "flex",
        justifyContent: "center",
        position: "absolute",
        top: "24px",
        left: "39px",
        boxShadow: "none",
        zIndex: 100,
      }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom",
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="menu-list-grow"
                onClick={handleListKeyDown}
                className="menu"
              >
                <MenuItem onClick={handleClose}>
                  <FacebookShareButton url={url}>
                    <Button className="socialBtn">
                      <FacebookIcon
                        round={true}
                        color="primary"
                        size={32}
                        className="socialLink"
                      />
                    </Button>
                  </FacebookShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <TwitterShareButton url={url}>
                    <Button className="socialBtn">
                      <TwitterIcon round={true} className="socialLink" />
                    </Button>
                  </TwitterShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <LinkedinShareButton url={url}>
                    <Button className="socialBtn">
                      <LinkedinIcon round={true} className="socialLink" />
                    </Button>
                  </LinkedinShareButton>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <EmailShareButton url={url}>
                    <Button className="socialBtn">
                      <EmailIcon round={true} className="socialLink" />
                    </Button>
                  </EmailShareButton>
                </MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
}

export default memo(SharingBtns);
