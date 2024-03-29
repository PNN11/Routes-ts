import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, getSliceUsers } from "../../store/users";
import User from "../../components/User/User";
import { UsersWrapper } from "./UsersStyle";
import { CircularProgress } from "@mui/material";
import { Statuses } from "../../store/types";
import { useNavigate } from "react-router-dom";

const Users: React.FC = () => {
  const { users, usersRequestStatus } = useSelector(getSliceUsers);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/users/${id}`);
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const loading = usersRequestStatus === Statuses.PENDING;

  const error = usersRequestStatus === Statuses.FAILURE;

  return (
    <UsersWrapper>
      {loading && <CircularProgress />}
      {error && "some error..."}
      {!loading &&
        !error &&
        users &&
        users.map((user) => (
          <User onClick={handleClick} key={user.id} {...user} />
        ))}
    </UsersWrapper>
  );
};

export default Users;
