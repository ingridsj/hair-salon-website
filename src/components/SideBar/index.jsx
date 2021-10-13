import { NavLink } from "react-router-dom";
import { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { GrScheduleNew, GrHistory } from "react-icons/gr";
import { AiOutlineSchedule } from "react-icons/ai";
import { GiHelp } from "react-icons/gi";

import { ScheduleButton } from "../ScheduleButton";
import { LogouButton } from "../LogoutButton";

import "./index.scss";

export function SideBar() {
  const menu = [
    {
      path: "/dashboard/profile", // the url
      name: "Meu perfil", // name that appear in Sidebar
      svg: <CgProfile />,
    },
    {
      path: "/dashboard/history",
      name: "Histórico de agendamentos",
      svg: <GrHistory />,
    },
    {
      path: "/dashboard/schedule",
      name: "Agendamentos atuais",
      svg: <AiOutlineSchedule />,
    },
    {
      path: "/dashboard/new-schedule",
      name: "Agendar uma nova data",
      svg: <GrScheduleNew />,
    },
    {
      path: "/dashboard/help",
      name: "Precisa de ajuda?",
      svg: <GiHelp />,
    },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>

          <ul className="sidebar-list">
            {menu.map((menuItem) => (
              <li key={menuItem.name} className="sidebar-list-item">
                <NavLink to={menuItem.path} className="sidebar-link">
                  {menuItem.svg}
                  {menuItem.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <ul className="sidebar-list-top">
            {menu.map((menuItem) => (
              <li key={menuItem.name} className="sidebar-list-item">
                <NavLink to={menuItem.path} className="sidebar-link">
                  {menuItem.svg}
                  {menuItem.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <ScheduleButton />
          <LogouButton />
        </div>
      </div>
    </div>
  );
}
