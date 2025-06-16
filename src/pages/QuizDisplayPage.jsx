import useSWR from "swr";
import { useLocation } from "react-router-dom";
import DisplayQuizQuestion from "../components/DisplayQuizQuestion";

const fetcher = (url) => fetch(url).then((res) => res.json());

function QuizDisplayPage() {
    const location = useLocation();
    console.log(location.state.apiUrl);
    const apiUrl = location.state.apiUrl || "https://the-trivia-api.com/api/questions?categories=General Knowledge&limit=10&difficulty=easy&type=multiple";

    const { data, error } = useSWR(apiUrl, fetcher);

    if (error) return <div>Failed to load quiz data</div>;
    if (!data) return <div>Loading quiz...</div>;
    if (data) console.log(data);

    return (
        <div className="quiz-display-page">
        <DisplayQuizQuestion data={data}/>
    
        </div>
    );

}

export default QuizDisplayPage;