import { categories } from '../../../../../../data/category'
import { CategoryCard } from './CategoryCard'

export const ListCategory = ({setCategory}) =>{
    return(
        <ul>
            {categories.map(category => {
                return(
                    
                <CategoryCard 
                setCategory={setCategory} 
                key={category.id} 
                category={category} 
                />

                )
            })}            
        </ul>
    )
}