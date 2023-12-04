import LogoBooksWhite from '../../assets/LogoWhite.svg'
import styles from './style.module.scss'

export const Footer = () =>{
    return(
        <footer className={`${styles.sectionFooter}`}>
            <div className='container'>
                <div className={`${styles.flexBox}`}>
                    <img src={`${LogoBooksWhite}`} alt='Logo Books White' />
                    <p className='parapraph white'>
                        Todos os direitos reservados - Kenzie Academy Brasil
                    </p>           
                </div>
            </div>
        </footer>
    )
}