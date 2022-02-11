import { Widget } from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizContainer from '../src/components/QuizContainer';
import { useRouter } from "next/router";
import db from "../db.json";
import React, { useState } from "react";
import Input from "../src/components/Input";
import Button from '../src/components/Button';
import QuizLogo from '../src/components/QuizLogo';

// const QuizContainer = styled.div`
//   width: 100%;
//   max-width: 350px;
//   padding-top: 45px;
//   margin: auto 10%;
//   @media screen and (max-width: 500px) {
//     margin: auto;
//     padding: 15px;
//   }
// `;


export default function Home() {
  const router = useRouter();
  const [userName, setUsername] = useState('');
  return (
    <>

      <QuizBackground backgroundImage={db.bg}>

        <QuizContainer>
          <QuizLogo />
          <Widget>
            <Widget.Header>
              <h1>React AluraQuiz</h1>
            </Widget.Header>
            <Widget.Content>
              <form onSubmit={(event) => {
                event.preventDefault();
                router.push(`/quiz?name=${userName}`)
              }}>
                <Input value={userName} type="text" placeholder="Diz ai seu nome" onChange={(e) => setUsername(e.target.value)} />
                <Button disabled={userName.length === 0}>
                  Jogar {userName}
                </Button>


              </form>
            </Widget.Content>

          </Widget>

          <Widget>
            <Widget.Content>
              <p>Quiz da Galera</p>
              {db.external.map((linkExterno) => {
                const [projectName, githubUser] = linkExterno
                  .replace(/\//g, "")
                  .replace("https:", "")
                  .replace(".vercel.app", "")
                  .split(".");

                return (
                  <li style={{'listStyle':'none'}} key={linkExterno}>
                    <Widget.Topic>
                      <a href={linkExterno}>
                        {`${githubUser}/${projectName}`}
                      </a>
                    </Widget.Topic>

                  </li>
                )
              })}
            </Widget.Content>
          </Widget>
          <Footer></Footer>
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/shabazzBr" />
      </QuizBackground>
    </>
  )
}
