import React, { FC } from "react";

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadsetIcon, SettingsIcon } from "./styles";

const UserInfo: FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar />
        <UserData>
          <strong>Matheus Stropper</strong>
          <span>#01</span>
        </UserData>
      </Profile>

      <Icons>
        <MicIcon />
        <HeadsetIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  );
};

export default UserInfo;
