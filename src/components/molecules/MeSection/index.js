import React from "react"
import {FaFile, FaGithub, FaLinkedinIn} from "react-icons/all";
import useCurriculumLink from "../../../hooks/links/curriculum"
import useGithubLink from "../../../hooks/links/github"
import useLinkedinLink from "../../../hooks/links/linkedin"
import ProfileImage from "../../atoms/ProfileImage"

function MeSection () {
  const curriculumLink = useCurriculumLink()
  const githubLink = useGithubLink()
  const linkedinLink = useLinkedinLink()

  return (
    <section id={'presentation'}>
      <div id="profileImage">
        <ProfileImage />
      </div>

      <article>
        <p>
          I am a full-stack developer with more than 5 years of experience in web development and
          infrastructure. I worked in many applications using PHP as the main technology, but I am always
          willing and in fact even more motivated to work with other languages. I have solid knowledge in
          functional programming, OOP, DevOps, PHP and Javascript (Vue and React). I am interested in
          learning
          technologies, best development practices, TDD and multi-platform development.
        </p>

        <p id={'presentationLinks'}>
          <a
            href={linkedinLink}
            target={'_blank'}
            rel="noopener noreferrer"
            title={'Linkedin'}>
            <FaLinkedinIn size={18}/>
          </a>

          <a
            href={githubLink}
            target={'_blank'}
            rel="noopener noreferrer"
            title={'Github'}>
            <FaGithub size={18}/>
          </a>

          <a
            href={curriculumLink}
            target={'_blank'}
            rel="noopener noreferrer"
            title={'Download my curriculum'}>
            <FaFile size={18}/>
          </a>
        </p>
      </article>
    </section>
  )
}

export default MeSection
