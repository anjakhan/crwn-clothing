import React from 'react';

import { ContactPageContainer, IconContainer, Link, Icon, TextContainer } from './contact.styles';

const ContactPage = () => (
    <ContactPageContainer>
        <IconContainer>
            <Link href="https://github.com/anjakhan" rel="noopener noreferrer" target="_blank"><Icon className="fa">&#xf09b;</Icon></Link>
            <Link href="https://twitter.com/anja_khan90" rel="noopener noreferrer" target="_blank"><Icon className="fa">&#xf099;</Icon></Link>
            <Link href="https://www.linkedin.com/in/anja-khan/" rel="noopener noreferrer" target="_blank"><Icon className="fa">&#xf08c;</Icon></Link>
            <Link href="mailto:anjakhan@gmx.de"><Icon className="material-icons">&#xe0be;</Icon></Link>
            <Link href="https://anjakhan.netlify.app" rel="noopener noreferrer" target="_blank"><Icon className="material-icons">&#xe30a;</Icon></Link>
        </IconContainer>
        <h1>Contact Me ...</h1>
        <TextContainer>
            <p>I am a solution-driven Fullstack Developer, whose passion for Web Development evolved over a period of time
            after a foundation was set in a GIS-Analyst course. Alongside my first jobs I became a self taught Fullstack 
            Developer knowing HTML5, CSS3 and JavaScript well. Besides I have a good understanding of React/Redux 
            and Node.js. Real life experience I achieved in working with Python, SQL (PostgreSQL, MS SQL), the 
            above mentioned frontend languages as well as Leaflet. I am currently deep diving into the modern advanced JavaScript practices.</p>
            <p>Are you looking for an enthusiastic Fullstack Web Developer, who is motivated to learn, grow and excel in Web Development every day?</p>
        </TextContainer>
        <h2>HIRE ME!</h2> {/*Link to PDF of CV*/}
    </ContactPageContainer>
);

export default ContactPage;