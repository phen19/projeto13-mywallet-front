import styled from "styled-components";
import { useState, useContext} from 'react';
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";



export default function Login (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();


    function Success(email, navigate, password, user, setUser) {
        let data = { email: email, password: password};
    
        const requisicaoPost = axios.post(
          "http://localhost:5000/login",
          data
        );
        requisicaoPost.then((response) => {
            setUser(response.data)
            navigate("/wallet");
        });
        requisicaoPost.catch((error) => {alert(error.response.data)
        })
    }


    return(
        <>
            <Container onSubmit={(e) => Success(email,navigate, password,user, setUser , e.preventDefault())}>
                <p>My Wallet</p>
                <input type="text"  placeholder="E-mail" value ={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password"  placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <button type = "submit"> Entrar</button>
                
                <Link to = "/sign-up" style={{textDecoration:"none"}} >
                    <h1>Primeira vez? Cadastre-se!</h1>
                </Link>
            </Container>
        </>
    )
}

            const Container = styled.form `
            font-family: 'Raleway', sans-serif;
            display:flex;
            flex-direction: column;
            align-items: center;
            background-color: #8C11BE;
           
            height: 100vh;
            width: 100vw;

            input{
            width:326px;
            height: 58px;
            margin-bottom: 13px;
            box-sizing: border-box;
            }

            p{
                font-family: 'Saira Stencil One', cursive;
                font-size: 32px;
                color: #FFFFFF;
                margin-top: 160px;
                margin-bottom: 40px;
            }

            placeholder::{
                font-size: 20px;
                color: #DBDBDB;
                font-family: 'Raleway', sans-serif;
            }
            button{
                width:326px;
                height: 46px;
                background-color:#A328D6;
                border-radius: 5px;
                border:0;
                font-size: 20px;
                font-weight: 700;
                color: #FFFFFF;
                margin-bottom: 6px;
                display:flex;
                justify-content:center;
                align-items: center;
            }
            h1{
                margin-top: 36px;
                color: #FFFFFF;
                font-weight: 700;
            }
`