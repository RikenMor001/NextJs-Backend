import axios from "axios";


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
  setTimeout(() => {
    window.location.href = "/";
  }, 5000);
  return (
    <div>
      <div className="flex justify-between border-b p-3 font-semibold ">
          <div>
            Medium
          </div>
          <div className="hover:text-gray-600 hover:cursor-pointer">
            Anonymus
          </div>
      </div>
          

      <div className="flex justify-center font-bold bg-gray-100">
      Get unlimited access to the best of Medium for less than $1/week.
      </div>
      <div>
        <div className="ml-3 h-screen grid grid-cols-2 flex justify-center items-center">
          <div>
            <div className="flex text-sm mb-10 border-b">
              <div className="m-3 ">
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
              <div className="text-lg">
              This is the actual content, this is where posts will be popping up. This is the actual content, this is where posts will be popping up. 
              </div>
              <br></br>
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-lg">
                This is the actual content, this is where posts will be popping up. This is the actual content, this is where posts will be popping up.
              </div>
              <br></br>
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-lg">
              This is the actual content, this is where posts will be popping up. This is the actual content, this is where posts will be popping up.
              </div>
              <br></br>
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-lg">
                  This is the actual content, this is where posts will be popping up. This is the actual content, this is where posts will be popping up.
              </div>
              <br></br>
            </div>
          </div>
          <div className="text-lg font-bold h-screen flex justify-center items-center border-l">
            Welcome to medium
          </div>
        </div>
      </div>
     
    </div>
  );
}



