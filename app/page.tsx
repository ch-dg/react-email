"use client";

import Image from "next/image";
//import DgInteraction from "@/react-email-starter/emails/dg-interaction";
import DgInteraction2 from "@/react-email-starter/emails/dg-interaction-2";
import { render } from "@react-email/render";

import { sendMail } from "@/app/mailMethods/sendMail";


export default function Home() {
  const renderEmail = () => {
    const customerDetails = {
      title: "Mrs",
      surname: "Bloggs",
      brand: "Bosch",
      appliance: "Washing Dryer",
      periodOfCover: 12,
    };

    //const htmlMail = render(DgInteraction());
    const htmlMail = render(DgInteraction2(customerDetails));
    console.log(htmlMail);

    return htmlMail;
  };

  // const send = sendMail(renderEmail)

  return (
    <main>
      <button onClick={() => renderEmail()}>Send email</button>
    </main>
  );
}
