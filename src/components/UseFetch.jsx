import { useState, useEffect } from "react"
const UseFetch = (url) =>{
    const [data, setdata] = useState(null); 
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(null);
    useEffect(() =>{
        setTimeout(()=>{
            fetch(url)
            .then(res =>{
                if (!res.ok){
                  throw Error("Could not fetch data ")
                }
                return res.json()
            })
            .then(data =>[
             setdata(data),
             setisPending(false)
        
            ])
            .catch(err=>{
                setisPending(false)
                seterror(err.message)
            })
          }, 1500)
    },[url]);
    return {data, isPending, error}
}
export default UseFetch;
