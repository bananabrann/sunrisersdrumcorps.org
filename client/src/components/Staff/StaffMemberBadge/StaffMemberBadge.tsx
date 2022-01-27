import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StaffObject } from "../../../data/staff/staff";
import "./StaffMemberBadge.scss";

const StaffMemberBadge: React.FC<StaffObject> = (props: StaffObject) => {
  const hasDedicatedPage = props.email || props.biography;

  return (
    <Link
      to={hasDedicatedPage ? `${props.id}` : "#"}
      className={`StaffMemberBadge ${hasDedicatedPage ? "hover-effects" : ""}`}
    >
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
          <div className="">
            <h5 className="card-title">{props.name}</h5>
            <h6 className="card-text">{props.jobTitle}</h6>
          </div>

          <div className="container text-left icons">
            {props.biography ? (
              <p>
                <i className="fas fa-info-circle fa-1x" /> Biography
              </p>
            ) : (
              <span />
            )}

            {props.email ? (
              <p>
                <i className="fas fa-paper-plane" /> Email
              </p>
            ) : (
              <span />
            )}
          </div>

          {/* <p className="card-text">
              <small className="text-muted">Last updated 3 mins ago</small>
            </p> */}
        </div>
      </div>
    </Link>
  );
};

export default StaffMemberBadge;
