import { useState } from "react"
import axios from "axios"
import { BottomWarning } from "../components/BottomWarning"
import { Header } from "../components/Header"
import { InputBox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { Button } from "../components/Button"
import { useNavigate } from "react-router-dom"



export const Signin=()=>{
    const [username, setUsername]= useState("")
    const [password, setPassword]= useState("")
    const navigate = useNavigate();
    return <> 
    <div className="bg-gray-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4"> 

            <Header label={"Sign in"}></Header>
            <SubHeading label={"Enter your credentials to access your account"}></SubHeading>

            <InputBox onChange={(e)=>{
                setUsername(e.target.value);
            }} label={"Email"} placeholder={"rahul@gmail.com"}></InputBox>
            <InputBox onChange={(e)=>{
                setPassword(e.target.value);
            }} label={"Password"} placeholder={"12345"}></InputBox>

            <Button label={"Sign Up"} onClick={async ()=>{
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                    username,
                    password
                })
                localStorage.setItem("token", response.data.token)
                navigate("/dashboard")
                }

            }></Button>

            
            <BottomWarning label={"Don't have an account?"} next={"Sign Up"} to={"../Signup"}></BottomWarning>



            </div>
        </div>
    </div>
    </>
}