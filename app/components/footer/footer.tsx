import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
export default function Footer() {
  return (
    <>
    <div className="mb-32 flex flex-row  w-full text-center justify-center lg:mx-auto lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 ">
      <a
        href="https://github.com/Goat8"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold `} >
          <FaGithub />
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </a>

      <a
        href="https://www.linkedin.com/in/maria-rafique-8343809a/"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`} >
          <FaLinkedin style={{ color: '#0072b1' }}/>
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </a>

      <a
        href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        target="_blank"
        rel="noopener noreferrer"
      >
        <h2 className={`mb-3 text-2xl font-semibold`}>
          <FaTwitter  style={{ color: '#00acee' }} />
        </h2>
        <p className={`m-0 max-w-[30ch] text-sm opacity-50`}></p>
      </a>
    </div>
    <div className="text-center py-1">
    &copy; {new Date().getFullYear()}
  </div>
  </>
  );
}
