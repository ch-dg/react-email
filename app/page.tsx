'use client'

import Image from "next/image";
import DgInteraction from '@/react-email-starter/emails/dg-interaction'
import {render} from '@react-email/render'

import {sendMail} from '@/app/mailMethods/sendMail'

export default function Home() {
const renderEmail = () => {
const htmlMail = render(DgInteraction())
console.log(htmlMail);

return htmlMail
}

// const send = sendMail(renderEmail)


  return (
    <main>
      <button onClick={() => renderEmail()}>Send email</button>
    </main>
  );
}
