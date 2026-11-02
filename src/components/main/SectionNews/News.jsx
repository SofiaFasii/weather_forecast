import { SectionNews, Wrapper, Img, Container, Box, NewLink, BtnLoadMore } from "./newx.styled"

export default function News({news, loadMore}){
    return(
        <SectionNews>
            <Wrapper>
                <Container>
                    {news.map((item) => (
                        <Box key={item.url}>
                            <Img src={item.urlToImage}/>
                            <NewLink href={item.url} target="_blank">{item.title}</NewLink>
                        </Box>
                    ))}
                </Container>
                <BtnLoadMore onClick={() => loadMore()}>See more</BtnLoadMore>
            </Wrapper>
        </SectionNews>
        
    )
}