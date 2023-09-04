import { Button } from "@components/button";
import { HiPaintBrush, } from 'react-icons/hi2'
import { BsFileEarmarkCode } from 'react-icons/bs'
import { Card, CardHeader, CardBody, CardFooter, } from '@components/Cards'
import Link from "next/link";
import { RevealOnScroll } from "@components/ScrollTransitions";

const graphicDesignSkills = [
  'Adobe Illustrator',
  'Adobe Photoshop',
  'Adobe After Effects',
  'Adobe LightRoom',
  'Adobe Premiere Pro',
  'Adobe Express',
  'Adobe InDesign',
  'Figma',
];

const webDevelopmentSkills = [
  'Javascript',
  'PHP',
  'MYSQL',
  'JSON',
  'TailWindCSS',
  'React',
  'Next.JS',
  'Vue',
];

export function Skills(){
  return(
  <>
    <div className="w-full px-2">
      <div className="py-10">
        <RevealOnScroll>
          <h2 className="text-center text-[#f5f5f5]  " >Work Skills / Previous Experience</h2>
        </RevealOnScroll>
      </div>
      <div className="flex flex-col md:grid md:grid-cols-2">
        <div className="flex justify-center">
        <RevealOnScroll>
          <Card className="my-10 max-w-lg bg-slate-200">
            <CardHeader divider={true} className="text-center">
              <div className="absolute w-full top-[-80px] flex justify-center align-center " >
                <div className="rounded-[100%] bg-slate-500 p-4 drop-shadow  ">
                  <HiPaintBrush className='text-white'/>
                </div>
              </div>
              Graphic-Design / UI-UX Development
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <p>
                  I have had years of experience and have completed projects for a couple of local small businesses.
                  To learn about how I got started click the button below to check out my portfolio.
                </p>
                <div className="flex justify-center">
                  <Button href='/portfolio' >Learn More</Button>
                </div>
                <p>
                  Some of the tools that I have used before are:
                  <span className="text-sm">(To view a full list check out my <Link href='/portfolio' className="text-secondary-dark-blue underline hover:text-secondary-light-blue" >portfoilo</Link>)</span>
                </p>
                <ul className="list-disc pl-6 ">
                  {graphicDesignSkills.map(skill=>(
                    <li  key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
            <CardFooter>
              <p>To view all of my Graphic Design projects click the following link below</p>
              <div className="flex justify-center py-2">
                <Button href="/graphic-design">View Design Projects</Button>
              </div>
            </CardFooter>
          </Card>
        </RevealOnScroll>
        </div>
        <div className="flex justify-center">
        <RevealOnScroll>
          <Card className="my-10 max-w-lg bg-slate-200">
            <CardHeader divider={true} className="text-center">
              <div className="absolute w-full top-[-80px] flex justify-center align-center " >
                <div className="rounded-[100%] bg-slate-500 p-4 drop-shadow  ">
                  <BsFileEarmarkCode className='text-white'/>
                </div>
              </div>
              Web Development
            </CardHeader>
            <CardBody>
              <div className="space-y-2">
                <p>
                  I have had years of experience with web development. genereally
                  with the front end but I still have some familarity with back end as well.
                  To learn on how I got started click the button below to check out my portfolio.
                </p>
                <div className="flex justify-center">
                  <Button href='/portfolio'>Learn More</Button>
                </div>
                <p>
                  Some of the Programming Languages / Libraries I know are:
                  <span className="text-sm">(To view a full list check out my <Link href='/portfolio' className="text-secondary-dark-blue underline hover:text-secondary-light-blue" >portfoilo</Link>)</span>
                </p>
                <ul className="list-disc pl-6 ">
                  {webDevelopmentSkills.map(skill=>(
                    <li  key={skill}>{skill}</li>
                  ))}
                </ul>
              </div>
            </CardBody>
            <CardFooter>
              <p>To view all of my Web Devleopment projects click the following link below</p>
              <div className="flex justify-center py-2">
                <Button href="/web-development">View Web Projects</Button>
              </div>
            </CardFooter>
          </Card>
        </RevealOnScroll>
        </div>
      </div>
    </div>
  </>
  );
}

