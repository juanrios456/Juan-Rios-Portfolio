import { NextApiRequest } from 'next';
import {ContactTemplate} from '../../../email/contact-template';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req:Request, res:Response){
  const {name, phone, email, subject, message} = await req.json();

  if(!name || !phone || !email || !subject || !message){
    return NextResponse.json({error: 'Bad request must fill out all fields'},{status: 400})
  }

  try{
    const data = await resend.sendEmail({
      from: 'Website <email@capitalstonellc.com>' || '',
      to: ['juanriis456@gmail.com'],
      subject: 'New Website Form Recieved',
      react: ContactTemplate({ name: name, phone: phone, email: email, subject: subject, message:message})
    });
    return NextResponse.json({status: 'OK'},{status: 200})
  } catch(e: unknown){
    if(e instanceof Error){
      console.log(`Failed to send email: ${e.message}`)
    }
    return NextResponse.json({error: 'Internal Server Error'}, {status: 500})
  }
}
