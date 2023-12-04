import { DefaultTemplade } from '../../components/DefaultTemplade'
import { SectionBooks } from '../../components/Sections/SectionBooks'
import { SectionTitle } from '../../components/Sections/SectionTitle'

export const HomePage = () =>{
    return (
        <DefaultTemplade>
            <SectionTitle />
            <SectionBooks />            
        </DefaultTemplade>
    )
}