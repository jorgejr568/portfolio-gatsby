import React from 'react'
import useExperiences from '../../../hooks/experiences'

function ExperienceDate({ experience }) {
  if (experience.started_at === experience.finished_at) {
    return <h4>{experience.started_at}</h4>
  }

  return (
    <h4>
      {experience.started_at} - {experience.finished_at ?? 'currently'}
    </h4>
  )
}
function ExperienceSection() {
  const experiences = useExperiences()

  return (
    <section id="experience">
      <h2>experience.</h2>

      <ul>
        {experiences.map(experience => (
          <li key={experience.id}>
            <h3>{experience.title.toLowerCase()}</h3>
            <a
              href={experience.company_url}
              target="_blank"
              rel="noreferrer"
              className={'dark'}
            >
              {experience.company_name.toLowerCase()}
            </a>
            <ExperienceDate experience={experience} />

            <p>{experience.description}</p>

            <ul>
              <li>
                languages: <strong>{experience.languages.join(', ')}</strong>
              </li>
              {experience.frameworks.length ? (
                <li>
                  frameworks:{' '}
                  <strong>{experience.frameworks.join(', ')}</strong>
                </li>
              ) : (
                ''
              )}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ExperienceSection
