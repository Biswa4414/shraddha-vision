import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import { toast } from "react-toastify";
import "../header/header.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import MobileDrawer from "./Drawer";

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark" ? true : false
  );

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setDarkMode(!darkMode);
    toast.success("Theme Changed!");
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="header">
      <a href="/" style={{ textDecoration: "none" }}>
        <div className="name">
          <h1>Shraddha's Vision</h1>
        </div>
      </a>
      <div className="nav-links">
        <Switch
          checked={darkMode}
          onClick={() => {
            changeMode();
          }}
        />

        <a href="/" style={{ textDecoration: "none" }}>
          Home
        </a>
        <a href="/about" style={{ textDecoration: "none" }}>
          About
        </a>
        <a href="/contact" style={{ textDecoration: "none" }}>
          Contact
        </a>
        <a href="/project" style={{ textDecoration: "none" }}>
          Projects
        </a>
      </div>
      <div className="icons">
        <a href="https://www.instagram.com/shraddha_agrwal/">
          <InstagramIcon />
        </a>
        <a href="https://wa.me/6370507573?text=Hello%20from%20WhatsApp">
          <WhatsAppIcon />
        </a>
        <a href="mailto:shraddha.ssvn@gmail.com?subject=Hello%20from%20Gmail">
          <EmailIcon />
        </a>
        <a href="https://www.facebook.com/">
          <FacebookIcon />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
};

export default Header;
