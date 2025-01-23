import { useTheme } from 'styled-components'

import { Article, Avatar, Button, RoundedButton, StyledLink } from './styles'
import { IPost } from '../../types'
export function Post({
    id,
    author,
    avatar,
    category,
    createdAt,
    description,
    image,
    title,
    children,
}: IPost) {
    const theme = useTheme()

    return (
        <Article>
            <img src={image} alt={title} />
            <p className="category">{category}</p>
            <h2>
                <StyledLink to={`/post/${id}`}>{title}</StyledLink>
            </h2>

            <div className="post-info">
                <Avatar src={avatar} alt="" />
                <div>
                    <span style={{ color: theme.colors.title }}>{author}</span>
                    <span>{createdAt}</span>
                </div>
            </div>
            <p className="description">{description}</p>

            {children}

            <Button>Curtir</Button>
            <RoundedButton $primary as="a">
                Compartilhar
            </RoundedButton>
        </Article>
    )
}