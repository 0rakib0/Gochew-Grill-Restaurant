import SectionTitle from '../../Components/SectionTitle/SectionTitle';
import Lottie from "lottie-react";
import animation from '../../../public/contactAnimation.json'
const Contact = () => {
    return (
        <div>
            <SectionTitle
                SubHeading={'Contact Us'}
                heading={'ASK IF ANY QUERY'}
            ></SectionTitle>
            <div className='flex gap-6'>
                <div className='md:w-6/12'>
                    <Lottie animationData={animation} loop={true} />
                </div>
                <div className='md:w-6/12 bg-white p-4'>
                    <form>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Full Name</span>
                            </div>
                            <input type="text" placeholder="Full Name" className="input border border-orange-400 w-full focus:outline-orange-400" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Email</span>
                            </div>
                            <input type="email" placeholder="Email Address" className="input border border-orange-400 w-full focus:outline-orange-400" />
                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Message</span>
                            </div>
                        <textarea className="border border-orange-400 w-full p-2 focus:outline-orange-400" name="" id="" cols="30" rows="10" placeholder='Message'></textarea>
                        </label>
                        <button className="bg-orange-400 w-full py-2 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent duration-300 mb-2 hover:text-black">Red More</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact