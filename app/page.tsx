import axios from "axios";
import { Appbar } from "./components/App";

async function getUserDetails() {

  try {
    const response = await axios.get("http://localhost:3000/api/user")
	  return response.data;
  }  catch(e) {
    console.log(e);
  }
}

/*
Maybe the backend server is down or else if you put anything from your side than it's not a problem
*/ 

export default async function Home() {
  const userData = await getUserDetails();
  return (
    <div>
      <Appbar/>
        
      <div className="flex justify-center font-light text-black text-sm p-3 border-b">
        Get unlimited access to the best of Medium for less than $1/week.
      </div>
      
      <div>
        <div className="ml-3 h-screen grid grid-cols-[65%_35%] flex justify-center items-center">
          <div> 
            <div className="flex text-sm mb-10 border-b">
                <div className="m-3">
                  <button> Follow </button>
                </div>
                <div className="m-3">
                  <button> Following </button>
                </div>  
            </div>
            <div>
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-md">
                This is the actual content, this is where posts will be popping up. 
              </div>
              <br />
            </div>
          </div> 

          <div className="bg-slate-100 text-xl font-bold h-screen border-l flex justify-center items-center">
            <div>
              Welcome to Medium
              <div className="text-sm text-gray-500">
                The best site to post and read blogs. 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

