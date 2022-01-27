import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { staffData as staffDataRaw, StaffObject } from "../../data/staff/staff";
import StaffMemberBadge from "./StaffMemberBadge/StaffMemberBadge";
import "./Staff.scss";
import { Link } from "react-router-dom";

interface StaffPageProps {}

const Staff: React.FC<StaffPageProps> = (props: StaffPageProps) => {
  const [staffData, setStaffData] = useState<StaffObject[]>(staffDataRaw);

  function NothingFoundMessage(sectionName?: string) {
    return (
      <div className="alert alert-danger" role="alert">
        <h6>No Staff Data</h6>
        <p>Uh-oh, I didn't find any staff data for this section.</p>
        <hr />
        <p>
          No data present in{" "}
          <code>{sectionName ?? "[parameter not provided]"}</code>{" "}
        </p>
      </div>
    );
  }

  function BrassStaffBlock() {
    let htmlContent;
    const filteredStaff: StaffObject[] = staffData.filter(
      (member: StaffObject) => member.category.includes("brass")
    );

    if (filteredStaff.length === 0) return NothingFoundMessage();

    htmlContent = filteredStaff.map((member: StaffObject) => {
      return <StaffMemberBadge {...member} />;
    });

    return <div className="card-deck">{htmlContent}</div>;
  }

  function VisualStaffBlock() {
    const content = staffData
      .filter((member: StaffObject) => member.category.includes("visual"))
      .map((member: StaffObject) => {
        return <StaffMemberBadge {...member} />;
      });
    return <div className="card-deck">{content}</div>;
  }

  function PercussionStaffBlock() {
    let htmlContent;
    const filteredStaff: StaffObject[] = staffData.filter(
      (member: StaffObject) => member.category.includes("percussion")
    );

    if (filteredStaff.length === 0) return NothingFoundMessage();

    htmlContent = filteredStaff.map((member: StaffObject) => {
      return <StaffMemberBadge {...member} />;
    });

    return <div className="card-deck">{htmlContent}</div>;
  }

  function DesignStaffBlock() {
    const content = staffData
      .filter((member: StaffObject) => member.category.includes("design"))
      .map((member: StaffObject) => {
        return <StaffMemberBadge {...member} />;
      });
    return <div className="card-deck">{content}</div>;
  }

  function ColorGuardStaff() {
    let htmlContent;
    const filteredStaff: StaffObject[] = staffData.filter(
      (member: StaffObject) => member.category.includes("colorguard")
    );

    if (filteredStaff.length === 0) return NothingFoundMessage("colorguard");

    htmlContent = filteredStaff.map((member: StaffObject) => {
      return <StaffMemberBadge {...member} />;
    });

    return <div className="card-deck">{htmlContent}</div>;
  }

  useEffect(() => {
    document.title = "Staff - The Sunrisers";
  }, []);

  return (
    <div className="Staff">
      {/* 
        NOTE -- Wrapper class to mark page content so that footer
        remains at bottom of screen
      */}
      <div className="wrapper">
        <Navbar />

        <h1>Staff</h1>

        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  Design
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Visual
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-brass-list"
                  data-toggle="list"
                  href="#list-brass"
                  role="tab"
                  aria-controls="brass"
                >
                  Brass
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-percussion-list"
                  data-toggle="list"
                  href="#list-percussion"
                  role="tab"
                  aria-controls="messages"
                >
                  Percussion
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-colorguard-list"
                  data-toggle="list"
                  href="#list-colorguard"
                  role="tab"
                  aria-controls="settings"
                >
                  Color Guard
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  <DesignStaffBlock />
                </div>
                <div
                  className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  <VisualStaffBlock />
                </div>
                <div
                  className="tab-pane fade"
                  id="list-percussion"
                  role="tabpanel"
                  aria-labelledby="list-percussion-list"
                >
                  <PercussionStaffBlock />
                </div>
                <div
                  className="tab-pane fade"
                  id="list-colorguard"
                  role="tabpanel"
                  aria-labelledby="list-colorguard-list"
                >
                  <ColorGuardStaff />
                </div>
                <div
                  className="tab-pane fade"
                  id="list-brass"
                  role="tabpanel"
                  aria-labelledby="list-brass-list"
                >
                  <BrassStaffBlock />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center container">
          <p>
            <small>
              Default profile pictures provided by{" "}
              <a href="https://www.flaticon.com/">FlatIcon</a>. Thank you!
            </small>
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Staff;
