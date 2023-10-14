import { interSemiBold } from "@components/fonts";
import { RevealOnScroll } from "@components/ScrollTransitions";

interface TopicDetails{
  title: string;
  details: string;
}

interface TopicList{
  title: string;
  list: Array<String>;
}

export default function Page(){
  return(
    <div className="py-10 px-4 " >
      <div className=' pb-10 '>
        <h1 className='text-center text-white'>Resume</h1>
      </div>
      <RevealOnScroll>
      <div className="flex justify-center items-center px-4 w-full ">
        <div className="p-5 max-w-5xl w-full bg-slate-200/[.5] rounded-3xl">
          <div className="pb-5">
            <div className="flex flex-row justify-between items-end ">
              <h2>Juan Rios</h2>
              <p>22 Years Old</p>
            </div>
            <div className="flex sm:flex-row flex-col sm:space-x-2">
              <p className="border-black sm:border-none border-l-2 px-2">Topeka, KS</p>
              <p className="border-black border-l-2 px-2">juanriis456@gmail.com</p>
              <p className="border-black border-l-2 px-2">(785)380-1120</p>
            </div>
          </div>
          <div className=" space-y-3">
            <EducationAndCertifications/>
            <Skills/>
            <WorkExperience/>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </div>
  )
}

function WorkExperience(){
  let experience = [
    {
      topic: 'Website Developer - State of Kansas Department of Administration - 06/01/2022 - 12/25/2022',
      list: stateExperience,
    },
    {
      topic: 'Apprentice Electrician - Associates Electric - 08/15/2021 - 12/20/21',
      list: sparkyExperience,
    },
    {
      topic: 'Laborer - Capital Stone - 03/15/2020 - 08/15/2021',
      list: stoneExperience,
    },
    {
      topic: 'Website Developer - TCALC - 08/30/2018 - 03/15/2020',
      list: tcalcExperience,
    }
  ]

  return(
    <div>
      <h3>Work Experience</h3>
      <div className="ml-2">
        {experience.map((item, index)=>(
          <TopicList title={item.topic} list={item.list} key={index}/>
        ))}
      </div>
    </div>
  )
}

function Skills(){
  let skills = [
    {topic: 'Programming Languages', details: 'HTML, CSS, PHP, Javascript and MYSQL'},
    {topic: 'UI/UX Development', details: 'ReactJS, NextJS, Tailwindcss, Bootstrap, Framer-Motion, Resend, NodeMailer, React Email, SEO Research, ChakraUI, HeadlessUI'},
    {topic: 'UI Design / Graphic Design', details: 'Photoshop, Illustrator, InDesign, Figma, Adobe XD, Premiere Pro'},
    {topic: 'Languages', details: 'English, Spanish'}
  ]

  return(
    <div>
      <h3>Skills</h3>
      <div className="ml-2">
      {skills.map((item, index)=>(
        <TopicDetails title={item.topic} details={item.details} key={index}/>
      ))}
      </div>
    </div>
  )
}

function EducationAndCertifications(){
  let topicAndDetails = [
    {topic: 'Topeka High School', details: 'High School Diploma'},
    {topic: 'Topeka Center For Advancement Learning and Careers (TCALC)', details: ' 2 Years of Web and Digital Communications Course'},
    {topic: 'Wichita State University', details: '1 semester completed, studying for computer science'},
  ];
  let certifications = [
    'Digital Literacy (Using Microsoft Office Applications in 2020)',
    '2 Year Certificate of Completion for Web and Digital Communications course',
  ]

  return(
    <div>
      <h3>Education / Certifications</h3>
      <div className="ml-2">
      {topicAndDetails.map((words, index)=>(
        <TopicDetails key={index} title={words.topic} details={words.details} />
      ))}
      <TopicList list={certifications} title="Certifications"/>
      </div>
    </div>
  )
}

function TopicList({title, list}:TopicList){
  return(
    <div className="space-x-2">
      <h5 className={`${interSemiBold.className} inline text-lg`}>{title}:</h5>
      <ul className="list-disc  ">
      {list.map((item, index)=>(
        <li key={index} className="ml-4 " >{item}</li>
      ))}
      </ul>
    </div>
  )
}

function TopicDetails({ title, details }:TopicDetails){
  return(
    <div className="space-x-2">
      <h5 className={`${interSemiBold.className} inline text-lg text-bg-slate-400 `}>{title}:</h5>
      <p className="inline">{details}</p>
    </div>
  )
}

const stateExperience = [
  'Made new UI Design for many landing pages, and also subpages',
  'Picked new Images for landing pages',
  'Added insight to make updates to the UI and make website easier for the users',
  'Looked for bugs both in the front end and the backend',
  'Created responsive web pages using HTML CSS and javascript',
  'Used Adobe Creative cloud apps like photoshop, indesign, and illustrator to create UI Designs',
  'Followed ADA Compliance guidelines and gained a deeper insight about them',
  'Used a tool to make sure the website was ADA compliant',
  'Created guides and new css styles for the front end of the website',
  'Redesigned and developed multiple webpages in order to make it easier for users to navigate',
];
const sparkyExperience = [
  'Wired Panels, outlets, lights, light switches, air conditioners, fans, emergency lighting, pumps allin a commercial building',
  'Was learning under a master electrician',
  'Did some demo work as well',
  'Worked with low voltage and high voltage',
  'Ran wire, bent conduit, installed conduit, installed boxes',
  'Learned about some of the codes in the state of Kansas',
  'Set up emergency generator lighting as well',
];
const stoneExperience = [
  'Drove coworkers to and from the jobsite (including 1, 3 hour round trip a week to bring them from town to town)',
  'Drove trailers with material/tools to the job sites ensuring that they were properly loaded and secured',
  'Processed material Orders, delivered material orders, made invoices, and bids',
  'Constantly lifted 50-80 lbs. daily',
  'Used Industrial forklifts, regular sit in forklifts, used scaffolding, used skylift, used general hand/power tools',
  "Would supervise the jobsite from time to time when the General Manager wasn’t around",
];
const tcalcExperience = [
  'Used creative cloud apps like inDesign, Illustrator, Animate, and Photoshop for many graphic design projects including making logos, editing images, creating posters and visuals',
  'Managed a number of websites using a CMS system (wordpress) around the world along with some blogs and some static websites',
  'Worked on the website design for multiple Topeka High School pages and sections. For the Design we used Illustrator, photoshop, and InDesign',
  'Used HTML CSS Bootstrap, JS, and PHP for the majority of the UI/UX Development',
  'Most of the learning was hands-on and doing major research as we built the website. We learned mainly on our own with some help from the instructor as we went on',
  'Used an FTP Client to upload files and also to manage version History',
  'Debugged pages for all of the websites',
];