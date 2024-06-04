import styles from "./Popup.module.scss";
import { NavLink } from "react-router-dom";
import { Drawer, Box, Divider, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function Popup() {
  const [popupStatus, setPopupStatus] = useState(false);

  const toggleDrawer = (popupStatus) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setPopupStatus(popupStatus);
  };

  return (
    <>
      <div className={styles.burger}>
        <MenuIcon
          sx={{
            // mr: "30px",
            height: "45px",
            width: "45px",
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#dfdfdf",
              borderRadius: "6px",
            },
          }}
          onClick={toggleDrawer(true)}
        />
      </div>

      <Drawer
        anchor="right"
        open={popupStatus}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box width={300}>
          <CloseIcon
            sx={{
              margin: "10px 5px 0px 10px",
              "&:hover": { cursor: "pointer" },
            }}
            fontSize="large"
            onClick={toggleDrawer(false)}
          />

          <Divider />

          <Box
            sx={{
              mt: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <ListItemButton onClick={toggleDrawer(false)}>
              <NavLink to="/" style={{ color: "#747474" }}>
                Главная
              </NavLink>
            </ListItemButton>

            <ListItemButton onClick={toggleDrawer(false)}>
              <NavLink to="/about" style={{ color: "#747474" }}>
                Компания
              </NavLink>
            </ListItemButton>

            <ListItemButton onClick={toggleDrawer(false)}>
              <NavLink to="/directions" style={{ color: "#747474" }}>
                Направления
              </NavLink>
            </ListItemButton>

            <ListItemButton onClick={toggleDrawer(false)}>
              <NavLink to="/news" style={{ color: "#747474" }}>
                Новости
              </NavLink>
            </ListItemButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
