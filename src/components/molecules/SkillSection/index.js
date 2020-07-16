import React from "react"
import useSkills from "../../../hooks/skills"

function SkillSection() {
  const skills = useSkills()

  return (
    <section id={'skills'}>
      <h2>skills.</h2>
      <ul>
        {
          skills
            .map(skillGroup => {
              const categoryName = skillGroup[0].category_name;

              return (
                <li key={categoryName}>
                  <h3>{categoryName.toLowerCase()}.</h3>

                  <ul>
                    {
                      skillGroup
                        .map(skill => (
                          <li key={skill.title}>
                            <h4>{skill.title.toLowerCase()}</h4>
                            <div className="progress">
                              <div
                                className="progress-bar"
                                title={skill.level+'/5'}
                                style={{'width': skill.level * 20+'%'  }}/>
                            </div>
                          </li>
                        ))
                    }
                  </ul>
                </li>
              );
            })
        }
      </ul>
    </section>
  )
}

export default SkillSection
