import AboutProject from '../components/AboutProject';
import AboutDeveloper from '../components/AboutDeveloper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
    <Navbar />
    <main className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 min-h-screen">
      <AboutProject />
      <AboutDeveloper />
    </main>
    <Footer />
    </>
  );
}

export default AboutPage;