import React, { useState } from "react";
import { Button, Typography, TextField } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Stack from "@mui/material/Stack";

function CreateProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [jobtype, setJobtype] = useState("");
  const [id, setId] = useState("");
  const history = useHistory();

  const handleSubmit = () => {
    addProfile(name, email, mobile, jobtype, id);
  };
  function addProfile(name, email, mobile, jobtype, id) {
    fetch("https://60fcdb7a1fa9e90017c70cd7.mockapi.io/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        email,
        mobile,
        jobtype,
        id
      })
    })
      .then((data) => data.json())
      .then((data) => {
        history.push("/users");
        alert("New profile added !");
      })
      .catch((e) => console.log(e));
  }

  return (
    <div style={{ padding: "10px", maxWidth: "600px", margin: "auto" }}>
      <br />
      <Typography variant="h5" align="center" color="textPrimary" gutterBottom>
        Add your Profile here !
      </Typography>
      <div
        className="vote-form"
        style={{ display: "flex", flexDirection: "column", gap: "8px" }}
      >
        <TextField
          className="input"
          style={{ padding: "10px" }}
          multiline
          id="outlined-multiline-static"
          label="Enter Id"
          rows={2}
          type="text"
          name="id"
          value={id}
          onChange={(data) => setId(data.target.value)}
        />
        <TextField
          className="input"
          style={{ padding: "10px" }}
          multiline
          id="outlined-multiline-static"
          label="Enter Name"
          rows={4}
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
          label="Enter Email"
          rows={2}
          type="text"
          name="email"
          value={email}
          onChange={(data) => setEmail(data.target.value)}
        />
        <TextField
          className="input"
          multiline
          id="outlined-multiline-static"
          label="Enter Mobile no"
          type="text"
          name="mobile"
          value={mobile}
          onChange={(data) => setMobile(data.target.value)}
          rows={4}
        />
        <TextField
          className="input"
          style={{ padding: "10px" }}
          multiline
          id="outlined-multiline-static"
          label="Enter Jobtype"
          rows={2}
          type="text"
          name="jobtype"
          value={jobtype}
          onChange={(data) => setJobtype(data.target.value)}
        />

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Add Profile
          </Button>
          <Link to="/" className="btn btn-danger ml-2">
            Cancel
          </Link>
        </Stack>
      </div>
    </div>
  );
}
export default CreateProfile;
