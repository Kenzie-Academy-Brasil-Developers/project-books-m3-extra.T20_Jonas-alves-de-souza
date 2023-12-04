import { useState } from 'react'
import { MdSearch } from 'react-icons/md'
import styles from './style.module.scss'

export const Search = ({setSearch}) => {

    const [value, setValue] = useState('')

    const submit = (e) =>{
        e.preventDefault()
        setSearch(value)
        setValue('')        
    }


    return(
        <form className={`${styles.formBox}`} onSubmit={submit}>
            <input 
            placeholder='Pesquisar...' 
            type='text' 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            required
            className='input-medium'
            />
            <button className='btn' type='submit'>
                <MdSearch size={21} />
            </button>
        </form>
    
    )
}