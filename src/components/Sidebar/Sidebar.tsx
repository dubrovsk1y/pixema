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
import { useDispatch, useSelector } from "react-redux";
import { setSidebarTab, TabSelectors } from "../../redux/reducers/tabReducer";

const TABS = [
  { tabName: SidebarTabsEnum.Home, icon: <HomeSvg></HomeSvg>, path: PathEnum.Home },
  { tabName: SidebarTabsEnum.Trends, icon: <TrendsSvg></TrendsSvg>, path: PathEnum.Trends },
  { tabName: SidebarTabsEnum.Favorites, icon: <FavoritesSvg></FavoritesSvg>, path: PathEnum.Favorites },
  { tabName: SidebarTabsEnum.Settings, icon: <SettingsSvg></SettingsSvg>, path: PathEnum.Settings },
];

const Sidebar = () => {
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const activeTab = useSelector(TabSelectors.getSidebarTab);

  const onTabClick = (path: string, tabName: string) => {
    navigete(path);
    dispatch(setSidebarTab(tabName));
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
                <li
                  onClick={() => onTabClick(path, tabName)}
                  key={id}
                  className={classNames("sidebar__sidebar__nav__ul__li", {
                    ["_active"]: tabName === activeTab,
                  })}
                >
                  {icon}
                  <span className="sidebar__nav__ul__li__content">{tabName}</span>
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
