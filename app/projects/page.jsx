import Heading from '@/components/Heading'
import Project from '@/components/ProjectsComponents/Project'

const page = () => {
  let project1 = { name:'Western Shooter', 
                  description:['This was my end-year project in 9th grade. It’s an arcade top-down shooter, where you play as a hero who kills monsters in desert. The goal of the game is to survive as long as you can. After death you can spend earned points in shop to buy weapons and skins.', 'This project helped me to understand the importance and usage of OOP. In addition, I tried myself in pixel art and drew every sprite for the game.'], 
                  tools_used:['python','pygame', 'aseprite'], 
                  links:[['itch','https://vladplayswatch.itch.io/western-shooter'], ['github', 'https://github.com/Joykeeper/western-shooter']]
                }
  let project2 = { name:'My Website', 
                description:['Well, here you are) The main idea of this website was to be my portfolio. But at the time I thought of it I also wanted to start blogging, so that’s why it contains not only my projects and “About me” page, but also a blogging section. I plan to improve on this project as I progress, so you will find new sections on the website in the near future.'], 
                tools_used:['react','next', 'firebase', 'vercel', 'figma'], 
                links:[['github', 'https://github.com/Joykeeper/My-Website']]
              }
  return (
    <div>
        <Heading big_words={'Projects'} small_words={'The things I have made'}/>
        <Project project={project1} />
        <Project project={project2} even={true}/>
        <Project project={project1}/>
        <Project project={project2} even={true}/>
    </div>
  )
}

export default page