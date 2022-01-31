import React from "react";
import { useRouter } from "next/router";

export default function QuizPage(){
    const roteamento = useRouter();
    roteamento.query.username;
    
    
    
    return(
        <>
        
            <h1>Página quiz</h1>
        
        
        </>
    );
}