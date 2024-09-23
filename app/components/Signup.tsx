
// button uses axios.post because it will post the username and the password or any other type of schema that is been introduced by the database
// provider. Following the " Prsima.Schema "
"use client"
import { ChangeEvent, useState } from "react";

export function Signup(){
    const [username, setUsername] = useState<String>('');
    const [password, setPassword] = useState<String>('');

    return <div>
            <div className="grid grid-cols-2">
                <div className="flex justify-center flex-col">
                    <div>
                        <Input
                            label="Username"
                            placeholder="Enter your username"
                            type="text"
                            onChange={(e) => setUsername(c => ({
                                ...c,
                                username: e.target.value
                            }))}
                        />
                        <Input
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            onChange={(e) => setPassword(c => ({
                                ...c,
                                password: e.target.value
                            }))}
                        />
                    </div>
                </div>

            <div className="bg-slate-200 flex justify-center flex-col h-screen">
                <div className="flex justify-center">
                    <div className="max-w-lg">
                        <div className="text-3xl font-bold">
                            "The customer support i received was exceptional. The support team went above and beyond to address my concerns." 
                        </div>
                        <div className="mt-2 max-w-md text-lg font-semibold text-left text-slate-800">
                            CEO | Acme corp.
                        </div>
                        <div className=" max-w-md text-md font-semibold text-left text-slate-500">
                            -Riken Patel
                        </div>
                    </div>
                </div>
            </div>            
        </div>
    </div>
}

interface SignupProps{
    label: string;
    placeholder: string;
    type?: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({label, placeholder, type, onChange}: SignupProps){
    return <div className="flex flex-col items-center text-center w-full">
        <div className="text-lg font-bold p-2"> 
            <label>
                {label}
            </label>
        </div>
        <div className="w-1/2">
            <input
            placeholder={placeholder}
            type={type}
            onChange={onChange}
            className="w-full bg-gray-50 text-gray-900 text-sm rounded-lg shadow-lg px-2 py-4 border border-gray-200"
            required
            />
        </div>
    </div>
}
