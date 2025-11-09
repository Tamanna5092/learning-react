import React from "react";
import Avatar from "./Avatar";
import Person from "./Person";

export default function Profile({ ...props }) {
  return (
    <div>
      <Person>
        <Avatar {...props}></Avatar>
      </Person>
    </div>
  );
}
