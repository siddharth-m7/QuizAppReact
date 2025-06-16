import AboutProject from '../components/AboutProject';
import AboutDeveloper from '../components/AboutDeveloper';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function AboutPage() {
  return (
    <>
    <Navbar />
    <main className="min-h-screen">
      <AboutProject />
      <AboutDeveloper />
    </main>
    <Footer />
    </>
  );
}

export default AboutPage;