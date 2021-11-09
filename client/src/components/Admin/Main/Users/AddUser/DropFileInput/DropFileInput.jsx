import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import "./DropFileInput.css";

const DropFileInput = (props) => {
  const wrapperRef = useRef(null);

  const [fileList, setFileList] = useState([]);

  const onDragEnter = () => wrapperRef.current.classList.add("dragover");

  const onDragLeave = () => wrapperRef.current.classList.remove("dragover");

  const onDrop = () => wrapperRef.current.classList.remove("dragover");

  const onFileDrop = (e) => {
    const newFile = e.target.files[0];
    if (
      newFile &&
      newFile.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      // const updatedList = [newFile];
      setFileList([newFile]);
      props.onFileChange([newFile]);
    } else {
      alert("Please select a valid excel file");
    }
  };

  const fileRemove = (file) => {
    const updatedList = [fileList];
    updatedList.splice(fileList.indexOf(file), 1);
    setFileList(updatedList);
    props.onFileChange(updatedList);
  };

  return (
    <>
      <div
        ref={wrapperRef}
        className="drop-file-input"
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className="drop-file-input__label">
          <img src="https://img.icons8.com/fluency/96/000000/microsoft-excel-2019.png" />
          <p>Drag & Drop your files here</p>
        </div>
        <input
          type="file"
          value=""
          onChange={onFileDrop}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
        />
      </div>
      {fileList.length > 0 ? (
        <div className="drop-file-preview">
          <p className="drop-file-preview__title">Ready to upload</p>
          {fileList.map((item, index) => (
            <div
              key={index}
              className="drop-file-preview__item d-flex w-100 align-items-center justify-content-center"
            >
              <img src="https://img.icons8.com/fluency/96/000000/microsoft-excel-2019.png" />
              <div className="drop-file-preview__item__info d-flex flex-column">
                <span>{item.name}</span>
                <div className="d-flex justify-content-between">
                  <span>{item.size}B</span>
                  <i
                    className="far fa-trash-alt del-item m-1"
                    onClick={() => fileRemove(item)}
                  ></i>
                </div>
              </div>
            </div>
          ))}
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="loop-btn pr-2 pl-2">
              <i className="fas fa-upload pr-2 pl-2"></i>Download Sample file
            </button>
          </div>
          <div className="d-flex align-items-center justify-content-center mt-3">
            <button className="loop-btn pr-2 pl-2">
              <i className="fas fa-upload pr-2 pl-2"></i>Upload Excel file
            </button>
          </div>
          <div className="d-flex align-items-end justify-content-end mt-3">
            <a className="log-file">
              <span class="badge badge-pill badge-secondary">Logs</span>
            </a>
          </div>
        </div>
      ) : (
        <div className="drop-file-preview__item mt-2 d-flex align-items-center justify-content-center">
          No file choosen. Excel file only be uploaded.
        </div>
      )}
    </>
  );
};

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
};

export default DropFileInput;
