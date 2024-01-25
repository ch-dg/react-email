import {
  Body,
  Head,
  Html,
  Img,
  Text,
  Container,
  Section,
} from "@react-email/components";

import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

export interface DgInteraction2Props {
  title: string;
  surname: string;
  brand: string;
  appliance: string;
  periodOfCover: number;
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://raw.githubusercontent.com/ch-dg/react-email/main/react-email-starter/";

const DgInteraction2 = ({
  title = "Mr",
  surname = "Bloggs",
  brand = "Bosch",
  appliance = "Washing Machine",
  periodOfCover = 12,
}: DgInteraction2Props) => {
  return (
    <Html>
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 my-auto mx-auto font-sans px-2">
          <Container className="lg:mt-16 bg-white borderborder-solid border-gray-200 mx-auto p-5 max-w-[465px] lg:max-w-[640px]">
            <Section>
              <Img
                src={`${baseUrl}/static/DGlogo.png`}
                width="25%"
                height="25%"
                alt="Domestic and General Logos"
              />
            </Section>
            <Section className="bg-gray-200 p-2 flex justify-center items-center mt-8">
              <Text className="text-black text-lg">
                Plan Number: DG0000270281
              </Text>
            </Section>
            <Section className="mt-4">
              <Text className="text-black text-lg font-bold">
                Dear {title} {surname},{" "}
              </Text>
              <Text className="text-black">Welcome to Domestic & General.</Text>
              <Text className="text-black">
                Good news! Your {brand} {appliance} is now protected for{" "}
                {periodOfCover} months
              </Text>

              <Text className="text-black">Kind regards,</Text>
              <Text className="text-black">
                The Domestic &amp; General Team
              </Text>
            </Section>
          </Container>
          <Container className="max-w-[465px] lg:max-w-[640px] p-5">
            <Text className="text-xs">
              This email was sent by Domestic & General Services Limited.
              Service plans and Maintenance & Support plans are provided by
              Domestic & General Services Limited. Company No. 1970780.
              Protection policies are provided by Domestic & General Insurance
              PLC. Company No. 485850. Domestic & General Services Limited is an
              appointed representative of Domestic & General Insurance PLC which
              is authorised by the Prudential Regulation Authority and regulated
              by the Financial Conduct Authority and the Prudential Regulation
              Authority. Registered Office for both companies: Swan Court, 11
              Worple Road, Wimbledon, London SW19 4JS. Both companies are
              registered in England and Wales.
            </Text>
            <Text className="text-xs">
              Terms and conditions -
              https://www.domesticandgeneral.com/web-terms-conditions
            </Text>
            <Text className="text-xs">
              {" "}
              Privacy and cookies policy -
              https://www.domesticandgeneral.com/privacy-cookies-policy
            </Text>
            <Text className="text-xs">
              Contact us -
              https://www.domesticandgeneral.com/content/contact-domestic-general
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default DgInteraction2;
