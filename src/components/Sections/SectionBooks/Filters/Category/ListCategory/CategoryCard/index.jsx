export const CategoryCard = ({category, setCategory}) => {
    return(
        <li>
            <button 
            className='parapraph' 
            onClick={() => setCategory(category.name)}>
                {category.name}
            </button>
        </li>
    )
}