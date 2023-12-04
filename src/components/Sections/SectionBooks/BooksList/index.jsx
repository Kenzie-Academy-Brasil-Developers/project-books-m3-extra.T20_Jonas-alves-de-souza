import { CardBooks } from './CardBooks'
import styles from './style.module.scss'

export const BooksList = ({ search, bookList }) => {
    return(
        <div className={`${styles.bookListBox}`}>
            <span className='parapraph bold' >Livros listados: {bookList.length}</span>
            {search ? <p>Resultado de busca para: {search}</p> : null}

            {
            bookList.length > 0 ? 
            (
                <ul className={styles.bookList}>
                    {bookList.map(book => {
                        return(
                            <CardBooks key={book.id} book={book}/>
                        )
                    })}                                
                </ul>
            ) : (
                <p className='parapraph'>Nenhum resultado encontrado</p>
                )
            }
        </div>
    )
}