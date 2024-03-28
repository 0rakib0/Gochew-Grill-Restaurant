const SectionTitle = ({heading, SubHeading}) =>{
    return (
        <div className="mt-20 mb-8 text-center md:w-4/12 mx-auto">
            <p className="text-yellow-500 italic">--- {SubHeading} ---</p>
            <h4 className="border-y border-yellow-500 my-4 py-2 text-4xl font-semibold">{heading}</h4>
        </div>
    )
}

export default SectionTitle