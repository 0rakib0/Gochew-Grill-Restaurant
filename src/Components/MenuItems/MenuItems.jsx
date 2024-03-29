const MenuItems = ({ item }) => {
    const { name, recipe, image, price } = item
    return (
        
            <div className="flex gap-x-2 bg-white m-2 border border-orange-400 lg:border-white hover:border-orange-400 duration-300">
                <div className="lg:w-[31rem] overflow-hidden mt-2 ml-2 mb-2">
                    <img src={image} className="rounded-lg" alt="image not found" />
                </div>
                <div>
                    <h4 className="text-2xl font-semibold">{name}</h4>
                    <p>{recipe}</p>
                    <button className="bg-orange-400 px-3 py-1 mt-2 text-white rounded-lg border border-orange-400 hover:bg-transparent hover:text-black duration-300 mb-2">Order Now</button>
                </div>
                <div className="pr-2 pt-2">
                    <p className="text-xl font-bold text-orange-400">${price}</p>
                </div>
            </div>
       
    )
}

export default MenuItems