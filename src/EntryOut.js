import styled from "styled-components";
import { useState, useContext} from 'react';
import { useNavigate } from "react-router-dom";
import UserContext from "./UserContext";
import axios from "axios";

export default function EntryOut(){

    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("")
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    function Save(e) {
        e.preventDefault()
        let data = {amount: amount, description: description};
        const config = {
            headers: {
                "Authorization": `Bearer ${user.token}` //Padrão da API (Bearer Authentication)
            }
          }
    
        const requisicaoPost = axios.post(
          "https://back-projeto-13-my-wallet.herokuapp.com/entryout",
          data,
          config
        );
        requisicaoPost.then((response) => {
            setAmount("")
            setDescription("")
            navigate("/wallet");
        });
        requisicaoPost.catch((error) => {alert(error.response.data)
        })
    }


    return(
        <>
       
        <Container onSubmit = {e=> Save(e)}>
                <h1>Nova saída</h1>
                <input type="text"  placeholder="Valor" onChange={(e) => setAmount(parseFloat(e.target.value)*-1)} required/>
                <input type="text"  placeholder="Descrição" value={description} onChange={(e) => setDescription(e.target.value)} required/>
                <button type = "submit"> Salvar saída</button>
        </Container>
        </>
    )
}

const Container = styled.form ` background-color: #8C11BE;
                    height: 100vh;
                    width: 100vw;
                    font-family: 'Raleway', sans-serif;
                    display:flex;
                    align-items: center;
                    flex-direction: column;
                    box-sizing: border-box;


                    h1{
                        font-size: 26px;
                        color: #FFFFFF;
                        font-weight: 700;
                        
                        margin-top: 26px;
                        margin-bottom: 40px;
                    }

                    input{
                        width:326px;
                        height: 58px;
                        margin-bottom: 13px;
                        box-sizing: border-box;
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
`

