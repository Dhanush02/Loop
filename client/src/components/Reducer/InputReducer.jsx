import React from "react";
import "./InputReducer.css";
const InputReducer = (props) => {
  return (
    // <div className="fields">
    //     <input
    //       className="profile-input form-control"
    //       placeholder={props.placeholder}
    //       name={props.name}
    //       type={props.type}
    //       // value={props.value}
    //     />
    //   </div>
    <div class="gfg-div">
      <div class="gfg-input-fields">
        <div class="gfg-email">
          <input
            className="w-100"
            placeholder={props.placeholder}
            name={props.name}
            type={props.type}
          />
        </div>
      </div>
    </div>
  );
};

export default InputReducer;
