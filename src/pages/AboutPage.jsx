// src\pages\AboutPage.jsx

import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/shared/Card";

function AboutPage() {
  return(
  <Card>
    <div>About this project</div>
    <p>React app</p>

    <p>
        <Link to="/">Back to Home</Link>
    </p>
  </Card>)
}

export default AboutPage;
