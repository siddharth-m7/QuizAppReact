import useSWR from "swr";
import { useLocation } from "react-router-dom";
import DisplayQuizQuestion from "../components/DisplayQuizQuestion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fetcher = (url) => fetch(url).then((res) => res.json());

function QuizDisplayPage() {
    const location = useLocation();
    const apiUrl = location.state.apiUrl || "https://the-trivia-api.com/api/questions?categories=General Knowledge&limit=10&difficulty=easy&type=multiple";

    const { data, error } = useSWR(apiUrl, fetcher);

    if (error) return <div>Failed to load quiz data</div>;
    if (!data) return <div>Loading quiz...</div>;

    return (
        <>
        <Navbar />
        <div className="quiz-display-page">
        <DisplayQuizQuestion data={data}/>
    
        </div>
        <Footer />
        </>
    );

}

export default QuizDisplayPage;