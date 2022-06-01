import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="text-2xl flex gap-7 justify-between bg-gray-100 p-4">
      <Link
        to="/login"
        className="decoration-blue-400 decoration-4 hover:underline"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="decoration-blue-400 decoration-4 hover:underline"
      >
        Register
      </Link>
      <Link
        to="/posts"
        className="decoration-blue-400 decoration-4 hover:underline"
      >
        Posts
      </Link>
    </div>
  );
}
