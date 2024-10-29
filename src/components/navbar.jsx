import { FiSend } from "react-icons/fi";

export default function NavBar() {
  return (
    <div className="w-screen p-5 absolute">
      <div className="flex items-center justify-between">
        <div className="flex gap-5 items-center text-lg">
          <a href="google.com">
            <p className="text-xl italic">Adithya</p>
          </a>
          <a href="google.com">
            <p>Skills</p>
          </a>
          <a href="google.com">
            <p>Projects</p>
          </a>
          <a href="google.com">
            <p>Contact me</p>
          </a>
        </div>
        <div className="text-lg">
          <a
            href="Resume"
            className="flex gap-2 items-center"
          >
            <FiSend />
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  );
}
