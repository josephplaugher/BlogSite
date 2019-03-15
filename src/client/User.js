import React from "react";
import EB from "./util/EB";
import LightBox from "lightbox-appco";
import SignIn from "./SignIn";
import NewUser from "./NewUser";
import UserMenu from "./UserMenu";
import SetUrl from "./util/SetUrl";
import "css/lightbox.css";
import "css/form.css";
import "css/usermenu.css";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showUserMenu: false };
    this.showUserMenu = this.showUserMenu.bind(this);
    this.hideUserMenu = this.hideUserMenu.bind(this);
  }

  showUserMenu = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.setState({ showUserMenu: true });
  };

  hideUserMenu = () => {
    this.setState({ showUserMenu: false });
  };

  render() {
    return (
      <div>
        {this.props.user.username ? (
          <>
            {/* prettier-ignore */}
            <EB comp="if username is true, section">
              <p id="userstate" className="user-menu-area">Signed in as {this.props.user.username}</p>
              <div id="user-menu-button" className="user-menu-area" onClick={this.showUserMenu}>
                <div className="user-menu-bar" />
                <div className="user-menu-bar" />
              </div>
            </EB>

            {this.state.showUserMenu ? (
              <EB comp="UserMenu in User.js">
                <UserMenu
                  showMenu={this.state.showUserMenu}
                  closeHandler={this.hideUserMenu}
                  logout={this.props.logout}
                  user={this.props.user}
                  updateSubscribed={this.props.updateSubscribed}
                />
              </EB>
            ) : null}
          </>
        ) : (
          <>
            {/* prettier-ignore */}
            <LightBox
              close={this.props.close} style={{backgroundColor: "white", width: "275px", height: "400px" }}>
              <div>
                {this.props.authForm === "sign-in" ? (
                  <EB comp="sign-in in User.js">
                    <SignIn response={this.props.signInResponse} userNotify={this.props.userNotify} />
                  </EB>
                ) : this.props.authForm === "new-user" ? (
                  <EB comp="NewUser in User.js">
                    <NewUser response={this.props.signInResponse} userNotify={this.props.userNotify} />
                  </EB>
                ) : null}
              </div>
            </LightBox>
          </>
        )}
      </div>
    );
  }
}

export default User;
