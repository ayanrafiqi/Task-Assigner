import React, { useState, useEffect } from "react";
import { getUserById } from "../Services/UserServices";

const ProfileScreen = () => {
  const [userDetails, setUserDetails] = useState();

  const fetchUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    getUserById(user.username, setUserDetails);
  };

  useEffect(fetchUser, []);
  return <></>;
};

export default ProfileScreen;
