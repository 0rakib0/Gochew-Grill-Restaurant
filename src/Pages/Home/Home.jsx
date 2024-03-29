import About from "./About"
import Banner from "./Banner"
import Category from "./Category"
import Contact from "./Comtact"
import FromOurMenu from "./FromOurMenu"
import PopularMenu from "./PopularMenu"
import Recomend from "./Recomend"
import Testmonials from "./Testmonials"

const Home = () =>{
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Recomend></Recomend>
            <FromOurMenu></FromOurMenu>
            <Contact></Contact>
            <Testmonials></Testmonials>
        </div>
    )
}


export default Home