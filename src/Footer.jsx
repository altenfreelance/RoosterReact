import React, { Component } from "react";
import "./footer.css";


export default class Footer extends Component {
  render() {
    return (
      <footer className="mastfoot mt-auto">
        <section id="lab_social_icon_footer">
          <link
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <div className="container">
            <div className="text-center center-block">
            <a href="https://www.youtube.com/channel/UCE0jXwLwL7T6zIoQCnHVUzw">
                <i
                  id="social-yt"
                  className="fa fa-youtube-square fa-3x social"
                ></i>
              </a>
              <a href="https://www.facebook.com/RoosterRidgeOfficial/">
                <i
                  id="social-fb"
                  className="fa fa-facebook-square fa-3x social"
                ></i>
              </a>
              <a href="https://www.instagram.com/roosterridgeofficial/">
                <i id="social-ig" className="fa fa-instagram fa-3x social"></i>
              </a>
              <a href="mailto:roosterridgeofficial@gmail.com">
                <i
                  id="social-em"
                  className="fa fa-envelope-square fa-3x social"
                ></i>
              </a>
            </div>
          </div>
        </section>
      </footer>
    );
  }
}
