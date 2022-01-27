import React from "react";
import { UserCard } from "./UserStyles";
import { Button } from "@mui/material";
import { UserProps } from "./User.types";

const User: React.FC<UserProps> = ({ name, email, phone, id, onClick }) => {
  const handleClick = () => {
    onClick(id);
  };
  return (
    <UserCard>
      <h5>{name}</h5>
      <p>{email}</p>
      <p>{phone}</p>
      <Button variant="outlined" color="inherit" onClick={handleClick}>
        Details
      </Button>
    </UserCard>
  );
};

export default User;
