import React from "react";
import {Link} from "react-router-dom";

export default function Home() {
    return (
        <div className="bg-gray-500 relative flex p-20">
            <div>
                <h1>Welcome to my page</h1>
                <h3>
                    click to see{" "}
                    <Link to="/posts" className="text-sky-300">
                        posts Page
                    </Link>
                </h3>
            </div>
        </div>
    );
}
