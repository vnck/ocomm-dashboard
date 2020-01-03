import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import {Schedule} from "./components/Table"

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
          <h1> What The Hack</h1>
        </div>
        <Slider {...settings}>
          <div>
            <Schedule></Schedule>
          </div>
          <div>
            <h1>test 2</h1>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Dashboard;
