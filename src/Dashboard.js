import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import {Schedule} from "./components/Table";
import "./Dashboard.css";
import logo from "./images/Logo.png";
import { MenuButton } from "./components/Buttons";
import { NameCard} from "./components/Cards";
export class Dashboard extends Component {
  render() {

    const settings = {
      adaptiveHeight: false,
      arrows: false,
      centerPadding: 60,
      className: "Dashboard",
      dots: true,
      duration: 100
    };
    return (
      <div>
        <div className="sticky">
            <div className="inline">
              <MenuButton></MenuButton> 
            </div>
            <div className="inline">
              <img src={logo} width = {100} alt = "WTH Logo"/>
            </div>
        </div> 
        <Slider {...settings}>
          <div>
            <h1 className="Heading">Upcoming Schedule</h1>
            <Schedule></Schedule>
          </div>
          <div>
            <h1>Participant Search</h1>
          </div>
          <div>
            <h1>OComm List</h1>
            <div>
              <NameCard></NameCard>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Dashboard;
