const MenuItems = ({item}) =>{
    const {name, recipe, image, price} = item
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}

export default MenuItems