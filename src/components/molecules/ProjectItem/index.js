import React from 'react'
import { object, string } from 'prop-types'
import { Link } from 'gatsby'
import { BrowserWindow } from '../BrowserWindow'

const DemoLink = ({ project }) => {
  if (!project.link) return null

  return (
    <a
      href={project.link}
      className="button button-solid"
      target="_blank"
      rel="noreferrer"
    >
      demo
    </a>
  )
}
export const ProjectItem = ({ project, className }) => {
  const image = require('../../../assets/images/' + project.images[0].image)
  return (
    <article className={`project-item ${className}`}>
      <div>
        <BrowserWindow link={project.link}>
          <img
            src={image}
            style={{ width: '510px', height: 'auto' }}
            alt={project.title}
          />
        </BrowserWindow>
      </div>
      <div>
        <h3>{project.title}</h3>
        <h4>{project.subtitle}</h4>

        <ul>
          {project.technologies.map((tec, index) => (
            <li key={index}>{tec}</li>
          ))}
        </ul>
        <p>
          <DemoLink project={project} />
          {/*<Link to={`/portfolio/${project.slug}`} className="button">*/}
          {/*  view more*/}
          {/*</Link>*/}
        </p>
      </div>
    </article>
  )
}

ProjectItem.propTypes = {
  project: object.isRequired,
  className: string,
}

ProjectItem.defaultProps = {
  className: '',
}
