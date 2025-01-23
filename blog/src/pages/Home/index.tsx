import { Footer } from '../../components/Footer'
import { Header } from '../../components/Header'
import { posts } from '../../posts'
import { Container, FormWrapper } from './styles'
import { PostsList } from '../../components/PostsList'

export function Home() {
    return (
        <>
            <Header />

            <FormWrapper>
                <Container>
                    <input type="text" placeholder="Filtrar posts por título" />
                    <button>Filtrar</button>
                </Container>
            </FormWrapper>

            <main>
                <PostsList posts={posts} />
            </main>

            <Footer />
        </>
    )
}
