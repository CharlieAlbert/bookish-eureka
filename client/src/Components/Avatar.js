import React from "react";


const Avatar = ({ onSubmit, src, name, status }) => {
  <div className="card">
    <form onSubmit={onSubmit}>
      <label className="custom-file-upload">
        <div className="img-wrap">
          <img src={src} for="photo-upload" />
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
      <button type="submit" className="edit">
        Edit Profile
      </button>
    </form>
  </div>;

  const Edit = ({ onSubmit, children }) => (
    <div className="card">
      <form onSubmit={onSubmit}>
        {children}
        <button type="submit" className="save">
          Save
        </button>
      </form>
    </div>
  );

  return <div></div>;
};

export default Avatar;
