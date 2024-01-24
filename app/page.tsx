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
const [title, setTitle] = useState('')
console.log(title)
const [surname, setSurname] = useState('')
const [brand, setBrand] = useState('')
const [appliance, setAppliance] = useState('')
const [periodofcover, setPeriodOfCover] = useState('')

const [formError, setFormError] = useState('')


const onSubmit = (e: React.FormEvent) => {
   e.preventDefault()
   console.log(surname);
  //  const FormFields = [
  //   {title: console.log(title), surnamestr: console.log(surname), brandstr: console.log(brand), appliancestr: console.log(appliance), periodofcoverint: console.log(periodofcover)}
  //  ]
   if (!surname) {
     setFormError('Please enter your surname')
     return
   }
   if (!brand) {
     setFormError('Please enter the brand of your appliance')
     return
   }
   if (!appliance) {
    setFormError('Please enter the type of appliance')
    return
  }
    if (!periodofcover) {
      setFormError('Please enter your period of cover')
    }
   const htmlMail = render(DgInteraction())
}


// const send = sendMail(renderEmail)
  return (
    <main>
      <div className='flex flex-col items-center justify-center mt-16'>
      <form onSubmit={onSubmit} className='flex flex-col items-center justify-center'>
      <select 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className='w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100'
      
      >
        <option value="">Select</option>
        <option value={"Mr"}>Mr</option>
        <option value={"Mrs"}>Mrs</option>
      </select>
      {formError && formError.includes('title') && <p className='text-red-500'>{formError}</p>}

        <input 
        type='text'
        placeholder='Surname'
        value={surname}
        onChange={(e) => setSurname(e.target.value)}
        className='w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100' />

      {formError && formError.includes('surname') && <p className='text-red-500'>{formError}</p>}

        <input
        type = 'text'
        placeholder = 'Brand'
        onChange={(e) => setBrand(e.target.value)}
        className='w-full appearance-none rounded-[3px] border bg-white py-3 px-6 pl-6  outline-none focus:border-[#1155CB] focus:outline focus:outline-1 focus:outline-offset-0 focus:outline-[#1155CB] file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-primary-900 hover:file:bg-violet-100' />

      {formError && formError.includes('brand') && <p className='text-red-500'>{formError}</p>}

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
