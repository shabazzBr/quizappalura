import styled from 'styled-components'
import { Widget } from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import { useRouter } from "next/router";
import db from "../db.json";
import React, { useState } from "react";



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
  const router = useRouter();
  const [userName, setUsername ] = useState('');
  return (
    <>

      <QuizBackground backgroundImage={db.bg}>
        <QuizContainer>
          <Widget>
            <Widget.Header>
              <h1>Olá mundo!</h1>
            </Widget.Header>
            <Widget.Content>
          <form onSubmit={(event) =>{
                event.preventDefault(); 
                router.push(`/quiz?name=${userName}`)
            }}>
            <input  value={userName} type="text" placeholder="Diz ai seu nome" onChange={(e) => setUsername(e.target.value)}/>
            <button disabled={userName.length === 0} >
                   Jogar {userName}
            </button>
              
            
          </form>
            </Widget.Content>

          </Widget>

          <Widget>
            <Widget.Content>
              <p>Quiz da Galera</p>
            </Widget.Content>
          </Widget>
          <Footer></Footer>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/shabazzBr" />
      </QuizBackground>
    </>
  )
}
