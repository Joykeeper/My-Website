
import Heading from "@/components/Heading"
import AboutMeContentComponent from "@/components/AboutMeComponents/AboutMeContentComponent"


const page = () => {
  return (
    <div>
        <Heading big_words={'Knowledge is power'} small_words={'Sir Francis Bacon'}/>
        <AboutMeContentComponent/>
    </div>
  )
}

export default page