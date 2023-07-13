import { CONFIG } from "site.config"
import React from "react"
import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiOutlineMail,
  AiFillLinkedin,
} from "react-icons/ai"

const ContactCard: React.FC = () => {
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">💬 Contact</div>
      <ul className="flex flex-col p-1 bg-white rounded-2xl dark:bg-zinc-700">
        {CONFIG.profile.github && (
          <a
            href={`https://github.com/${CONFIG.profile.github}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 p-3 text-gray-500 cursor-pointer hover:underline hover:underline-offset-2 rounded-2xl dark:text-white hover:text-black dark:hover:text-white "
          >
            <AiOutlineGithub className="text-2xl" />
            <div className="text-sm">github</div>
          </a>
        )}
        {CONFIG.profile.instagram && (
          <a
            href={`https://www.instagram.com/${CONFIG.profile.instagram}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 p-3 text-gray-500 cursor-pointer hover:underline hover:underline-offset-2 rounded-2xl dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineInstagram className="text-2xl" />
            <div className="text-sm">instagram</div>
          </a>
        )}
        {CONFIG.profile.email && (
          <a
            href={`mailto:${CONFIG.profile.email}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 p-3 overflow-hidden text-gray-500 cursor-pointer hover:underline hover:underline-offset-2 rounded-2xl dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiOutlineMail className="flex-shrink-0 text-2xl" />
            <div className="text-sm">email</div>
          </a>
        )}
        {CONFIG.profile.linkedin && (
          <a
            href={`https://www.linkedin.com/in/${CONFIG.profile.linkedin}`}
            rel="noreferrer"
            target="_blank"
            className="flex items-center gap-3 p-3 overflow-hidden text-gray-500 cursor-pointer hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-2xl dark:text-white hover:text-black dark:hover:text-white"
          >
            <AiFillLinkedin className="flex-shrink-0 text-2xl" />
            <div className="text-sm">linkedin</div>
          </a>
        )}
      </ul>
    </>
  )
}

export default ContactCard
