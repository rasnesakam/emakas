import {HeadSection, BodySection, FootSection} from "../../src/components/About/index";

const About = () => {
    return (<>
        
		<HeadSection imgSrc={"https://avatars.githubusercontent.com/u/45129228?v=4"} title={"Ensar Makas"}>
			<>
				Merhaba. Ben Ensar, Beykent Üniversitesi bilgisayar mühendisliği mezunuyum <br />
				Kod yazmayı ve tavuklu pilavı severim
			</>
		</HeadSection>
		<BodySection />
		<FootSection />
		
    </>);
};

export default About;