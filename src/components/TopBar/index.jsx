import React from "react";

import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineLanguage } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";

import "./index.scss";

export function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="topbar-left">
          <span className="logo">Alternative HairCuts</span>
        </div>
        <div className="topbar-right">
          <div className="topbar-icon-container">
            <IoIosNotificationsOutline />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <MdOutlineLanguage />
            <span className="topbar-icon-badge">2</span>
          </div>
          <div className="topbar-icon-container">
            <IoSettingsOutline />
          </div>

          <img
            src="https://dominiquemakowski.github.io/authors/gandalf/avatar_hu26b06be530b08e9b91eb9c90bbd4ed3d_163032_270x270_fill_q90_lanczos_center.jpg"
            alt="Avatar"
            className="topbar-avatar"
          />
        </div>
      </div>
    </div>
  );
}
