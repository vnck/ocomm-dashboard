import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import {Schedule} from "./components/Table";
import "./Dashboard.css";
import logo from "./images/Logo.png";
import { MenuButton } from "./components/Buttons";

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
        <div class="sticky">
            <div class="inline">
              <MenuButton></MenuButton> 
            </div>
            <div class="inline">
              <img src={logo} width = {100}/>
            </div>
        </div> 
        <Slider {...settings}>
          <div>
            <h1 class="Heading">Upcoming Schedule</h1>
            <Schedule></Schedule>
          </div>
          <div>
            <h1>Participant Search</h1>
          </div>
          <div>
            <h1>OComm List</h1>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Dashboard;
