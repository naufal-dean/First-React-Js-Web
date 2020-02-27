import React from "react";

import "./style.css";
import Construction from "../../images/construction.png";
import Gear from "../../images/gear.png";
import GearBack from "../../images/gear_back.png";

const Home = props => {
  return (
    <div>
      <div>
        <img src={Construction} alt="Under construction" className="mainImg" />
        <img src={GearBack} alt="Gear" className="gearBackImg" />
        <img src={Gear} alt="Gear" className="gearImg" />
      </div>
    </div>
  );
};

export default Home;
