import { httpReq } from "@/app/modules/http";

export type emailConfig = {
  from: string;
  to: string;
  subject: string;
  body: string;
};

export const sendAWSMail = (props: emailConfig) => {
  const config = {
    method: "PUT" as const,
    cache: "no-cache" as const,
    headers: {
      "Content-Type": "application/json",
      Authorization: "123456",
    },
    body: JSON.stringify(props),
  };

  const send = httpReq(
    "https://45e84o0zr8.execute-api.eu-west-2.amazonaws.com/",
    config
  );
};
