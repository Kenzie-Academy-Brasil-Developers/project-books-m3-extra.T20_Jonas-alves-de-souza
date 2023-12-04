import { Footer } from '../Footer'
import { Header } from '../Header'

export const DefaultTemplade = ({children}) => {
    return(
        <div>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    )
}