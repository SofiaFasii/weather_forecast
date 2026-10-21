import { HeroWrapper, HeroContainer, Title, TextContainer, Text, Line, DateBox, Input, Form, SearchBtn} from "./hero.styled"

export default function HeroSection({handleSubmit, handleChange, filter}){
    const date = new Date();
    const monthYear = date.toLocaleDateString('en-US', {month: "long", year: "numeric"})
    const weekday = date.toLocaleDateString('en-US', {weekday: "long"})
    const day = date.getDate()

    return(
        <HeroWrapper> 
            <HeroContainer>
                <Title>Weather dashboard</Title>
                <TextContainer>
                    <Text>Create your personal list of favorite cities and always be aware of the weather.</Text>
                    <Line/>
                    <DateBox>
                        <p>{monthYear}</p>
                        <p>{weekday}, {day}</p>
                    </DateBox>
                </TextContainer>
                <Form onSubmit={handleSubmit}>
                    <Input value={filter} onChange={handleChange} placeholder="Search location..."/>
                    <SearchBtn/>
                </Form>
            </HeroContainer>
        </HeroWrapper>
    )
}