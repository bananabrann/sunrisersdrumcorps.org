import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { Navigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { staffData, StaffObject } from "../../data/staff/staff";
import "./StaffSinglePage.scss";

interface StaffSinglePageProps {}

const StaffSinglePage: React.FC<StaffSinglePageProps> = (
  props: StaffSinglePageProps
) => {
  const { id } = useParams();
  const [staffMember, setStaffMember] = useState<StaffObject | null>(
    {} as StaffObject
  );
  const [isDefaultPicture, setIsDefaultPicture] = useState<boolean>(false);

  useEffect(() => {
    const selectedStaff = staffData.filter((m: StaffObject) => m.id === id)[0];
    // TODO -- Handle if more than 1 staff member of a given id exists.
    setStaffMember(selectedStaff);
  }, []);

  useEffect(() => {
    if (staffMember?.imageUrlSymbolicObjectName?.includes("default")) {
      setIsDefaultPicture(true);
    }
  }, [staffMember]);

  function HTMLContent() {
    if (staffMember) {
      return (
        <div className="container">
          <div className="row">
            {!isDefaultPicture ? (
              <div className="col-md-5">
                <div className="container-fluid px-0">
                  <img
                    className={`card-img-top`}
                    src={
                      process.env.PUBLIC_URL +
                      "/img/" +
                      staffMember.imageUrlSymbolicObjectName
                    }
                    alt={`Picture of ${staffMember.name}`}
                  />
                  <br />
                  <br />

                  <div className="alert alert-info">
                    <h4 className="alert-heading">Developer Note</h4>
                    <p>
                      This is a good alternative spot for contact information,
                      or other things if you wanted to put them here.
                    </p>
                    <p>
                      Want something here? Some ideas include work phone
                      numbers, additional emails, social medias, and resume-like
                      experience listings.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div></div>
            )}
            <div className={`col-md-7 ${isDefaultPicture ? "mx-auto" : ""}`}>
              <h1>{staffMember.name}</h1>
              <h3>{staffMember.jobTitle}</h3>
              <h6>
                <i className="fas fa-paper-plane" />{" "}
                {staffMember.email ?? "No email listed"}
              </h6>
              <hr />
              <h4>Biography</h4>
              <p className="staff-biography">{staffMember.biography}</p>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <Navigate to="../404" replace />
        </div>
      );
    }
  }

  return (
    <div className="StaffSinglePage">
      <Navbar />
      <HTMLContent />
      <Footer />
    </div>
  );
};

export default StaffSinglePage;
