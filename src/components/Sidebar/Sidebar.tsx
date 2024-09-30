import React, { useState } from "react";
import "./Sidebar.css";
import Graphs from "../Graphs/Graphs";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="logo_details bx bx-menu" id="btn" onClick={toggleSidebar}>
        <i className="">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 6H20"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 12H20"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4 18H16"
              stroke="white"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
        <div className="logo_name">Seller Center</div>
      </div>
      <ul className={`nav-list ${isOpen ? "open" : ""}`}>
        <li>
          <a href="#">
            <i className="bx">
              {" "}
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="3.33333"
                  y="3.83333"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="3.33333"
                  y="12.1667"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="11.6667"
                  y="12.1667"
                  width="5"
                  height="5"
                  rx="1"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M11.6667 6.33333H16.6667"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1667 3.83333V8.83333"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>

            <span className="link_name">Overview</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <ellipse
                  cx="4.16666"
                  cy="8"
                  rx="0.833333"
                  ry="0.833333"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="4.16666"
                  cy="13"
                  rx="0.833333"
                  ry="0.833333"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="10"
                  cy="8"
                  rx="0.833333"
                  ry="0.833333"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="10"
                  cy="13"
                  r="0.833333"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="15.8333"
                  cy="8"
                  rx="0.833333"
                  ry="0.833333"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="15.8333"
                  cy="13"
                  r="0.833333"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <span className="link_name">Products</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="7.08333"
                  cy="7.58333"
                  r="0.833333"
                  fill="white"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.33333 6.33333V9.54916C3.33333 9.99666 3.51083 10.4258 3.82749 10.7425L10.5908 17.5058C10.9073 17.8224 11.3366 18.0002 11.7842 18.0002C12.2318 18.0002 12.661 17.8224 12.9775 17.5058L17.0058 13.4775C17.3224 13.161 17.5002 12.7318 17.5002 12.2842C17.5002 11.8366 17.3224 11.4073 17.0058 11.0908L10.2417 4.32749C9.92536 4.01124 9.49644 3.8335 9.04916 3.83333H5.83333C4.45262 3.83333 3.33333 4.95262 3.33333 6.33333Z"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <span className="link_name">Orders</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="8.33333"
                  y="8"
                  width="3.33333"
                  height="10"
                  rx="1.105"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <rect
                  x="14.1667"
                  y="3"
                  width="3.33333"
                  height="15"
                  rx="1.105"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <ellipse
                  cx="4.16667"
                  cy="16.3333"
                  rx="1.66667"
                  ry="1.66667"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <span className="link_name">Reports</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.60417 4.0975C8.95917 2.63417 11.0408 2.63417 11.3958 4.0975C11.5039 4.54338 11.8184 4.91085 12.2422 5.08645C12.6661 5.26206 13.1483 5.22467 13.54 4.98583C14.8258 4.2025 16.2983 5.67417 15.515 6.96083C15.2765 7.35238 15.2392 7.83423 15.4146 8.25782C15.59 8.6814 15.957 8.99583 16.4025 9.10417C17.8658 9.45917 17.8658 11.5408 16.4025 11.8958C15.9566 12.0039 15.5891 12.3184 15.4135 12.7422C15.2379 13.1661 15.2753 13.6483 15.5142 14.04C16.2975 15.3258 14.8258 16.7983 13.5392 16.015C13.1476 15.7765 12.6658 15.7392 12.2422 15.9146C11.8186 16.09 11.5042 16.457 11.3958 16.9025C11.0408 18.3658 8.95917 18.3658 8.60417 16.9025C8.49613 16.4566 8.18164 16.0891 7.75779 15.9135C7.33394 15.7379 6.85172 15.7753 6.46 16.0142C5.17417 16.7975 3.70167 15.3258 4.485 14.0392C4.72349 13.6476 4.76079 13.1658 4.58539 12.7422C4.41 12.3186 4.04298 12.0042 3.5975 11.8958C2.13417 11.5408 2.13417 9.45917 3.5975 9.10417C4.04338 8.99613 4.41085 8.68164 4.58645 8.25779C4.76206 7.83394 4.72467 7.35172 4.48583 6.96C3.7025 5.67417 5.17417 4.20167 6.46083 4.985C7.29417 5.49167 8.37417 5.04333 8.60417 4.0975Z"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="10"
                  cy="10.5"
                  r="2.5"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <span className="link_name">Setting</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_117_2841)">
                  <ellipse
                    cx="10"
                    cy="6.33333"
                    rx="3.33333"
                    ry="3.33333"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M5 18V16.3333C5 14.4924 6.49238 13 8.33333 13H11.6667C13.5076 13 15 14.4924 15 16.3333V18"
                    stroke="white"
                    stroke-width="1.75"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_117_2841">
                    <rect
                      width="20"
                      height="20"
                      fill="white"
                      transform="translate(0 0.5)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </i>
            <span className="link_name">Adminstration</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.83335 8.83334H8.33335V6.33334L5.41669 3.41667C7.32873 2.5035 9.60874 2.89468 11.107 4.39298C12.6053 5.89128 12.9965 8.1713 12.0834 10.0833L17.0834 15.0833C17.7737 15.7737 17.7737 16.893 17.0834 17.5833C16.393 18.2737 15.2737 18.2737 14.5834 17.5833L9.58335 12.5833C7.67131 13.4965 5.3913 13.1053 3.893 11.607C2.3947 10.1087 2.00351 7.82872 2.91669 5.91667L5.83335 8.83334"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <span className="link_name">Maintenance</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
        <li>
          <a href="#">
            <i className="bx">
              <svg
                width="20"
                height="21"
                viewBox="0 0 20 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="10"
                  cy="10.5"
                  r="7.5"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M2.99998 13H11.7917"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.45924 4.61515L8.17602 12.9765"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.1937 4.36298L7.08106 9.5306"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.1326 12.592L10.02 7.42434"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10.2145 17.9299L12.9313 9.56856"
                  stroke="white"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </i>
            <span className="link_name">Help</span>
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.5 5.5L12.5 10.5L7.5 15.5"
                stroke="white"
                stroke-width="1.75"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
