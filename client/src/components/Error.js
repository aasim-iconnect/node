import React from "react";

export default function Error({errMessage}) {
    return (
        <div>
            <h1>{errMessage}</h1>
        </div>
    );
}
