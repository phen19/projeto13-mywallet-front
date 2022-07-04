import styled from "styled-components";
import { useState} from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios"


export default function Signup (){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate();

    function buttonSuccess(name, email, password, confirmPassword, navigate) {

        let data = {    
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
                    };
        
        const requisicaoPost = axios.post(
          "http://localhost:5000/register",
          data
        );
        requisicaoPost.then(() => {
          navigate("/");
        });
        requisicaoPost.catch((error) => {alert(error.response.data)
        });
    }


    return(
        <>
            <Container onSubmit={(e) => buttonSuccess(name, email, password, confirmPassword, navigate,e.preventDefault())}>
                <p>My Wallet</p>
                <input type="text"  placeholder="Nome" value ={name} onChange={(e) => setName(e.target.value)} required/>
                <input type="text"  placeholder="E-mail" value ={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input type="password"  placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                <input type="password"  placeholder="Confirme a senha" value ={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required/>

                <button type = "submit"> Cadastrar</button>
                
                <Link to = "/" style={{textDecoration:"none"}} >
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