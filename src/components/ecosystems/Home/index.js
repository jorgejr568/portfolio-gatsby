import React from 'react'
import Layout from '../../environments/Layout'
import MeSection from '../../molecules/MeSection'
import './style.scss'
import './mobile.scss'
import SEO from '../../atoms/SEO'
import ExperienceSection from '../../molecules/ExperienceSection'
import EducationSection from '../../molecules/EducationSection'
import SkillSection from '../../molecules/SkillSection'
import ContactForm from '../../molecules/ContactForm'

function Home() {
  return (
    <Layout>
      <SEO title="Jorge Junior - Portfolio" />
      <main id="homePage">
        <MeSection />
        <ExperienceSection />
        <EducationSection />
        <SkillSection />
        <ContactForm />
      </main>
    </Layout>
  )
}

export default Home
