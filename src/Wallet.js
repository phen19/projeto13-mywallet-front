import styled from "styled-components";
import { useState, useContext, useEffect} from 'react';
import { Link } from "react-router-dom";
import UserContext from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Wallet(){

    const { user, setUser } = useContext(UserContext);
    const [entries, setEntries] = useState([])
    const [refreshAxios, setRefreshAxios] = useState(false)
    const [total, setTotal] = useState(0)
    const config = {
        headers: {
            "Authorization": `Bearer ${user.token}` //Padrão da API (Bearer Authentication)
        }
      }

    useEffect(() => {
        if (user !== undefined) {
        const requisicao = axios.get("http://localhost:5000/entries", config);
        requisicao.then((response) =>{
                setEntries(response.data.entries);
                setTotal(Number(response.data.balance));
        })};

    },[refreshAxios, user]);

    function ShowEntries({amount, description, day, _id}) {
        console.log(entries)
        return (
            <Line id={_id}>
                <Day>{day}</Day>
                <Description><h2>{description}</h2></Description>
                <Amount style={amount > 0 ? {color:"green"} : {color:"red"}}><p>{amount.toFixed(2).replace(".",",").replace("-","")}</p><ion-icon name="close-outline"></ion-icon></Amount>
                
            </Line>
        )
    }

    console.log(typeof(total))

    if (entries === [] || entries === null || entries.length === 0) {

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
    }else{
        return(
            <>
            <Container>
                <Header>
                    <h1>Olá, {user.name}</h1>
                    <ion-icon name="exit-outline"></ion-icon>
                </Header>
                <Flow>
                    <Journal>
                    {entries.map( ({amount, description, day,_id}) => {return(
                    <ShowEntries amount={amount} description={description} day={day} _id={_id} />
            )})}
                    </Journal>
                <Total>
                    <h1>SALDO</h1> <p style={total > 0 ?  {color:"green"} : {color:"red"}}>{total.toFixed(2).replace(".", ",").replace("-","")}</p>
                </Total>
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
                            flex-direction: column;
                            position: relative;

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
const Line = styled.div `   display: flex; 
                            justify-content: space-between;
                            padding: 0 12px;
                            margin-top: 22px;
                            
                           

`
const Day =styled.h2 ` color: #C6C6C6;
                        font-family: 'Raleway', sans-serif;
                        font-size: 16px;
                        text-align: left;
`
const Description = styled.div `width: 170px;
                                font-family: 'Raleway', sans-serif;
                                font-size: 16px;
                                box-sizing:border-box;
                                display:flex;
                                padding-left:10px;
                                
                                
                                h2{
                                    text-align: left;
                                    
                                }
                                    `
const Amount = styled.div ` width: 62px;
                            box-sizing:border-box;
                            display:flex;
                            justify-content: flex-end;

                            ion-icon{
                                color:#C6C6C6;
                            }
`
const Total = styled.div `  height: 20px;
                            width: 326px;
                            display: flex;
                            justify-content: space-around;
                            position: absolute;
                            bottom: 10px;

                            h1{
                                color:#000000;
                                font-weight:700;
                                text-align:left;
                            }


`
const Journal = styled.div ` height: 400px;
                            overflow: auto;
`