import React from "react";

import "./style.css";
import Construction from "../../images/construction.png";
import Gear from "../../images/gear.png";

const Home = props => {
  return (
    <div>
      <div>
        <img src={Construction} alt="Under construction" className="mainImg" />
      <img src={Gear} alt="Gear" className="gearImg" />
      </div>
    </div>
  );
};

export default Home;
