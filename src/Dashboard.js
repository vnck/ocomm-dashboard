import React, { Component } from "react";
import Slider from "infinite-react-carousel";
import { MDCDataTable } from "@material/data-table";
import { isAbsolute, relative } from "path";
import hstyle from "./Dashboard.css";

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
        <Slider {...settings}>
          <div class="mdc-data-table">
            <h1 {...hstyle}>Upcoming Events</h1>
            <table class="mdc-data-table__table" aria-label="Upcoming Events">
              <thead>
                <tr class="mdc-data-table__header-row">
                  <th
                    class="mdc-data-table__header-cell"
                    role="columnheader"
                    scope="col"
                  >
                    Time
                  </th>
                  <th
                    class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                    role="columnheader"
                    scope="col"
                  >
                    Event Name
                  </th>
                  <th
                    class="mdc-data-table__header-cell mdc-data-table__header-cell--numeric"
                    role="columnheader"
                    scope="col"
                  >
                    Location
                  </th>
                  <th
                    class="mdc-data-table__header-cell"
                    role="columnheader"
                    scope="col"
                  >
                    Remarks
                  </th>
                </tr>
              </thead>
              <tbody class="mdc-data-table__content">
                <tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell">17:00-18:30</td>
                  <td class="mdc-data-table__cell">Hacking Activity 01</td>
                  <td class="mdc-data-table__cell">CC14</td>
                  <td class="mdc-data-table__cell">ye</td>
                </tr>
                <tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell">18:30-19:30</td>
                  <td class="mdc-data-table__cell">Hacking Activity 02</td>
                  <td class="mdc-data-table__cell">Campus Centre</td>
                  <td class="mdc-data-table__cell">yee</td>
                </tr>
                <tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell">20:00-21:30</td>
                  <td class="mdc-data-table__cell">Hacking Activity 03</td>
                  <td class="mdc-data-table__cell">Multi Purpose Hall</td>
                  <td class="mdc-data-table__cell">yeet</td>
                </tr>
                <tr class="mdc-data-table__row">
                  <td class="mdc-data-table__cell">22:00-07:00</td>
                  <td class="mdc-data-table__cell">Hacking Activity 04</td>
                  <td class="mdc-data-table__cell">CC13, CC14, MPH</td>
                  <td class="mdc-data-table__cell">yeeter</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
        </Slider>
      </div>
    );
  }
}

export default Dashboard;
