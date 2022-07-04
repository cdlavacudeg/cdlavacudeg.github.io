import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ReactTooltip from 'react-tooltip'

import { AppWrap, MotionWrap } from '../../wrapper'
import { images } from '../../constants'
import './Skills.scss'

interface SkillItem {
  name: string
  bgColor: string
  icon: string
}

interface workExperience {
  name: string
  company: string
  desc: string
}

interface ExperienceItem {
  year: string
  works: workExperience[]
}

const skillsList: SkillItem[] = [
  {
    name: 'MongoDB',
    bgColor: 'var(--primary-color)',
    icon: images.mongo,
  },
  {
    name: 'Express',
    bgColor: 'var(--primary-color)',
    icon: images.express,
  },
  {
    name: 'React',
    bgColor: 'var(--primary-color)',
    icon: images.react,
  },
  {
    name: 'NodeJs',
    bgColor: 'var(--primary-color)',
    icon: images.node,
  },
  {
    name: 'git',
    bgColor: 'var(--primary-color)',
    icon: images.git,
  },
  {
    name: 'Rest API',
    bgColor: 'var(--primary-color)',
    icon: images.api,
  },
  {
    name: 'Typescript',
    bgColor: 'var(--primary-color)',
    icon: images.typescript,
  },
  {
    name: 'Sass',
    bgColor: 'var(--primary-color)',
    icon: images.sass,
  },
  {
    name: 'Redux',
    bgColor: 'var(--primary-color)',
    icon: images.redux,
  },
  {
    name: 'Python',
    bgColor: 'var(--primary-color)',
    icon: images.python,
  },
]

const experienceList: ExperienceItem[] = [
  {
    year: '2022',
    works: [
      {
        name: 'Backend Developer',
        company: 'NoCountry',
        desc: 'Backend developer of an educatinal platform',
      },
      {
        name: 'Seft-taught wed developer',
        company: 'Cdlavacudeg',
        desc: '1 year selft-taught web developer',
      },
    ],
  },
]

const Skills: React.FC = () => {
  const [experiences, setExperiences] = useState<ExperienceItem[]>([])
  const [skills, setSkills] = useState<SkillItem[]>([])
  const [tooltip, showTooltip] = useState<boolean>(true)

  useEffect(() => {
    setExperiences(experienceList)
    setSkills(skillsList)
  }, [])

  return (
    <div id='skills' className='app__skills'>
      <h2 className='head-text'>Skills & Experiences</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map((skill, index) => {
            return (
              <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className='app__skills-item app__flex'
                key={index}
              >
                <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                  <img src={skill.icon} alt={skill.name} />
                </div>
                <p className='p-text'>{skill.name}</p>
              </motion.div>
            )
          })}
        </motion.div>

        <div className='app__skills-exp'>
          {experiences.map((exp, index) => (
            <motion.div className='app__skills-exp-item' key={index}>
              <div className='app__skills-exp-year'>
                <p className='bold-text'>{exp.year}</p>
              </div>

              <motion.div className='app__skills-exp-works'>
                {exp.works.map((work, index) => (
                  <React.Fragment key={index}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className='app__skills-exp-w<F12><F12>ork'
                      data-tip=''
                      data-for={`${work.name}${index}`}
                      onMouseEnter={() => showTooltip(true)}
                      onMouseLeave={() => {
                        showTooltip(false)
                        setTimeout(() => showTooltip(true), 0.01)
                      }}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                    </motion.div>
                    {tooltip && (
                      <ReactTooltip
                        id={`${work.name}${index}`}
                        effect='solid'
                        arrowColor='#fff'
                        className='skills-tooltip'
                      >
                        {work.desc}
                      </ReactTooltip>
                    )}{' '}
                  </React.Fragment>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AppWrap(MotionWrap(Skills), 'skills', 'app__whitebg')
