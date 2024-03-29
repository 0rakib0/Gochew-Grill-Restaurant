import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import image from '../../assets/home/featured.jpg'
import './home.css'
const FromOurMenu = () =>{
    return (
        <div className="from-our-menu text-white pb-12 bg-fixed p-2 md:pl-6">
            <SectionTitle
            SubHeading={'Check It Out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div className="flex md:flex-row flex-col items-center gap-x-6">
                <div className="md:w-6/12">
                    <img src={image} alt="image not found" />
                </div>
                <div className="md:w-5/12">
                    <p>March 20, 2023</p>
                    <h4 className="text-xl">WHERE CAN I GET SOME?</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem veniam a maxime obcaecati saepe minima fugit maiores labore unde est?</p>

                    <button className="bg-orange-400 px-3 py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent duration-300 mb-2">Red More</button>
                </div>
            </div>
        </div>
    )
}

export default FromOurMenu