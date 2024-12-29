import Image from "next/image"
import { LinkButton } from "@components/button"
import { RevealOnScroll } from "@components/ScrollTransitions";

type ProjectDetails = {
  name: string;
  imageFolder: string;
  alt: string;
  description: string,
  techStack: Array<string>;
  repo: string;
  website: string;
}[];

export function WebProjectsSection(){
  return(
  <>
    <div className="flex justify-center ">
      <h2 className="text-center">Previous Web Projects</h2>
    </div>
    <WebProjects/>
  </>
  )
}

export function WebProjects(){

  const Hello =()=>(
    projectDetails.map((item, index)=>(
      <RevealOnScroll key={`${item.name} ${index}`} className="bg-tertiary-purple text-slate-900 drop-shadow-[1px_1px_5px_#ffffff] rounded-2xl px-2 py-5 flex flex-col justify-center w-full max-w-lg md:max-w-3xl space-y-5  ">
    <div className="">
      <h3 className="text-center ">{item.name}</h3>
    </div>
    <div className="flex justify-center ">
      <div className="flex w-full max-w-lg justify-evenly items-center space-y-3 flex-col md:flex-row md:space-y-0 ">
        <div className="">
          <Image
            src={`/previous-projects/${item.imageFolder}/logo.png`}
            alt={item.alt}
            width={500}
            height={500}
            className="w-full max-w-[155px] h-auto"
          />
        </div>
        <div className="max-w-[300px] w-full">
          <p className=""> {item.description} </p>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <div className="flex flex-wrap max-w-lg justify-center">
        {
          item.techStack.map((stack, index) =>(
            <Pin key={index}>
              {stack}
            </Pin>
          ))
        }
      </div>
    </div>
    <div className="flex flex-col items-center justify-center space-y-4 md:flex-row  md:space-x-4 md:space-y-0 ">
      <LinkButton href={item.repo} className="  w-full max-w-[190px] ">
        View Github Repo
      </LinkButton>
      <LinkButton href={item.website} className="  w-full max-w-[190px]">
        Visit Website
      </LinkButton>
    </div>
      </RevealOnScroll>
    ))
  )


  return(
    <div className="flex flex-col items-center justify-center space-y-10 px-2 py-20 ">
      <Hello/>
    </div>
  )
};

export function Pin({children, bg}:any){
  let bgColor = bg;

  switch (children) {
    case 'NextJS':
      bgColor = 'bg-cyan-100';
    break;
    case 'ReactJS':
      bgColor = 'bg-orange-300'
    break;
    case 'Vercel':
      bgColor = 'bg-red-400'
    break;
    case 'Typescript':
      bgColor = 'bg-lime-300'
    break;
    case 'NodeMailer':
      bgColor = 'bg-yellow-300'
    break;
    case 'Resend':
      bgColor = 'bg-green-300'
    break;
    case 'React-Email':
      bgColor = 'bg-yellow-600'
    break;
    case 'ChakraUI':
      bgColor = 'bg-lime-600'
    break;
    case 'NextUI':
      bgColor = 'bg-lime-200'
    break;
    case 'HeadlessUI':
      bgColor = 'bg-emerald-500'
    break;
    case 'Framer-Motion':
      bgColor = 'bg-emerald-200'
    break;
    case 'PHP':
      bgColor = 'bg-sky-200'
    break;
    case 'HTML':
      bgColor = 'bg-sky-500'
    break;
    case 'CSS':
      bgColor = 'bg-indigo-200'
    break;
    case 'JS':
      bgColor = 'bg-fuchsia-500'
    break;
    case 'TailwindCSS':
      bgColor = 'bg-fuchsia-200'
    break;

    default:
      if (bgColor === undefined) {
        bgColor = 'bg-slate-200'
      }
    break;
  }

  return(
    <div className=" ml-2 mb-2">
      <p className={`py-1 px-3 ${bgColor} bg rounded-2xl`}>{children}</p>
    </div>
  )
}

const projectDetails: ProjectDetails  = [
  {
    name: 'Kansas Board of Cosmetology',
    imageFolder: 'kboc',
    alt: 'Kansas Board of Cosmetology Logo',
    description: 'A state agency in kansas that oversees all of the Cosmetology professions (manicurist, cosmetologist, esthetician, electologist), Body Art Professions (Tattoo artists, and body piercers) and Tanning Salons.',
    techStack: ['NextJS', 'ReactJS', 'TailwindCSS', 'NextUI'],
    repo: 'https://github.com/juanrios456/kboc',
    website: 'https://www.kansas.gov/kboc'
  },
  {
    name: 'Conchis Cuisine',
    imageFolder: 'conchis-cuisine',
    alt: 'A trompo on the left with a slice of cake on the right, below the image are the words Conchis Cuisine Authentic Mexican Food',
    description: 'Conchis cuisine is a food trailer in Topeka, Kansas that participates in local events and festivals.',
    techStack: ['NextJS', 'ReactJS', 'Vercel', 'ChakraUI', 'NodeMailer', 'TailwindCSS'],
    repo: 'https://github.com/juanrios456/conchiscuisine',
    website: 'https://conchiscuisine.com',
  },
  {
    name: 'Capital Stone',
    imageFolder: 'capital-stone',
    alt: 'It is a house on the left half and a hotel on the right with stucco on the walls and a small half wall of stone below the image are the words Capital Stone your stucco and stone specialists',
    description: 'Capital Stone is a local construction contractor who mainly works with stucco, stone, block, and brick. They have over 20 years of experience working with commercial and residential work.',
    techStack: ['NextJS', 'ReactJS', 'Vercel', 'ChakraUI', 'React-Email', 'Resend', 'Typescript', 'TailwindCSS' ],
    repo: 'https://github.com/juanrios456/capital-stone',
    website: 'https://capitalstonellc.com',
  },
  {
    name: "Antonio's Masonry and Stucco",
    imageFolder: 'antonio-masonry-and-stucco',
    alt: 'It is a house with stucco on the walls and a small half wall of stone below the image are the words Antonio Masonry and Stucco Quality Siding Tailored to you',
    description: 'Antonio Masonry and Stucco is a local Stucco and stone / masonry construction contractor in Topeka, Kansas.',
    techStack: ['NextJS', 'ReactJS', 'Vercel', 'Framer-Motion', 'React-Email', 'Resend', 'Typescript', 'ChakraUI', 'HeadlessUI', 'TailwindCSS'],
    repo: 'https://github.com/juanrios456/antonio-masonry',
    website: 'https://antoniomasonryandstucco.com',
  },
  {
    name: "Mission Lawn and Concrete",
    imageFolder: 'mission-lawn-and-concrete',
    alt: 'It is a circle with mountains in the middle along with the words Mission Lawn and Concrete along the edge of the circle on the inside',
    description: 'Mission Lawn and Concrete is a local Landscaping and Concrete company in Topeka Kansas who have done work with commercial and residential projects.',
    techStack: ['PHP', 'JS', 'HTML', 'CSS'],
    repo: 'https://github.com/juanrios456/missionlawnandconcrete',
    website: 'https://missionlawnandconcrete.com',
  },
];