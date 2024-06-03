import React, { FC } from "react";

import GuildButton from "../GuildButton";

import { Container, Separator } from "./styles";

const GuildList: FC = () => {
  return (
    <Container>
      <GuildButton isHome />
      <Separator />
      <GuildButton mentions={3}/>
      <GuildButton hasNotifications />
      <GuildButton mentions={2}/>
      <GuildButton />
      <GuildButton mentions={10}/>
      <GuildButton hasNotifications />
      <GuildButton />
      <GuildButton mentions={5} />
      <GuildButton />
    </Container>
  );
};

export default GuildList;
