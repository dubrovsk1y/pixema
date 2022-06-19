import React from "react";
import "./Sidebar.css";
import Logo from "../Logo";
import { SidebarTabs, SidebarIcons, Paths } from "../../enums/enums";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";

const TABS = [
  { tabName: SidebarTabs.Home, icon: SidebarIcons.Home, id: Math.random(), path: Paths.Home },
  { tabName: SidebarTabs.Trends, icon: SidebarIcons.Trends, id: Math.random(), path: Paths.Trends },
  { tabName: SidebarTabs.Favorites, icon: SidebarIcons.Favorites, id: Math.random(), path: Paths.Favorites },
  { tabName: SidebarTabs.Settings, icon: SidebarIcons.Settings, id: Math.random(), path: Paths.Settings },
];

const Sidebar = () => {
  const navigete = useNavigate();

  const onTabClick = (path: string) => {
    navigete(path);
    console.log(path);
  };

  return (
    <aside className="sidebar">
      <Logo></Logo>
      <nav className="sidebar__nav">
        <ul className="sidebar__nav__ul">
          {TABS.map((item: any) => {
            return (
              <li onClick={() => onTabClick(item.path)} key={item.id} className="sidebar__sidebar__nav__ul__li">
                <span className={classNames("material-symbols-outlined", "sidebar__icons", { ["_active"]: true })}>
                  {item.icon}
                </span>
                <span className={classNames("sidebar__nav__ul__li__content", { ["_active"]: true })}>
                  {item.tabName}
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
      <footer className="sidebar__footer">
        <span>© All Rights Reserved</span>
      </footer>
    </aside>
  );
};

export default Sidebar;
