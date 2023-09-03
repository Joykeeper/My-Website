import Heading from '@/components/Heading'
import Project from '@/components/ProjectsComponents/Project'

const page = () => {
  let project = { name:'Project1', 
                  description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
                  tools_used:['mongo','express', 'js', 'react'], 
                  links:['itch', 'github']};
  return (
    <div>
        <Heading big_words={'Projects'} small_words={'The things I have made'}/>
        <Project project={project} />
        <Project project={project} even={true}/>
        <Project project={project}/>
        <Project project={project} even={true}/>
    </div>
  )
}

export default page