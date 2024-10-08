import About from "./about/page"

import Main from "./components/Main"
import Services from "./services/page"
import Contact from "./contact/page"

import Homedelivery from "./services/homedelivery/page"


export default function Home(){
  return(
    <div>
     
     <Main />
     <About />
     <Homedelivery />
     <Services />
     <Contact />
     
    </div>

  )
}
