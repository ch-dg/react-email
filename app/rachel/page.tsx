"use client";

import Image from "next/image";
import { useState } from "react";
import DgInteraction2 from "@/react-email-starter/emails/dg-interaction-2";
import { render } from "@react-email/render";

import { sendMail } from "@/app/mailMethods/sendMail";

export default function Home() {
  const renderEmail = () => {
    const customerDetails = {
      title: "Mrs",
      surname: "Smith",
      brand: "Bosch",
      appliance: "Washing Dryer",
      periodOfCover: 12,
    };

    const htmlMail = render(DgInteraction2(customerDetails));
    console.log(htmlMail);

    return htmlMail;
  };

  // const send = sendMail(renderEmail)

  // return (
  //   <main>
  //     <button onClick={() => renderEmail()}>Send email</button>
  //   </main>
  // );

  const [title, setTitle] = useState("");
  const [surname, setSurname] = useState("");
  const [brand, setBrand] = useState("");
  const [appliance, setAppliance] = useState("");
  const [periodOfCover, setPeriodOfCover] = useState("");
  const [formError, setFormError] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title) {
      setFormError("Please enter your title");
      return;
    }
    if (!surname) {
      setFormError("Please enter your surname");
      return;
    }
    if (!periodOfCover) {
      setFormError("Please select a period of cover");
      return;
    }
    if (!brand) {
      setFormError("Please select a brand");
      return;
    }
    if (!appliance) {
      setFormError("Please select an appliance");
      return;
    }

    const customerDetails = {
      title: title,
      surname: surname,
      brand: brand,
      appliance: appliance,
      periodOfCover: Number(periodOfCover),
    };

    console.log(customerDetails);
    const htmlMail = render(DgInteraction2(customerDetails));
    console.log(htmlMail);
  };

  // const send = sendMail(renderEmail)
  return (
    <main>
      <div className="flex flex-col items-center justify-center mt-16">
        <form
          onSubmit={onSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100"
          />

          <input
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
            className="w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100"
          />

          <input
            type=""
            placeholder="Brand"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
            className="w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100"
          />

          <input
            type="text"
            placeholder="Appliance"
            value={appliance}
            onChange={(e) => setAppliance(e.target.value)}
            className="w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100"
          />

          <input
            type="text"
            placeholder="Period of Cover"
            value={periodOfCover}
            onChange={(e) => setPeriodOfCover(e.target.value)}
            className="w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100"
          />

          {formError && formError.includes("surname") && (
            <p className="text-red-500">{formError}</p>
          )}
          <button
            type="submit"
            className="mt-8 flex items-center justify-center rounded-lg py-3 px-8 text-xl font-medium leading-6 bg-primary  text-white hover:border-transparent hover:border-primary-900 hover:bg-primary-900 hover:text-white focus:border-primary-400 focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-primary-400 disabled:cursor-not-allowed disabled:bg-neutral-400"
          >
            Send email
          </button>
        </form>
      </div>
    </main>
  );
}
