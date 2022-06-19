import React, { useState } from "react";
import "./User.css";
import Popup from "reactjs-popup";
import classNames from "classnames";

const User = () => {
  const [isMenuOpen, setMenu] = useState(false);

  return (
    <div className="user">
      <div className="user__info">
        <div className="user__icon">
          <span className="user__icon__name">UN</span>
        </div>
        <span className="user__username">User name</span>
      </div>
      <Popup
        trigger={
          <span className={classNames("material-symbols-outlined", "expand_more", { ["_active"]: isMenuOpen })}>
            expand_more
          </span>
        }
        onOpen={() => setMenu(true)}
        onClose={() => setMenu(false)}
        position="bottom right"
        on="hover"
        closeOnDocumentClick
        mouseLeaveDelay={100}
        mouseEnterDelay={0}
        contentStyle={{ padding: "0px", border: "none" }}
        arrow={false}
      >
        <div className="menu">
          <div className="menu-item">Edit profile</div>
          <div className="menu-item">Logout</div>
        </div>
      </Popup>
    </div>
  );
};

export default User;
