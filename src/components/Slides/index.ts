import { Slide } from './screens/types'
import { AboutMe } from './screens/AboutMe'
import { LoremIsp, LoremIspTwo } from './screens/LoremIps'

export const SlideLookup: Record<Slide, React.FC<{}>> ={
    AboutMe: AboutMe,
    Page2: LoremIsp,
    Page3: LoremIspTwo,
} 
