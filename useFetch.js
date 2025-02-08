import { useEffect, useState } from "react";

const LocalCache={};

export const UseFetch = (url) => {

    const [state, setstate] = useState({
        data:null,
        isLoading: true,
        haserro:false,
        error:null
    });

    const getFetch = async ()=>{

        if(LocalCache[url]){
            setstate({
                data:LocalCache[url],
                isLoading: false,
                haserro:false,
                error:null
            })
            return;
        }

        setLoagin();

        const res = await fetch(url);
        if(!res.ok){setstate({
                ...state,
                haserro:true,
            })
            return;
        }
        const data = await res.json();
        setstate({
            data:data,
            isLoading:false,
            haserro:false,
            error:null
        })

        LocalCache[url]=data;
    }

    const setLoagin=()=>{
        setstate({
            data:null,
            isLoading:true,
            haserro:false,
            error:null
        })
    }

    useEffect(() => {
        getFetch();
    }, [url]);

    return ({
        data: state.data,
        isLoading: state.isLoading,
        haserro: state.haserro,
    });
}


