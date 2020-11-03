import styled from 'styled-components';

export const ContactPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 10px;
`;

export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 30px;
`

export const Link = styled.a``

export const Icon = styled.i`
    color: white;
    background-color: #323338;
    border-radius: 50%;
    padding: 15px 18px;
    margin: 20px;
    font-size: 30px;
    transition: 0.5s;
    
    ${Link}:hover & {
        transform: scale(1.3);
        color: #323338;
        background-color: white;
        border: 1px solid #323338;
    }

    @media screen and (max-width: 800px) {
        font-size: 20px;
        padding: 10px 12px;
`

export const TextContainer = styled.div`
    max-width: 550px;
    text-align: justify;
`