import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Welcome to my page</h1>
      <h3>
        click to see <Link to="/posts">posts Page</Link>
      </h3>
    </div>
  );
}
