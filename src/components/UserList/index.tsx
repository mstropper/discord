import React, { FC } from "react";

import { Container, Role, User, Avatar } from "./styles";

interface UserOptions {
  displayName: string;
  isBot?: boolean;
}

const UserRow: FC<UserOptions> = ({ displayName, isBot }) => {
  return (
    <User>
      <Avatar className={isBot ? "bot" : ""} />

      <strong>{displayName}</strong>

      {isBot && <span>Bot</span>}
    </User>
  );
};

const UserList: FC = () => {
  return (
    <Container>
      <Role>Online - 1</Role>
      <UserRow displayName="Matheus Stropper" />

      <Role>Offline - 10</Role>
      <UserRow displayName="Matheus Stropper" isBot />
      <UserRow displayName="Matheus Stropper" />
      <UserRow displayName="Matheus Stropper" isBot />
      <UserRow displayName="Matheus Stropper" />
      <UserRow displayName="Matheus Stropper" isBot />
      <UserRow displayName="Matheus Stropper" />
    </Container>
  );
};

export default UserList;
