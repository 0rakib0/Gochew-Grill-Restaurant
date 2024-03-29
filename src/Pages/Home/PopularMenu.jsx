import { useEffect, useState } from "react"
import SectionTitle from "../../Components/SectionTitle/SectionTitle"
import MenuItems from "../../Components/MenuItems/MenuItems"

const PopularMenu = () =>{

    const [menus, setMenus] = useState([])

    useEffect(() =>{
        fetch('menu.json')
        .then(res => res.json())
        .then(data =>{
            const popularItem = data.filter(item => item.category === 'popular')
            setMenus(popularItem)
        })
    }, [])

    console.log(menus)

    return (
        <div>
            <SectionTitle
            SubHeading={'Check it out'}
            heading={'FROM OUR MENU'}
            ></SectionTitle>
            <div>
                {
                    menus?.map(item =><MenuItems key={item._id} item={item}></MenuItems>)
                }
            </div>
        </div>
    )
}

export default PopularMenu