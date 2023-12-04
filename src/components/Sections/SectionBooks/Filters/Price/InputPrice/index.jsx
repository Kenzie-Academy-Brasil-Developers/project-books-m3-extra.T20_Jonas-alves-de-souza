import styles from './style.module.scss'

export const InputPrice = ({id, label, value, setValue}) =>{
    return(
        <div className={`${styles.inputBox}`}>
            <label className='label'>{label}</label>
            <input 
                type='number'
                name={id}
                id={id}
                value={value}
                onChange={(e)=> setValue(e.target.value)}
                min='1'
                className='input-small'
             />
        </div>
    )
}