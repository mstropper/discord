import React, { FC } from "react";

import ChannelButton from "../ChannelButton";

import { Category, Container, CreateChannelIcon } from "./styles";

const ChannelList: FC = () => {
  return (
    <Container>
      <Category>
        <span>Channels</span>
        <CreateChannelIcon />
      </Category>

      <ChannelButton channelName="general" />
      <ChannelButton channelName="commands" />
    </Container>
  );
};

export default ChannelList;
