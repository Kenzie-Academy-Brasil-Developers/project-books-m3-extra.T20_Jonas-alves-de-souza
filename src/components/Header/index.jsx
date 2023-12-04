import LogoBooksBlue from '../../assets/LogoBlue.svg'
import styles from './style.module.scss'

export const Header = () => {
    return(
        <header>
            <div className='container'>
                <div className={`${styles.flexBox}`}>
                    <img src={`${LogoBooksBlue}`} alt='Logo Books Blue' />
                </div>
            </div>
        </header>
    )
}