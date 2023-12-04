import { Category } from './Category'
import { Price } from './Price'
import { Search } from './Search'
import styles from './style.module.scss'

export const Filters = ({cleanFilters, setSearch, setCategory, min, setMin, max, setMax}) => {
    return(
        <div className={`${styles.filterBox}`}>
            <Search setSearch={setSearch} />
            <Category setCategory={setCategory} />
            <Price
                min={min}
                setMin={setMin}
                max={max}
                setMax={setMax} 
            />
            <button className='btn' onClick={cleanFilters}>Limpar filtro</button>
        </div>
    )
}