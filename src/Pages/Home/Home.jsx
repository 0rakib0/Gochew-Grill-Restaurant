import About from "./About"
import Banner from "./Banner"
import Category from "./Category"
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
        </div>
    )
}


export default Home