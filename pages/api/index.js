import db from "../../db.json";


export default function (request, response){
    if(request.headers === "OPTIONS"){
        response.json(db);
        response.setHeader("Access-Control-Allow-Credentials", true);
        response.setHeader("Access-Control-Allow-Origin", "*");
        response.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS,PATCH, DELETE, POST, PUT");
    }
    

}