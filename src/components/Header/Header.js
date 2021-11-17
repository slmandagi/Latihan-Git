import { useState } from "react";

export default function Header(){
    const [title, setTitle] = useState("Selamat datang di web saya");
    const[greetings, setGreetings] = useState("Halo")
    const handleClick = (e) =>{
        setGreetings("Hello");
        setTitle("Welcome to my website");
        // console.log("Hello");
        // console.log(e) // ini untuk melihat event handlernya
    }
    return(
        <>
            <h1>Header</h1>
            <h3>{title}</h3>
            <p>{greetings}</p>
            <button onClick={handleClick}>Translate</button>
        </>
    )
}