import { httpReq } from "@/app/modules/http";

type emailConfig = {
    from: string;
    to: string;
    subject: string;
    body: string;
}

export const sendMail = (props: emailConfig) => { 

    const config = {
        method:'PUT' as const,
        cache: 'no-cache' as const,
        headers: {
          'Content-Type': 'application/json',
          Authorization: '123456'
        },
        body: props.body
        }

    const send = httpReq('temoUrl', config)
}