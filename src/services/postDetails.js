
import { PRIMARY_SERVER } from '../constants/serverUrls';


export const postDetails=(route,method,body)=>{
    const requestUrl=PRIMARY_SERVER + route;
    return new Promise((resolve,reject)=>{
        const headers=new Headers({
            "Content-Type":"application/json",
        });
        const requestConfig={
            headers,
            mode:"cors",
            method,
            body:JSON.stringify(body),
        };
        fetch(requestUrl,requestConfig)
        .then(data=>{
            console.log("Heeeeeeeeeeeeeeeeeeeeeeeere is the detail",data);
            resolve(data);
        })
        .catch(error=>{
            reject(error);
        });
    });    
};

