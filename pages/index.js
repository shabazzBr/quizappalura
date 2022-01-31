import styled from 'styled-components'
import { Widget } from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import db from "../db.json";
import React from "react";

// const Title = styled.h1`
//   font-size: 50px;
//   color: ${({ theme }) => theme.colors.primary};
// `;


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//     flex: 1;
//     background-size: cover;
//     background-position: center;
// `;



const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;



export default function Home() {
  return (
    <>

      <QuizBackground backgroundImage={db.bg}> 
        <QuizContainer>
          <Widget>
          <Widget.Header>
                <h1>Olá mundo!</h1>
              </Widget.Header>
            <Widget.Content>
              <p>Loren ipsun dolor sit ame</p>
            </Widget.Content>

          </Widget>

          <Widget>
            <Widget.Content>
               <p>Quiz da Galera</p>
            </Widget.Content>
          </Widget>
          <Footer></Footer>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/shabazzBr"/>
      </QuizBackground>
    </>
  )
}
