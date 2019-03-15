import React from "react";
import { Button } from "reactform-appco";
import Menu from "menu-appco";
import "css/lightbox.css";
import "css/form.css";

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subscribedState: false
    };
  }

  componentDidMount = () => {
    if (this.props.user.subscribe === true) {
      this.setState({ subscribedState: true });
    } else {
      this.setState({ subscribedState: true });
    }
  };

  render() {
    return (
      <>
        {this.props.showMenu ? (
          <Menu
            showMenu={this.state.showMenu}
            closeHanlder={this.props.closeHandler}
          >
            <>
              {this.props.user.subscribe ? (
                <p>You are subscribed</p>
              ) : (
                <p>You are not subscribed</p>
              )}
              <span
                className="signout-button"
                onClick={this.props.updateSubscribed}
              >
                {this.props.user.subscribe ? (
                  <Button value="Unsubscribe" className="submit-button" />
                ) : (
                  <Button value="Subscribe" className="submit-button" />
                )}
              </span>
              <Button
                className="submit-button"
                onClick={this.props.logout}
                value="Sign Out"
              />
            </>
          </Menu>
        ) : null}
      </>
    );
  }
}

export default UserMenu;
