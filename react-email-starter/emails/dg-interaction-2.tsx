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

export interface DgInteraction2Props {
    title: string
    surname: string
    brand: string
    appliance: string
    periodOfCover: number
  }

  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://raw.githubusercontent.com/ch-dg/react-email/main/react-email-starter/";

const DgInteraction2 = ({ title = 'Mr', surname = "Bloggs", brand = "Bosch", appliance = "Washing Machine", periodOfCover = 12 }: DgInteraction2Props) => {

    return (
        <Html>
            <Tailwind>
            <Body className="bg-white my-auto mx-auto font-sans px-2">
                <Head />
                <Img src={`${baseUrl}/static/DGlogo.png`} 
                width="10%"
                height="10%"
                alt="Domestic and General Logo"
                />
                <Text className="text-black text-[14px] leading-[24px]">
              Dear {title} {surname}, </Text>
              <Text className="text-black text-[14px] leading-[24px]">
              Welcome to Domestic & General.</Text>
              <Text className="text-black text-[14px] leading-[24px]">
              Good news! Your {brand} {appliance} is now protected for {periodOfCover} months</Text>
              <Text className="text-black text-[14px] leading-[24px]">
              Kind regards,
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
              The Domestic &amp; General Team
            </Text>

            </Body>

            </Tailwind>
        </Html>
    )
}

export default DgInteraction2;