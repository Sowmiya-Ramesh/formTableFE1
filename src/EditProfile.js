import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Typography, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

function EditProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [jobtype, setJobtype] = useState("");
  const history = useHistory();
  const { id } = useParams();

  const handleSubmit = () => {
    editProfile(name, email, mobile, jobtype);
  };
  function getProfile(name, email, mobile, jobtype) {
    fetch(`https://60fcdb7a1fa9e90017c70cd7.mockapi.io/product/${id}`, {})
      .then((data) => data.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setJobtype(data.jobtype);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }

  useEffect(() => {
    getProfile();
  }, []);

  function editProfile(name, email, mobile, jobtype) {
    fetch(`https://60fcdb7a1fa9e90017c70cd7.mockapi.io/product/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        jobtype
      })
    })
      .then((data) => data.json())
      .then((data) => history.push("/users"))
      .then((data) => alert("Profile updated successfully"))
      .catch((e) => console.log(e));
  }

  return (
    <div
      className="form"
      style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}
    >
      <br />
      <br />
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        Edit your Profile here !
      </Typography>
      <br />
      <br />
      <div
        className="vote-form"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <TextField
          className="input"
          style={{ padding: "10px" }}
          multiline
          id="outlined-multiline-static"
          label="Enter Name"
          rows={2}
          type="text"
          name="name"
          value={name}
          onChange={(data) => setName(data.target.value)}
        />
        <TextField
          className="input"
          style={{ padding: "10px" }}
          multiline
          id="outlined-multiline-static"
          label="Enter Image"
          rows={4}
          type="text"
          name="email"
          value={email}
          onChange={(data) => setEmail(data.target.value)}
        />
        <TextField
          className="input"
          multiline
          id="outlined-multiline-static"
          label="Enter description"
          type="text"
          name="mobile"
          value={mobile}
          onChange={(data) => setMobile(data.target.value)}
          rows={4}
        />
        <br />
        <br />
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Edit Profile
          </Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </Stack>
      </div>
    </div>
  );
}
export default EditProfile;
