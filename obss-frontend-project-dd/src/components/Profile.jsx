import React from "react";
import "./../assets/css/profile.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <div className="container-profile">
        <div className="user-info">
          <img
            className="user-img"
            src="https://api.realworld.io/images/smiley-cyrus.jpeg"
          />
          <h4 ng-bind="::$ctrl.profile.username" class="ng-binding">
            {user.username}
          </h4>
        </div>
        <div className="button-settings">
          <Link to="/settings" className="btn  btn-outline-secondary">
            Edit profil settings
          </Link>
        </div>
      </div>
    </>
  );
};

export default Profile;
