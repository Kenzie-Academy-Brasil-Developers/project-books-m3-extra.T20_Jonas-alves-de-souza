import { InputPrice } from './InputPrice'
import styles from './style.module.scss'

export const Price = ({ min, setMin, max, setMax }) => {
    return(
        <div className={`${styles.priceFilters}`}>
            <h3 className='title2'>Filtrar por preco</h3>
            <InputPrice 
                id={'min'} 
                label='Minimo (R$):' 
                value={min} 
                setValue={setMin}
            />
            <InputPrice 
                id={'max'} 
                label='Maximo (R$):' 
                value={max} 
                setValue={setMax}
            />
        </div>
    )
}