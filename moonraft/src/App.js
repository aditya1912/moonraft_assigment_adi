import "./styles.css";
import React, { useEffect } from "react";
import jsonData from "./data.json";
export default function App() {
  const displayData = jsonData.map((info) => {
    return (
      <>
        <div id="content-desktop">
          <ul>
            <li> ID : {info.id} </li>
            <li> Name : {info.name} </li>
            <li> Email : {info.emailId}</li>
            <li> Gender : {info.gender} </li>

            <li>
              {" "}
              About me :{" "}
              <div>
                {`${info.aboutMe.substring(0, 100)}...`}
                <a href="#">Read more</a>
              </div>
            </li>
            <li> Joining Date : {info.joiningDate} </li>
            <li> Location : {info.location} </li>
            <li> Department : {info.department}</li>
          </ul>
        </div>
        <div id="content-mobie">
          <ul>
            <li> ID : {info.id} </li>
            <li> Name : {info.name} </li>
            <li> Email : {info.emailId}</li>
            <li> Gender : {info.gender} </li>
            <li> Joining Date : {info.joiningDate} </li>
            <li> Location : {info.location} </li>
            <li> Department : {info.department}</li>
            <li>
              {" "}
              About me :{" "}
              <div>
                {`${info.aboutMe.substring(0, 100)}...`}
                <a href="#">Read more</a>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  });

  return <>{displayData}</>;
}
