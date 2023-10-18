'use client'

import { useState } from "react"
import { Modal } from "./modal";

const formValues = {
  name: '',
  phone: '',
  email: '',
  subject: '',
  message: ''
};

const initialTouchState = {
  name: false,
  phone: false,
  email: false,
  subject: false,
  message: false
}


const initialFormState = {values: formValues, isLoading: false, error: ''}

export function ContactForm(){
  const [ formState, setFormState] = useState(initialFormState);
  const [ touched, setTouched ] = useState(initialTouchState);
  const [ isOpen, setIsOpen ] = useState(false);
  const [ modalType, setModalType ] = useState({})

  const { values, isLoading, error } = formState
  const ifInputsNotFilled = !values.name || !values.email || !values.phone || !values.subject || !values.message 

  const inputValues = [
    {name: 'name', label: 'Full Name', value: values.name, touch: touched.name },
    {name: 'phone', label: 'Phone Number', value: values.phone, touch: touched.phone, type: 'number'},
    {name: 'email', label: 'Email', value: values.email, touch: touched.email, type: 'email'},
    {name: 'subject', label: 'Subject', value: values.subject, touch: touched.subject},
  ]

  const closeModal = ()=>{
    setIsOpen(false)
  }

  const openModal = ()=>{
    setIsOpen(true)
  }

   const onBlur = ({target}:any)=>{
    setTouched((prev)=>({
      ...prev,
      [target.name]: true,
    }))
   };

   const handleChange = ({target}:any)=>{
    setFormState((prev)=>({
      ...prev,
      values:{
        ...prev.values,
        [target.name]: target.value
      }
    }))
   }

  const handleSubmit = async(event:any) => {
    event.preventDefault()
    setFormState((prev)=>({
      ...prev,
      isLoading: true,
    }))

    try {
      await fetch('api/sendContactForm',{
        method:'POST',
        body: JSON.stringify(values),
      })

      setTouched(initialTouchState);
      setFormState(initialFormState);
      setModalType('success')
      setIsOpen(true);
    } catch (error:any) {
      setFormState((prev) =>({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
      setModalType('error')
      setIsOpen(true);
    }
  }

  return(
    <div className="py-20 px-4 bg-slate-200/[.7] relative " >
      {
        isOpen && <Modal isOpen={isOpen} onClose={closeModal} type={modalType} />
      }
      <div className="text-center pb-8">
        <h1 className="">Contact Form</h1>
        <p className=" text-rose-800 ">All fields must be filled out in order for the form to be successfully sent</p>
        <button onClick={openModal}>open modal</button>
        <button onClick={closeModal}>close modal</button>
      </div>
      <div className="flex items-center justify-center">
        <form className=" w-full max-w-2xl ">
          <div className="space-y-5 ">
            {inputValues.map((item, index)=>(
          <div className="flex flex-col" key={index}>
            <div className="flex flex-row items-end space-x-2">
              <label htmlFor={item.name}>{item.label}</label>
              {
                (item.touch && !item.value) ?
              <p className=" text-sm text-rose-800  ">Please enter {item.label.toLowerCase()}</p> :
              null
              }
            </div>
            <input
              type={item.type ? item.type : 'text' }
              name={item.name}
              value={item.value}
              onChange={handleChange}
              id={item.name}
              onBlur={onBlur}
              className={`${(item.touch && !item.value) ? 'border-4 border-rose-800 ': ' ' } p-2 rounded-lg `}
              disabled={isLoading ? true : false}
            />
          </div>
            ))}
            <div className="flex flex-col" >
              <div className="flex flex-row items-end space-x-2">
                <label htmlFor='message'>Message</label>
                {
                  (touched.message && !values.message) ?
                  <p className=" text-sm text-rose-800  ">Please enter a message</p> : null
                }
              </div>
              <textarea
                rows={3}
                name='message'
                value={values.message}
                onChange={handleChange}
                id='message'
                onBlur={onBlur}
                className={`${(touched.message && !values.message) ? 'border-3 border-rose-800': '' } p-2 rounded-lg `}
                disabled={isLoading ? true : false}
              />
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleSubmit}
                className={`${ifInputsNotFilled ? ' opacity-60 cursor-not-allowed ' : ''} bg-slate-300 py-1 px-4 rounded`}
                disabled={ifInputsNotFilled ? true : false}
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
