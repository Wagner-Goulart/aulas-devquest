import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"

export const Card = () => {

    const {theme} = useContext(ThemeContext)

    return (
        <div style={{color: theme.color, backgroundColor: theme.background}}>
            <h1>Paragrafo do card</h1>
            <p>Paragrafo do cards, Paragrafo do cards, Paragrafo do cards, Paragrafo do cards</p>
        </div>
    )
}