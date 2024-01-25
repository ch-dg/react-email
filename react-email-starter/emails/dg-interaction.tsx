import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

const DgInteraction = () => {
  return (
    <Html>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Head />
          <Text className="text-black text-[14px] leading-[24px]">
            Hello DG
          </Text>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default DgInteraction;
