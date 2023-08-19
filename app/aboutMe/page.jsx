import LeftTextRightPhoto from "@/components/AboutMeComponents/LeftTextRightPhoto"
import RightTextLeftPhoto from "@/components/AboutMeComponents/RightTextLeftPhoto"
import TextBasedComponent from "@/components/AboutMeComponents/TextBasedComponent"
import Heading from "@/components/Heading"


const page = () => {
  return (
    <div>
        <Heading />
        <TextBasedComponent />
        <LeftTextRightPhoto />
        <RightTextLeftPhoto />
        <LeftTextRightPhoto />
    </div>
  )
}

export default page