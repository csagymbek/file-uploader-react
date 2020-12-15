import React from "react";

export default function FileUpload() {
  return (
    <>
      <form action="">
        <div className="custom-file mb-4">
          <input type="text" className="custom-file-input" id="customFile" />
          <label htmlFor="customFile" className="custom-file-label">
            Choose file
          </label>
        </div>
        <input
          type="submit"
          value="Upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </>
  );
}
