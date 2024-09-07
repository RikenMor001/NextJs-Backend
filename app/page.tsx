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
Maybe the backend server is down orelse if you put anything from your side than it's not a problem
*/ 

export default async function Home() {
  const userData = await getUserDetails();
  setTimeout(() => {
    window.location.href = "/";
  }, 5000);
  return (
    <div>
      <div className="border-b p-3 font-semibold">
        Medium
      </div>
      <div>
        <div className="h-screen grid grid-cols-2 flex justify-center items-center">
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
                This is the actual content, I can write any yada yada text and no one's going to judge me. I will give the bramhacks 2024 and I am 
                going to win it.
              </div>
              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-lg">
                This is the actual content, I can write any yada yada text and no one's going to judge me. I will give the bramhacks 2024 and I am 
                going to win it.
              </div>

              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-lg">
                This is the actual content, I can write any yada yada text and no one's going to judge me. I will give the bramhacks 2024 and I am 
                going to win it.
              </div>

              <div className="text-xl font-bold">
                  This is the title of the content
              </div>
              <div className="text-lg">
                This is the actual content, I can write any yada yada text and no one's going to judge me. I will give the bramhacks 2024 and I am 
                going to win it.
              </div>

            </div>
          </div>
          <div className="text-lg font-bold bg-slate-100 h-screen flex justify-center items-center">
            Welcome to medium 
          </div>
        </div>
      </div>
     
    </div>
  );
}
