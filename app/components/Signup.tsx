// button uses axios.post because it will post the username and the password or any other type of schema that is been introduced by the database
// provider. Followin the " Prsima.Schema "

"use client"
import axios from "axios";
import { ChangeEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

export function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();
    return <div className="h-screen flex justify-center flex-col bg-slate-200">
        <div className="flex justify-center">
        <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Sign up
                        </div>
                    </div>
                    <div className="pt-2">
                        <LabelledInput onChange={(e) => {
                            setUsername(e.target.value);
                        }} label="Username" placeholder="Email" type="text"/>

                        <LabelledInput onChange={(e) => {
                            setPassword(e.target.value)
                        }} label="Password" type={"password"} placeholder="Password" />

                        <button onClick={async () => {
                            await axios.post("http://localhost:3000/api/user", {
                                username,
                                password
                            });
                            router.push("/")
                        }} type="button" className="mt-4 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign up</button>
                        <div className="text-sm text-gray-500 mt-2">
                            Already have an account? <a href="/login" className="text-gray-500 hover:underline hover:text-gray-800">Login</a>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    </div>
}

function LabelledInput({ label, placeholder, type, onChange }: LabelledInputType) {
    return <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">{label}</label>
        <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
    </div>
}

interface LabelledInputType {
    label: string;
    placeholder: string;
    type?: string;
    onChange: ChangeEventHandler<HTMLInputElement>
}
