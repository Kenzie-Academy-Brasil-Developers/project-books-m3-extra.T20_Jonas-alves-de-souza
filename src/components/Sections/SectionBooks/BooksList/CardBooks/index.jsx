import styles from './styles.module.scss'

export const CardBooks = ({book}) =>{
    return(
        <li className={`${styles.bookCard}`}>
            <div>
                <h4 className='title2'>{book.name}</h4>
                <p className='parapraph'>{book.category}</p>
            </div>
            <span className='parapraph bold'>
                {book.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
            </span>
        </li>
    )
}