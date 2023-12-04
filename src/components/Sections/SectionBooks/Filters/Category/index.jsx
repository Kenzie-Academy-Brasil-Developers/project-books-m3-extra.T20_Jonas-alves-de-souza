import { ListCategory } from './ListCategory'
import styles from './style.module.scss'

export const Category = ({setCategory}) => {
    return(
        <div className={`${styles.categoryFilters}`}>
            <h2 className='title2'>Filtrar por Categoria</h2>
            <ListCategory setCategory={setCategory} />
        </div>
    )
}