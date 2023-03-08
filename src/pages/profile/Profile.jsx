import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  huyStore,
  eraseCookie,
  USER_LOGIN,
  TOKEN,
} from "../../util/config.jsx";
const Profile = () => {
  const [on, setOn] = useState(false);
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.userReducer);

  return (
    <section className="profile">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <div
        className="profile-icon"
        style={on ? { display: "block" } : { display: "none" }}
      >
        <i
          className="fa-regular fa-circle-right"
          onClick={() => {
            setOn(!on);
          }}
        ></i>
      </div>
      <div className="row">
        <div className="profile-left col-3 ">
          <div
            className="profile-left-sidebar"
            style={on ? { translate: -400 } : null}
          >
            <div className="profile-left-icon">
              <i
                className="fa-solid fa-bars"
                onClick={() => {
                  setOn(!on);
                }}
              ></i>
            </div>
            <div className="profile-left-img">
              <img src={profile?.avatar} alt="profile-img" />
            </div>
            <div className="profile-left-info">
              <h3>{profile?.email}</h3>
            </div>
          </div>
        </div>

        <div
          className="profile-right col-9 "
          style={on ? { translate: -200 } : null}
        >
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Profile;