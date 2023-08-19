import Heading from '@/components/Heading'
import styles from './projects.module.css'

import Project from '@/components/ProjectsComponents/Project'

const page = () => {
  return (
    <div>
        <Heading big_words={'Projects'} small_words={'The things I have made'}/>
        <Project name={'Project 1'} text={''}/>
        <Project name={'Project 2'} text={''} even={true}/>
        <Project name={'Project 3'} text={''}/>
        <Project name={'Project 4'} text={''} even={true}/>
    </div>
  )
}

export default page