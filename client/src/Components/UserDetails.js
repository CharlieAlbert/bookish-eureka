import React, { Component } from "react";
import Profile from "./Profile";

const ImgUpload = ({ onChange, src }) => (
  <label htmlFor="photo-upload" className="custom-file-upload fas">
    <div className="img-wrap img-upload">
      <img for="photo-upload" src={src} />
    </div>
    <input id="photo-upload" type="file" onChange={onChange} />
  </label>
);

const Name = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="name">Name:</label>
    <input
      type="text"
      id="name"
      onChange={onChange}
      maxLength="25"
      value={value}
      placeholder="Alexa"
      required
    />
  </div>
);

const Status = ({ onChange, value }) => (
  <div className="field">
    <label htmlFor="status">Status:</label>
    <textarea
      id="status"
      cols="30"
      rows="10"
      onChange={onChange}
      value={value}
      placeholder="Tell others about yourself"
      required
    ></textarea>
  </div>
);

const userProfile = ({onSubmit, src, name, status}) => {
    <div className="card">
    <form onSubmit={onSubmit}>
      <h1>Profile Card</h1>
      <label className="custom-file-upload fas">
        <div className="img-wrap" >
          <img for="photo-upload" src={src}/>
        </div>
      </label>
      <div className="name">{name}</div>
      <div className="status">{status}</div>
      <button type="submit" className="edit">Edit Profile </button>
    </form>
  </div>
}

const Edit =({
    onSubmit,
    children,
  })=>
    <div className="card">
      <form onSubmit={onSubmit}>
        <h1>Profile Card</h1>
          {children}
        <button type="submit" className="save">Save </button>
      </form>
    </div>

class UserDetails extends Component {
  state = {
    file: "",
    imagePreviewUrl:
      "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true",
    name: "",
    status: "",
    active: "edit",
  };

  photoUpload = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.value[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  };

  editName = (e) => {
    const name = e.target.value;
    this.setState({
      name,
    });
  };

  editStatus = (e) => {
    const status = e.target.value;
    this.setState({
      status,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let activeP = this.state.active === "edit" ? "profile" : "edit";
    this.setState({
      active: activeP,
    });
  };

  render() {
    const { imagePreviewUrl, name, status, active } = this.state;
    return (
      <div>
        {active === "edit" ? (
          <Edit onSubmit={this.handleSubmit}>
            <ImgUpload onChange={this.photoUpload} src={imagePreviewUrl} />
            <Name onChange={this.editName} value={name} />
            <Status onChange={this.editStatus} value={status} />
          </Edit>
        ) : (
          <userProfile
            onSubmit={this.handleSubmit}
            src={imagePreviewUrl}
            name={name}
            status={status}
          />
        )}
      </div>
    );
  }
}

export default UserDetails;
