import { useState } from 'react'
import { BooksList } from './BooksList'
import { Filters } from './Filters'
import { books } from '../../../data/books'
import styles from './style.module.scss'


export const SectionBooks = () => {
    
    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('')
    const [min, setMin] = useState('')
    const [max, setMax] = useState('')

    const bookResult = books.filter((book) =>  {
        const searchFilter = search === '' ? true :  book.name.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase()) || book.category.toLocaleLowerCase()
            .includes(search.toLocaleLowerCase())

        const categoryFilter = category === '' ? true : book.category === category

        const minPriceFilter = min === '' ? true : book.price > Number(min)

        const maxPriceFilter = max === '' ? true : book.price <= Number(max)

        return(
            searchFilter && categoryFilter && minPriceFilter && maxPriceFilter 
        )
    })

    const cleanFilters = () =>{
        setSearch('')
        setCategory('')
        setMin('')
        setMax('')
    }

    return(
        <section>
            <div className='container'>
                <div className={`${styles.bookSectionBox}`}>
                    <Filters 
                    cleanFilters={cleanFilters} 
                    setSearch={setSearch}
                    setCategory={setCategory}
                    min={min}
                    setMin={setMin}
                    max={max}
                    setMax={setMax}
                    />
                    <BooksList search={search} bookList={bookResult} />
                </div>
            </div>
        </section>
    )
}