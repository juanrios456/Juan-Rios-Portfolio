import Link from "next/link"

export function IndexBody() {
  return(
    <div className="w-full h-full py-10 px-2 bg-white/[.30]">
      <h2 className="text-center pb-6 ">Experience</h2>
      <div className="flex flex-col items-center justify-center ">
        <div className="w-full max-w-6xl rounded-xl py-6 px-4 bg-slate-300 ">
          <div>
            <h3 className="pb-3">Web Development</h3>
            <div className="pl-4">
              <p className="mt-2">Websites can be a very important platform for any business, club, or person if it is made right and tailored to fit the need that suits it best, it can range from being a informational site, to a giant eCommerce platform. They can be made in various ways, either using plain code, a web framework, a CMS system. And they all have their advantages. {/*<Link href={'/'} className="text-blue-500" >Learn More about What Kind of Website You May Need.</Link>*/}</p>
              <p>I have been making websites for over 5 years, starting from basic HTML and CSS, and CMS systems like wordpress, to using web Frameworks like ReactJS, NextJS, and Vue. Below you are able to see the complete list of experience that I have.</p>
              <div className="py-3">
                <h4 className="pt-3">Programming / Coding Languages</h4>
                <ul className="list-disc pl-6">
                  <li>HTML - 5+ Years</li>
                  <li>CSS - 5+ Years</li>
                  <li>JavaScript - 5+ Years</li>
                  <li>TypeScript - 3+ Years</li>
                  <li>PHP - 3+ Years</li>
                  <li>MySQL - 2+ Years</li>
                </ul>
                <h4 className="pt-3">Web Frameworks</h4>
                <ul className="list-disc pl-6">
                  <li>ReactJS - 3+ Years</li>
                  <li>NextJS - 3+ Years</li>
                  <li>VueJS - 2+ Years</li>
                  <li>Laravel - 2+ Years</li>
                </ul>
                <h4 className="pt-3">CMS(Content Management Systems)</h4>
                <ul>
                  <li>WordPress - 3+ Years</li>
                  <li>Wix - 2+ Years</li>
                  <li>SquareSpace - 2+ Years</li>
                  <li>Global Reach - 1 Year </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="pt-6">
            <h3 className="pb-3">Graphic Design / Web Design</h3>
            <div className="pl-4">
              <p className="mt-2">Graphic design is a very important part of web development, as it is the first thing that people see when they visit your website. It is important to have a good design that is easy to navigate and looks good on all devices. I have been doing graphic design for over 5 years, and I have experience in various design tools.</p>
              <div className="py-3">
                <h4 className="pt-3">Design Tools</h4>
                <ul className="list-disc pl-6">
                  <li>Adobe Photoshop - 5+ Years</li>
                  <li>Adobe Illustrator - 5+ Years</li>
                  <li>Adobe XD - 3+ Years</li>
                  <li>Figma - 3+ Years</li>
                  <li>Canva - 3+ Years</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

//export function 