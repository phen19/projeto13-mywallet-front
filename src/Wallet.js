import styled from "styled-components";
import { useState, useContext} from 'react';
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Wallet(){
    const { user, setUser } = useContext(UserContext);
    return(
        <>
            <Container>
                <Header>
                    <h1>Olá, {user.name}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </Header>
                <Flow>
                    <h1>Não há registros de entrada ou saída</h1>
                </Flow>
                <Buttons>
                <Link to="/in" style={{textDecoration:"none"}}>
                    <Entry>
                            <ion-icon name="add-circle-outline"></ion-icon>
                            <h1>Nova entrada</h1>
                    </Entry>
                </Link>
                    <Link to="/out" style={{textDecoration:"none"}} >
                    <Entry>
                            <ion-icon name="remove-circle-outline"></ion-icon>
                            <h1>Nova saída</h1>
                    </Entry>
                    </Link>
                </Buttons>
            </Container>
        </>
    )
}

const Container = styled.div `  background-color: #8C11BE;
                                height: 100vh;
                                width: 100vw;
                                display:flex;
                                flex-direction: column;
                                justify-content: center;
                                align-items: center;
                                font-family: 'Raleway', sans-serif;
`
const Header = styled.div ` height: 32px;
                            width: 326px;
                            color: #FFFFFF;
                            display: flex;
                            justify-content: space-between;
                            font-size: 26px;
                            font-weight: 700;
                            margin-bottom: 22px;
                            margin-top: 22px;

`
const Flow = styled.div `   height:446px;
                            width: 326px;
                            background-color: #FFFFFF;
                            border-radius: 5px;
                            display: flex;
                            justify-content: center;
                            align-items: center;

                            h1{
                                height: 46px;
                                width: 180px;
                                color: #868686;
                                font-size: 20px;
                                text-align:center;
                            }
`
const Buttons = styled.div `width: 326px;
                            display: flex;
                            justify-content: space-between;
                            font-family: 'Raleway', sans-serif;
                            
                            button:hover{
                                cursor:pointer;
                            }
                            
`
const Entry = styled.button `   width: 155px;
                                height: 114px;
                                margin-top: 13px;
                                background-color: #A328D6;
                                border-radius: 5px;
                                font-size: 16px;
                                font-weight: 700;
                                color: #FFFFFF;
                                display:flex;
                                flex-direction: column;
                                box-sizing:border-box;
                                padding-left:0;
                                border:0;
                                justify-content:space-around;
                                

                                h1{
                                    height: 40px;
                                    width: 64px;
                                    text-align: left;
                                    padding-left: 10px;
                                }

                                ion-icon{
                                    padding-left:6px;
                                    font-size: 26px;
                                }
                                
                                
`