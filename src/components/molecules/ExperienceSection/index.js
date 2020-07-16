import React from "react"
import useExperiences from "../../../hooks/experiences"

function ExperienceSection () {
  const experiences = useExperiences();

  return (
    <section id="experience">
      <h2>experience.</h2>

      <ul>
        {
          experiences
            .map(experience => (
              <li key={experience.id}>
                <h3>{experience.title.toLowerCase()}</h3>
                <h4 className={'dark'}>{experience.company_name.toLowerCase()}</h4>
                <h4>{experience.started_at} - {experience.finished_at ?? 'currently'}</h4>

                <p>
                  {experience.description}
                </p>

                <ul>
                  <li>languages: <strong>{experience.languages.join(', ')}</strong></li>
                  {
                    experience.frameworks.length
                      ? (<li>frameworks: <strong>{experience.frameworks.join(', ')}</strong></li>)
                      : ''
                  }
                </ul>
              </li>
            ))
        }
      </ul>
    </section>
  )
}

export default ExperienceSection
