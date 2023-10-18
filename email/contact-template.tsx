import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import * as React from 'react';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

  type emailParams = {
    name: string,
    phone: string,
    email: string,
    subject: string,
    message: string
  }

export const ContactTemplate = ({ name, phone, email, subject, message }:emailParams) => {

  return(
  <Html>
    <Head />
    <Preview>You're now ready to make live transactions with Stripe!</Preview>
    <Body style={{backgroundColor: '#f3f3f3'}} >
      <Container style={{padding: '4px', width: '100%', maxWidth: '600px'  }}>
      
      <Section style={{textAlign: 'center' }}>
        <Heading style={{marginBottom: '6px'}} >New Contact Form recieved from</Heading>
        <Link href='https://juanrios.vercel.app'>juanrios.vercel.app</Link>
      </Section>
        <Hr/>
        <Section style={{ padding: '5px', }}>
          <Text>Name: {name}</Text>
          <Text>Phone Number: {phone}</Text>
          <Text>Email: {email}</Text>
          <Text>Subject: {subject}</Text>
          <Text>Message: {message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
  )
};

export default ContactTemplate;