import "./reset.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login.js"
import Signup from "./Sign-up.js"
import Wallet from "./Wallet.js"
import EntryIn from "./EntryIn.js"
import EntryOut from "./EntryOut.js"
import UserContext from "./UserContext";
import { useState} from 'react';

export default function App() {
    const [user, setUser] = useState([])

    return (
        <UserContext.Provider value = {{user, setUser}}>
            <BrowserRouter>
                <Routes>
                <Route path ="/" element={<Login />}/>
                <Route path="/sign-up" element={<Signup />}/>
                <Route path="/wallet" element={<Wallet />}/>
                <Route path="/in" element={<EntryIn/>}/>
                <Route path="/out" element={<EntryOut/>}/>
                </Routes>
            </BrowserRouter>
        </UserContext.Provider>
    );


}