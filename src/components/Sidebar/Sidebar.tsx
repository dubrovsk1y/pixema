import React from "react";
import "./Sidebar.css";
import { SidebarTabsEnum, PathEnum } from "../../enums/enums";
import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import HomeSvg from "../../icons/HomeSvg";
import TrendsSvg from "../../icons/TrendsSvg";
import FavoritesSvg from "../../icons/FavoritesSvg";
import SettingsSvg from "../../icons/SettingsSvg";
import LogoSvg from "../../icons/LogoSvg";

const TABS = [
  { tabName: SidebarTabsEnum.Home, icon: <HomeSvg></HomeSvg>, id: Math.random(), path: PathEnum.Home },
  { tabName: SidebarTabsEnum.Trends, icon: <TrendsSvg></TrendsSvg>, id: Math.random(), path: PathEnum.Trends },
  {
    tabName: SidebarTabsEnum.Favorites,
    icon: <FavoritesSvg></FavoritesSvg>,
    id: Math.random(),
    path: PathEnum.Favorites,
  },
  { tabName: SidebarTabsEnum.Settings, icon: <SettingsSvg></SettingsSvg>, id: Math.random(), path: PathEnum.Settings },
];

const Sidebar = () => {
  const navigete = useNavigate();

  const onTabClick = (path: string) => {
    navigete(path);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar__body">
        <LogoSvg></LogoSvg>
        <nav className="sidebar__nav">
          <ul className="sidebar__nav__ul">
            {TABS.map((item: any) => {
              const { path, id, icon, tabName } = item;
              return (
                <li onClick={() => onTabClick(path)} key={id} className="sidebar__sidebar__nav__ul__li">
                  {icon}
                  <span
                    className={classNames("sidebar__nav__ul__li__content", {
                      ["_active"]: tabName === SidebarTabsEnum.Home,
                    })}
                  >
                    {tabName}
                  </span>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <span className="sidebar__footer">© All Rights Reserved</span>
    </aside>
  );
};

export default Sidebar;
