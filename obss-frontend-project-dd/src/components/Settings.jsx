import React from "react";
import "./../assets/css/profile.css";

const Settings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    window.location.href = "/";
  };
  return (
    <div className="container-settings">
      <div className="row">
        <div className="col-md-6 offset-md-3 col-xs-12">
          <h3 className="text-xs-center">Your Settings</h3>
          <form>
            <fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control"
                  type="text"
                  placeholder="URL of profile picture"
                  value={user.image}
                  //onChange={this.updateState("image")}
                />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control form-control-m"
                  type="text"
                  placeholder="Username"
                  value={user.username}
                  //onChange={this.updateState("username")}
                />
              </fieldset>

              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-m"
                  rows="8"
                  placeholder="Short bio about you"
                  value={user.bio}
                  //onChange={this.updateState("bio")}
                ></textarea>
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control form-control-m"
                  type="email"
                  placeholder="Email"
                  value={user.email}
                  //onChange={this.updateState("email")}
                />
              </fieldset>

              <fieldset className="form-group">
                <input
                  className="form-control form-control-m"
                  type="password"
                  placeholder="New Password"
                  value={user.password}
                  //onChange={this.updateState("password")}
                />
              </fieldset>
              <div className="btn-settings">
                <button
                  className="btn btn-lg btn-success pull-xs-right"
                  type="submit"
                  //disabled={this.state.inProgress}
                >
                  Update Settings
                </button>
              </div>
            </fieldset>
          </form>
          <hr />

          <button className="btn btn-outline-danger" onClick={handleLogout}>
            Or click here to logout.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
