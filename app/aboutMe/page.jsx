import LeftTextRightPhoto from "@/components/AboutMeComponents/LeftTextRightPhoto"
import RightTextLeftPhoto from "@/components/AboutMeComponents/RightTextLeftPhoto"
import TextBasedComponent from "@/components/AboutMeComponents/TextBasedComponent"
import Heading from "@/components/Heading"


const page = () => {
  const lorem_ipsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  return (
    <div>
        <Heading big_words={'Knowledge is power'} small_words={'Sir Francis Bacon'}/>
        <TextBasedComponent />
        <LeftTextRightPhoto heading={'projects'} text={lorem_ipsum} ph_width={575} ph_height={501}/>
        <RightTextLeftPhoto heading={'blog'} text={lorem_ipsum} ph_width={563} ph_height={459}/>
        <LeftTextRightPhoto heading={'newsletters'} text={lorem_ipsum} ph_width={591} ph_height={555}/>
    </div>
  )
}

export default page