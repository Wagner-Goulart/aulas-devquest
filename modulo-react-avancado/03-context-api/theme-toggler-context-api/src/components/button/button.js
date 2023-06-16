import { useContext } from "react"
import { ThemeContext } from "../../contexts/theme-context"
import styled from "styled-components"

export const Button = (props) => {
    const { theme } = useContext(ThemeContext)

    return (
        <Button {...props}
        style={{color: theme.color, backgroundColor: theme.background}}
        />
    )
}
