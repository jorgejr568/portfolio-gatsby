import React from "react"
import useEducations from "../../../hooks/educations"

function EducationSection() {
  const educations = useEducations();

  return (
    <section id='education'>
      <h2>education.</h2>

      <ul>
        {
          educations
            .map(education => {
              let institutionButton = (
                <h4 className='dark'>
                  {education.institution_name.toLowerCase()}
                </h4>
              );

              if(education.institution_url)
                institutionButton = (
                  <a
                    href={education.institution_url}
                    className='dark'
                    rel="noopener noreferrer"
                    target={'_blank'}>
                    {education.institution_name.toLowerCase()}
                  </a>
                );

              return (
                <li key={education.title.toLowerCase()}>
                  <h3>{education.title.toLowerCase()}</h3>
                  {institutionButton}

                  <h4>{education.started_at} - {education.finished_at ?? 'currently'}</h4>
                </li>
              )
            })
        }
      </ul>
    </section>
  )
}

export default EducationSection
