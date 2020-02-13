import { PRIMARY_SERVER } from "../constants/serverUrls";
const fetchData=(route,method)=>{
    const requestUrl=PRIMARY_SERVER + route;
    return new Promise((resolve,reject)=>{
        fetch(requestUrl)
        .then(response=>{
            resolve(response)
        })
        .catch(error=>{
            reject(error);
        });
    });    
};

export default fetchData;
