import { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Container, Logo, LogoContainer, Title, Wrapper } from './styles'
import { ThemeContext } from "../../contexts/ThemeContext";
import { ThemeToggleButton } from "../../contexts/ThemeToggleButton";


export function Header() {

    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
        return null;
    }

    const { theme, toggleTheme } = themeContext;
    
    return (
        <Wrapper>
            <Container>
                <div>
                    <Title>Meu Blog</Title>
                    <p>Por favor, faça login para continuar.</p>
                </div>

                <LogoContainer>
                    <Logo src={logo} />

                    <ThemeToggleButton onClick={toggleTheme}>
                        {theme === "dark" ? "🌞 Claro" : "🌙 Escuro"}
                    </ThemeToggleButton>
                </LogoContainer>
      
            </Container>
        </Wrapper>
    )
}
