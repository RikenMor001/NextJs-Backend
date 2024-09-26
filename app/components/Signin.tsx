"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { ChangeEvent, useState } from "react";

export function Signin(req:NextRequest, res: NextResponse){
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const router = useRouter();

    const handleClick = async () => {
        const response = await axios.post("http://localhost:3000/api/user", {username, password})
        if (response.status === 200){
            router.push("/")
        }
    }
    const Signuppage = () => {
        router.push("/signup")
    }
    return <div>
        <div className="flex justify-center bg-slate-100 items-center h-screen flex-col">
            <div className="mb-3">
                <div className="flex justify-center font-bold text-3xl">
                    Log into account
                </div>
                <div className="flex justify-center items-center text-slate-500">
                    <div>
                        Don't have an account?
                    </div>
                    <div className="hover:text-slate-900">
                        <button onClick={Signuppage}>
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>

            <Input 
            label = "Username"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            />
            <Input 
            label = "Password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            />
            <div className="bg-slate-900 text-white p-3 rounded-lg mt-3 text-center hover:bg-slate-800">
                <button onClick={handleClick}>
                    Sign In
                </button>
            </div>
        </div>
    </div>
}

interface inputTypes {
    label: string
    placeholder: string
    type?: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({label, placeholder, type, onChange}: inputTypes){
    return <div className="flex justify-center items-center flex-col w-full">
        <div className="font-bold text-lg p-2">
            <label>
                {label}
            </label>
        </div>
        <div className="w-1/5">
            <input 
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            required
            className="w-full bg-gray-50 text-gray-900 text-sm rounded-lg shadow-lg px-2 py-4 border border-gray-300"
            />
        </div>
    </div>
}