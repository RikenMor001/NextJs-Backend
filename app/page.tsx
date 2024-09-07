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

  return (
    <div>
      <div className="border-b p-3 font-semibold">
        Medium
      </div>
      <div className="flex justify-center items-center h-screen">
        <div>
          Welcome to medium blogs page
        </div>
      </div>
    </div>
  );
}
