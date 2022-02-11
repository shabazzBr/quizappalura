import React from "react";
import QuizScreen from "../../src/screens/Quiz";

export function QuizDaGaleraPage({dbExterno}){
    // const [db, setDb] = useState({});

    return(
        <>
            <h1>Desafio da proxima </h1>
            <pre style={{ color:"black"}}> 
                <QuizDaGaleraPage externalQuestions={dbExterno.questions}/>

                {JSON.stringify(dbExterno, null, 4)}
            </pre>
        
        </>
    )
}
export async function getServerSideProps(context){
    console.log(context.query.id)
    const dbExterno = await fetch("https://aluraquiz-css-omariosouto.vercel.app/api/db")
    .then((respostaDoServer) =>{
        if(respostaDoServer.ok){
            return respostaDoServer.json();
        }

        throw new Error("Falha no carregamento dos dados")
    })
    .then((respostaConvertidaEmObjeto) => respostaConvertidaEmObjeto)
    .catch((err) =>{
        console.log(err)
    })
    

    console.log(dbExterno)


    return{
        props:{
            dbExterno
        },
    }
}