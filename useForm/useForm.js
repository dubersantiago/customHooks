import { useState } from "react";


export const useForm = (initialform={}) => {

    const [formstate, setFormstate] = useState(initialform);

    
    const oninputchange=({target})=>{
        const {name,value}=target;
        setFormstate({
            ...formstate,
            [ name ]: value
        })
            //console.log({name,value});
    };

    const onresetform = ()=>{
        setFormstate(initialform);
    }

    return ({
        ...formstate,
        formstate,
        oninputchange,
        onresetform
    })
}

