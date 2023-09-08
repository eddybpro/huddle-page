import Logo from "./assets/logo.svg";
import Hero from "./assets/illustration-mockups.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa6";

import { IconContext } from "react-icons";

import "./App.css";

function App() {
  return (
    <main>
      <a href="#" className="Logo">
        <img src={Logo} alt="" />
      </a>
      <div className="Container">
        <div className="Container-ImgBox">
          <img src={Hero} alt="illustration" />
        </div>
        <div className="Container-TxtBox">
          <h1 className="Container-TxtBox-Title">
            Build The Community Your Fans Will Love
          </h1>
          <p className="Container-TxtBox-Para">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>
          <button className="Container-TxtBox-Btn">register</button>
          <div className="Container-TxtBox-SocialIcons">
            <IconContext.Provider
              value={{ className: "Container-TxtBox-SocialIcons-Icon" }}
            >
              <div>
                <FaFacebookF />
              </div>
            </IconContext.Provider>

            <IconContext.Provider
              value={{ className: "Container-TxtBox-SocialIcons-Icon" }}
            >
              <div>
                <FaTwitter />
              </div>
            </IconContext.Provider>
            <IconContext.Provider
              value={{ className: "Container-TxtBox-SocialIcons-Icon" }}
            >
              <div>
                <FaInstagram />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
