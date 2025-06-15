import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());


function QuizDisplayPage(){

    const { data, error } = useSWR("https://the-trivia-api.com/api/categories", fetcher);
    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <div className="quiz-display-page">
        <h1>Quiz Display Page</h1>
        <p>This is where the quiz will be displayed.</p>
        {/* Additional components and logic for displaying the quiz can be added here */}
        </div>
    );

}

export default QuizDisplayPage;