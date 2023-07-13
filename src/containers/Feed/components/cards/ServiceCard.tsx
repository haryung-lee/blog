import { CONFIG } from "site.config"
import React from "react"
import { AiOutlineLink } from "react-icons/ai"

const ServiceCard: React.FC = () => {
  if (!CONFIG.projects) return null
  return (
    <>
      <div className="p-1 mb-3 dark:text-white">🌟 Service</div>
      <ul className="flex flex-col p-1 bg-white rounded-2xl mb-9 dark:bg-zinc-700">
        {CONFIG.projects.map((project, index) => {
          return (
            <a
              key={project.name}
              href={`${project.href}`}
              rel="noreferrer"
              target="_blank"
              className="flex items-center gap-3 p-3 text-gray-500 cursor-pointer hover:underline hover:underline-offset-2 rounded-2xl dark:text-white hover:text-black dark:hover:text-white"
            >
              <AiOutlineLink className="text-2xl" />
              <div className="text-sm">{project.name}</div>
            </a>
          )
        })}
      </ul>
    </>
  )
}

export default ServiceCard
