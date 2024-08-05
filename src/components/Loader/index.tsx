import cloud from "../../assets/icons/cloud.svg";
import sun from "../../assets/icons/sun.svg";

import "./_loader.scss";

export const Loader = () => (
  <div className="loader">
    <div className="loader__container">
      <img className="loader__cloud loader__cloud--left" src={cloud} alt="" />
      <img className="loader__sun" src={sun} alt="" />
      <img className="loader__cloud" src={cloud} alt="" />
    </div>
  </div>
);
