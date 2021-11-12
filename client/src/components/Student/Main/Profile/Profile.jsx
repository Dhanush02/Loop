import React, { useEffect } from "react";
import "./Profile.css";
import InputReducer from "../../../Reducer/InputReducer";
import SelectReducer from "../../../Reducer/SelectReducer/SelectReducer";
import { Button } from "@material-ui/core";
const Profile = (props) => {
  useEffect(() => {
    props.setSideToggle(false);
  });
  return (
    <div className="container-fluid mt-5">
      <div className="mt-5 ml-3">
        <p className="text-left dash-title-category">Edit Details</p>
        <div className="col p-0" style={{ marginTop: "-20px" }}>
          <div className="hr">
            <hr className="col p-0" />
          </div>
          <div className="col question-outoff p-0 mb-3">
            <span>Manage your personal information , password and more</span>
          </div>
        </div>
      </div>
      <div className="input-container w-100 d-flex flex-column mt-5">
        <div className="d-flex mt-2 mb-2">
          <div className="col-md-5">
            <InputReducer placeholder="Enter Email" name="Email" type="email" className="input-click" />
          </div>
          <div className="col-md-5">
            <InputReducer
              placeholder="Register Number"
              name="Register no"
              type="text"
            />
          </div>
        </div>
        <div className="d-flex mt-2 mb-2">
          <div className="col-md-5">
            <InputReducer
              placeholder="Old passoword"
              name="Old Password"
              type="password"
            />
          </div>
          <div className="col-md-5">
            <InputReducer
              placeholder="New passoword"
              name="New Password"
              type="password"
            />
          </div>
        </div>
        <div className="d-flex mt-2 mb-2">
          <div className="col-md-5">
            <InputReducer placeholder="Enter Name" name="Name" type="text" />
          </div>
          <div className="col-md-5">
            <InputReducer
              placeholder="Enter Phone Nuber"
              name="Phone number"
              type="Number"
            />
          </div>
        </div>
        <div
          className="d-flex mt-2 mb-2"
          style={{ position: "relative", left: "-7px" }}
        >
          <div className="col-md-5">
            <SelectReducer
              array={["KSRCT", "KSRCE", "KSRIET"]}
              name="College name"
            />
          </div>
          <div className="col-md-5">
            <SelectReducer array={["B.E", "B.Tech"]} name="Stream" />
          </div>
        </div>
        <div
          className="d-flex mt-3 mb-2"
          style={{ position: "relative", left: "-7px" }}
        >
          <div className="col-md-5">
            <SelectReducer array={["CSE", "IT", "CIVIL"]} name="Course name" />
          </div>
        </div>
        <div className="d-flex pl-3 mt-2">
          <Button variant="contained"  className="mr-2 btn-sucess">
            Save Changes
          </Button>
          <Button variant="contained" className="btn-sucess" >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
