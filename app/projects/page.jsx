import Heading from '@/components/Heading'
import Project from '@/components/ProjectsComponents/Project'

const page = () => {
  let project = { name:'Western Shooter', 
                  description:['This was my end-year project in 9th grade. It’s an arcade top-down shooter, where you play as a hero who kills monsters in desert. The goal of the game is to survive as long as you can. After death you can spend earned points in shop to buy weapons and skins.', 'This project helped me to understand the importance and usage of OOP. In addition, I tried myself in pixel art and drew every sprite for the game.'], 
                  tools_used:['python','pygame', 'aseprite'], 
                  links:[['itch','https://vladplayswatch.itch.io/western-shooter']]
                }
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