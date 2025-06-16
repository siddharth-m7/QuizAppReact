import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Homeapge(){
    return (
        <>
        <Navbar />
        <div>
        <h1>Welcome to the Home Page</h1>
        <p>This is the main page of our application.</p>
        <Link to="/generate" className="text-blue-500 hover:underline">
            Generate a Quiz
        </Link>
        </div>
        </>
    );
}

export default Homeapge;