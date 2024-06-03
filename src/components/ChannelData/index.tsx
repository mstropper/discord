import React, { FC, useEffect, useRef } from "react";

import ChannelMessage, { Mention } from "../ChannelMessage";

import { Container, Input, InputIcon, InputWrapper, Messages } from "./styles";

const ChannelData: FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        {Array.from(Array(15).keys()).map((n) => (
          <ChannelMessage key={n} author="Matheus Stropper" content="Message" date="Today at 23:55" />
        ))}

        <ChannelMessage
          author="Bot test"
          content="This is a test."
          date="Today at 23:55"
          isBot
        />

        <ChannelMessage
          author="Test"
          content={
            <>
              <Mention>Matheus Stropper</Mention> this is mention.
            </>
          }
          date="Today at 23:55"
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Message #general" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
};

export default ChannelData;
