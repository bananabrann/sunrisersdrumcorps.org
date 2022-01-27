import React, { useEffect, useState } from "react";
import { StaffObject } from "../../../data/staff/staff";
import "./StaffMemberBadge.scss";

const StaffMemberBadge: React.FC<StaffObject> = (props: StaffObject) => {
  return (
    <div className="StaffMemberBadge">
      <div className="card">
        <img
          className={`card-img-top ${
            props.imageUrlSymbolicObjectName?.includes("defaults")
              ? "opaque"
              : ""
          }`}
          src={
            process.env.PUBLIC_URL + "/img/" + props.imageUrlSymbolicObjectName
          }
          alt={`Picture of ${props.name}`}
        />
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-text">{props.jobTitle}</h6>
          {/* <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default StaffMemberBadge;
