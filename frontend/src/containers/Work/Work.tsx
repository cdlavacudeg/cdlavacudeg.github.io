import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Work.scss'

const filters: string[] = ['Backend', 'Frontend','Fullstack','MERN', 'All']
interface WorkItem {
  title: string
  description: string
  name: string
  tags: string[]
  imgUrl: string
  projectLink: string
  codeLink: string
}

const portfolioItems: WorkItem[] = [
  {
    title: 'Interact App',
    description:
      'Educatinal administration platform created for NoCountry',
    name: 'Backend Interact',
    tags: ['Fullstack', 'Backend','MERN', 'Fullstack'],
    imgUrl: images.interact,
    projectLink: 'https://interact-chi.vercel.app/',
    codeLink: 'https://github.com/No-Country/C5-31',
  },
  {
    title: 'Lavcode App',
    description: 'Personal Blog template project using Django',
    name: 'Lavcode Blog',
    tags: ['Fullstack'],
    imgUrl: images.lavcode,
    projectLink: 'https://crislav10.pythonanywhere.com/',
    codeLink: 'https://github.com/cdlavacudeg/Blog_LavCode',
  },
]

const Work: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState<WorkItem[]>([])
  const [filterWork, setFilterWork] = useState<WorkItem[]>([])

  useEffect(() => {
    setWorks(portfolioItems)
    setFilterWork(portfolioItems)
  }, [])

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item)
    setAnimateCard({ y: 100, opacity: 0 })

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })

      if (item === 'All') {
        setFilterWork(works)
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500)
  }
  return (
    <div id='work' className='app__work app__flex'>
      <h2 className='head-text'>
        My Work <span>Portfolio</span> Section
      </h2>

      <div className='app__work-filter'>
        {filters.map((filter, index) => {
          return (
            <div
              key={index}
              onClick={() => handleWorkFilter(filter)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === filter ? 'item-active' : ''
              }`}
            >
              {filter}
            </div>
          )
        })}
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className='app__work-portfolio'
      >
        {filterWork.map((work, index) => {
          return (
            <div className='app__work-item app__flex' key={index}>
              <div className='app__work-img app__flex'>
                <img src={work.imgUrl} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a href={work.codeLink} target='_blank' rel='noreferrer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default AppWrap(MotionWrap(Work), 'work', 'app__primarybg')
