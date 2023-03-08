import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProfileApi } from "../../redux/reducers/userReducer.jsx";

const MenuProfile = () => {
  const [on, setOn] = useState(true);
  const { profile } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(getProfileApi());
  }, []);
  return (
    <div className="menu-profile">
      <h2 className="title">Profile</h2>
      <div className="menu-profile-box">
        <div className="row">
          <div className="col-6 menu-profile-left">
            <div className="menu-profile-item">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={profile?.email}
                disabled={true}
              />
            </div>
            <div className="menu-profile-item">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                value={profile?.phone}
                disabled={on}
              />
            </div>
          </div>
          <div className="col-6 menu-profile-right">
            <div className="menu-profile-item">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={profile?.name}
                disabled={on}
              />
            </div>
            <div className="menu-profile-item">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value="123456789"
                disabled={true}
              />
            </div>
            <div className="menu-profile-radio">
              <ul className="d-flex justify-content-start pt-3 px-0">
                <li>
                  <span>Gender</span>
                </li>
                <li className="mx-5">
                  <label className="form-radio text-center">
                    <input
                      name="gender"
                      value={true}
                      type="radio"
                      checked={on ? `${profile?.gender}` : null}
                      disabled={on}
                    />
                    <p>Male</p>
                    <span></span>
                  </label>
                </li>
                <li>
                  <label className="form-radio text-center">
                    <input
                      name="gender"
                      value={false}
                      type="radio"
                      checked={on ? `${!profile?.gender}` : null}
                      disabled={on}
                    />
                    <p>Femail</p>
                    <span></span>
                  </label>
                </li>
              </ul>
              <button
                className={`btn-edit ${!on && "btn-update"}`}
                type="submit"
                onClick={() => {
                  setOn(!on);
                }}
              >
                {on ? "Edit" : "Update"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuProfile;