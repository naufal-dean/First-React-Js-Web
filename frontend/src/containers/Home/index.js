import React from 'react';
import { useParams } from "react-router-dom";

import './style.css';
import Header from "../../components/Header";
import Welcome from "../../components/Welcome";
import Construction from "../../images/construction.jpg";

const Home = (props) => {
  const { text } = useParams();
  return (
    <div>
      <div className="App">
        <Welcome text={text} />
        <Header />
      </div>
      <div>
        <img src={Construction} alt="Under construction" className="image" />
      </div>
    </div>
  )
}

export default Home
