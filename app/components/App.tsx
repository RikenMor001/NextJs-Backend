"use client"
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Appbar() {
    const router = useRouter();

    function Signout(){
        signOut();
        router.push("/signin")
    }

    return <div>
        <div className="flex justify-between items-center text-slate-900 p-3 font-semibold border boder-b">
            <div className="flex justify-center items-center">
                <div className="text-2xl">
                    Medium 
                </div>
                <div className="mt-1 ml-3 text-sm text-slate-500 rounded-lg bg-slate-100 p-2 px-10 font-semibold">
                    <Input
                     type="text"
                     placeholder="Search"   
                    />
                </div>
            </div>
            <div className="flex">
                <div className="mr-3 text-md text-slate-500">
                    Write
                </div>
                <div className="mr-3 text-md text-slate-500">
                    Bell
                </div>
                <div>
                    <button onClick={Signout}>
                        SignOut
                    </button>
                </div>
            </div>
            
        </div>
    </div> 
}

interface SignupProps {
    placeholder: string;
    type?: string;
}

function Input({ placeholder, type }: SignupProps){
    return <div>
        <div >
            { placeholder }
            { type }
        </div>
    </div>
}
