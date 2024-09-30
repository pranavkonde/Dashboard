import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Graphs.css";

interface Announcement {
  date: string;
  details: string;
}

interface Promotion {
  heading: string;
  dates: string;
  voucher: string;
  registration: string;
  funded: string;
  id: string;
}

const Graphs = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [promotions, setPromotions] = useState<Promotion[]>([]);

  useEffect(() => {
    axios
      .get("https://66f550239aa4891f2a24b9fb.mockapi.io/announcements")
      .then((response) => {
        setAnnouncements(response.data);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("https://66f550239aa4891f2a24b9fb.mockapi.io/promotions")
      .then((response) => {
        setPromotions(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="main-body">
      <div className="left-content">
        <div className="small-cards">
          <div className="small-card">
            <div className="small-card-heading">
              <h3>Total Pending Orders</h3>
            </div>
            <div className="small-card-graph">
              <img src={require('./assests/graph1.svg').default} />
            </div>
            <hr />
            <div className="small-card-bottom">
              <h3>Current Daily Order</h3>
              <h3>10000</h3>
            </div>
          </div>

          <div className="small-card">
            <div className="small-card-heading">
              <h3>Total Pending Orders</h3>
            </div>
            <div className="small-card-graph">
            <img src={require('./assests/graph2.svg').default} />
            </div>
            <hr />
            <div className="small-card-bottom">
              <h3>Current Daily Order</h3>
              <h3>10000</h3>
            </div>
          </div>

          <div className="small-card">
            <div className="small-card-heading">
              <h3>Total Pending Orders</h3>
            </div>
            <div className="small-card-graph">
            <img src={require('./assests/graph3.svg').default} />
            </div>
            <hr style={{ width: "80%" }} />
            <div className="small-card-bottom">
              <h3>Current Daily Order</h3>
              <h3>10000</h3>
            </div>
          </div>

          <div className="small-card">
            <div className="small-card-heading">
              <h3>Total Pending Orders</h3>
            </div>
            <div className="small-card-graph">
            <img src={require('./assests/graph4.svg').default} />
            </div>
            <hr />
            <div className="small-card-bottom">
              <h3>Current Daily Order</h3>
              <h3>10000</h3>
            </div>
          </div>
        </div>

        <div className="large-cards">
          <div className="large-card">
            <div className="large-card-heading">
              <h3>Sales Summary</h3>
              <h3>3K 2.1% vs Last Week</h3>
            </div>
            <div className="large-card-graph">
            <img src={require('./assests/graph5.svg').default} />
            </div>
          </div>

          <div className="large-card">
            <div className="large-card-heading">
              <h3>Order Volume</h3>
              <h3>5.51K 2.1% vs Last Week</h3>
            </div>
            <div className="large-card-graph">
            <img src={require('./assests/graph6.svg').default} />
            </div>
          </div>
        </div>

        <div className="announcements">
          <div className="announcements-heading">
            <h3>Announcements</h3>
            {announcements.map((announcement, index) => (
              <div key={index} className="announcements-details">
                <div className="left-details">
                  <h4>{announcement.date}</h4>
                  <p>{announcement.details}</p>
                </div>
                <div className="right-details">
                  <img src={require('./assests/message.svg').default} />
                </div>
              </div>
            ))}

            <div className="announcements-bottom">
              <h5>Showing 1 to 4 of 17</h5>
              <div className="arrow-buttons">
              <img src={require('./assests/leftArrow.svg').default} />
              <img src={require('./assests/rightArrow.svg').default} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="right-content">
        {promotions.map((promotion, index) => (
          <div key={index} className="promotion">
            <p className="promotion-heading">{promotion.heading}</p>
            <div className="promotion-details">
              <div className="promotion-left-details">
              <img src={require('./assests/promotionTime1.svg').default} />
              </div>
              <div className="promotion-right-details">
                <div className="promotion-description">
                <img src={require('./assests/promotionR1.svg').default} />
                <p className="para-details">{promotion.dates}</p>
                </div>

                <div className="promotion-description">
                <img src={require('./assests/promotionR2.svg').default} />
                  <p className="para-details">{promotion.voucher}</p>
                </div>

                <div className="promotion-description">
                <img src={require('./assests/promotionR3.svg').default} />
                  <p className="para-details">{promotion.registration}</p>
                </div>

                <div className="promotion-description">
                <img src={require('./assests/promotionR4.svg').default} />
                  <p className="para-details">{promotion.funded}</p>
                </div>

                <div className="promotion-type-count">
                  <p className="para-details">Sellers: 0</p>
                  <p className="para-details">Products: 0</p>
                </div>
              </div>
            </div>
            <button className="promotion-button">Join the Promotion</button>
            <div className="promotion-deals">
              <div className="deal-counts">
                <p>Approved deals</p>
                <p>1</p>
                <p>Pending deals</p>
                <p>-</p>
                <p>Rejected deals</p>
                <p>-</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graphs;
