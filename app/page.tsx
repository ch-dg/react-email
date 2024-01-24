'use client'

import { useState } from 'react'
import DgInteraction from '@/react-email-starter/emails/dg-interaction'
import {render} from '@react-email/render'

import {sendMail} from '@/app/mailMethods/sendMail'

export default function Home() {
const renderEmail = () => {
const htmlMail = render(DgInteraction())
console.log(htmlMail);
return htmlMail
}

const [email, setEmail] = useState('')
const [surname, setSurname] = useState('')


const onSubmit = (e: React.FormEvent) => {
   e.preventDefault()
   console.log(surname);
   const htmlMail = render(DgInteraction())
}

// const send = sendMail(renderEmail)
  return (
    <main>
      <div className='flex flex-col items-center justify-center mt-16'>
      <form onSubmit={onSubmit} className='flex flex-col items-center justify-center'>
        <input 
        type='text'
        placeholder='Surnames'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className='w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100' />
      <button 
      type='submit'
      className='mt-8 flex items-center justify-center rounded-lg py-3 px-8 text-xl font-medium leading-6 bg-primary  text-white hover:border-transparent hover:border-primary-900 hover:bg-primary-900 hover:text-white focus:border-primary-400 focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-primary-400 disabled:cursor-not-allowed disabled:bg-neutral-400' 
            >
        Send email</button>
      </form>
      </div>
    </main>
  );
}
