import Footer from '../components/Footer';
import GenerateQuizForm from '../components/GenerateQuizForm';
import Navbar from '../components/Navbar';
function QuizPage(params) {
    return (
    <>
        <Navbar />
        <div>
            <GenerateQuizForm />
        </div>
        <Footer />
    </>
    );
}

export default QuizPage;