import "./App.css";
import Contact from "./components/contact";
import NavBar from "./components/navbar";
import ProjectCard from "./components/projectcard";
import SkillCard from "./components/skillcard";

function App() {
  const frontend = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "TypeScript",
    "TailwindCSS",
  ];
  const backend = ["Express", "Monogdb", "Node", "FireBase", "AppWrite"];
  const os = ["Linux", "Windows"];

  return (
    <div>
      <NavBar />
      <div>
        <div className="p-10 h-screen flex flex-col justify-center">
          <div className="pb-10">
            <p className="text-4xl">
              Hi, I am <span>Adithya</span>
            </p>
          </div>
          <div className="text-2xl">
            <p>
              I am someone who love to{" "}
              <span className="italic text-violet-400 underline">code</span> and{" "}
              <br /> build things on the internet
            </p>
          </div>
          <div className="flex flex-col items-center absolute bottom-5 left-0 right-0 mx-auto">
            <div className="border-2 border-gray-500 p-2 rounded-md hover:bg-gray-600 hover:cursor-pointer">
              <p>
                <a href="#contact">Connect with me</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-10">
        <p className="text-center text-4xl text-cyan-400">Projects</p>
        <div
          className="grid grid-cols-3 w-full gap-10 pt-10"
          id="project"
        >
          <ProjectCard
            title="E-Commerce"
            desc="A website to faciliate shopping built using NextJS"
            image="/ecommerce.png"
          />
          <ProjectCard
            title="Meditation App"
            desc="An app to help you in meditating built using expo"
            image="/meditation.jpeg"
          />
          <ProjectCard
            title="Discord Bot"
            desc="A simple discord bot built using Python and Discord.py"
            image="/discord.png"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center text-4xl text-cyan-400 p-10">Skills</p>
        <div className="grid grid-cols-3 w-full">
          <SkillCard
            skillset={frontend}
            title="FrontEnd"
          />
          <SkillCard
            skillset={backend}
            title="BackEnd"
          />
          <SkillCard
            skillset={os}
            title="OS"
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-center text-4xl text-cyan-400 p-10">Contact</p>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
