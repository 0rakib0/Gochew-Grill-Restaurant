import About from "./About"
import Banner from "./Banner"
import Category from "./Category"
import FromOurMenu from "./FromOurMenu"
import PopularMenu from "./PopularMenu"
import Recomend from "./Recomend"

const Home = () =>{
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <About></About>
            <PopularMenu></PopularMenu>
            <Recomend></Recomend>
            <FromOurMenu></FromOurMenu>
        </div>
    )
}


export default Home