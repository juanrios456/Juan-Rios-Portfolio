import Image from "next/image"
import { LinkButton } from "@components/button"

type ProjectDetails = {
  name: string;
  imageFolder: string;
  alt: string;
  description: string
  repo: string;
  website: string;
}[];

const projectDetails: ProjectDetails  = [
  {
    name: 'Conchis Cuisine',
    imageFolder: 'conchis-cuisine',
    alt: 'A trompo on the left with a slice of cake on the right, below the image are the words Conchis Cuisine Authentic Mexican Food',
    description: 'Conchis cuisine is a food trailer in Topeka, Kansas that participates in local events and festivals..',
    repo: 'https://github.com/juanrios456/conchiscuisine',
    website: 'https://conchiscuisine.com',
  },
  {
    name: 'Capital Stone',
    imageFolder: 'capital-stone',
    alt: 'It is a house on the left half and a hotel on the right with stucco on the walls and a small half wall of stone below the image are the words Capital Stone your stucco and stone specialists',
    description: 'Capital Stone is a local construction contractor who mainly works with stucco, stone, block, and brick. They have over 20 years of experience working with commercial and residential work.',
    repo: 'https://github.com/juanrios456/capital-stone',
    website: 'https://capitalstonellc.com',
  },
  {
    name: "Antonio's Masonry and Stucco",
    imageFolder: 'antonio-masonry-and-stucco',
    alt: 'It is a house with stucco on the walls and a small half wall of stone below the image are the words Antonio Masonry and Stucco Quality Siding Tailored to you',
    description: 'Antonio Masonry and Stucco is a local Stucco and stone / masonry construction contractor in Topeka, Kansas.',
    repo: 'https://github.com/juanrios456/antonio-masonry',
    website: 'https://antoniomasonryandstucco.com',
  },
  {
    name: "Mission Lawn and Concrete",
    imageFolder: 'mission-lawn-and-concrete',
    alt: 'It is a circle with mountains in the middle along with the words Mission Lawn and Concrete along the edge of the circle on the inside.',
    description: 'Mission Lawn and Concrete is a local Landscaping and Concrete company in Topeka Kansas who have done work with commercial and residential projects.',
    repo: 'https://github.com/juanrios456/missionlawnandconcrete',
    website: 'https://missionlawnandconcrete.com',
  },
];


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
  return(
    <div className="flex flex-col items-center justify-center space-y-10 px-2 py-20 ">
      {
        projectDetails.map((item, index)=>(
      <div key={`${item.name} ${index}`} className="bg-[#E7DDF4] text-slate-900 drop-shadow-[1px_1px_5px_#ffffff] rounded-2xl px-2 py-5 flex flex-col justify-center w-full max-w-3xl space-y-5  ">
        <div className="">
          <h3 className="text-center ">{item.name}</h3>
        </div>
        <div className="flex justify-center ">
          <div className="flex w-full max-w-[600px] justify-evenly items-center space-y-3 flex-col md:flex-row md:space-y-0 ">
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
        <div className="flex flex-col items-center justify-center space-y-4 md:flex-row  md:space-x-4 md:space-y-0 ">
          <LinkButton href={item.repo} className=" hover:bg-secondary-purple hover:text-white w-ful max-w-[190px] ">
            View Github Repo
          </LinkButton>
          <LinkButton href={item.website} className=" hover:bg-secondary-purple hover:text-white w-full max-w-[190px]">
            Visit Website
          </LinkButton>
        </div>
      </div>
        ))
      }
    </div>
  )
};