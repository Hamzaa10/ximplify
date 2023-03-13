import React from "react";
import Image from "next/image";

import style from "./avatar.module.scss";

const Avatar = ({ profilePic, username }) => {
  const names = username.split(" ");

  let initials = "";

  if (names.length > 0) {
    initials += names[0].charAt(0);
  }

  if (names.length > 1) {
    initials += names[names.length - 1].charAt(0);
  }

  return (
    <div className={style.mainDiv}>
      {profilePic ? (
        <Image className={style.img} src={profilePic} alt="Profile" />
      ) : (
        <span className={style.initials}>{initials.toUpperCase()}</span>
      )}
    </div>
  );
};

export default Avatar;
