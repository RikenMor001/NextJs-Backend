
// button uses axios.post because it will post the username and the password or any other type of schema that is been introduced by the database
// provider. Followin the " Prsima.Schema "
"use client"
import { useState } from "react";

export function Signup(){
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    return <div>
        <div className="grid grid-cols-2">
            <div>
                
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
