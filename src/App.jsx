import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Footer from './components/Footer/Footer';
import Hero2 from './components/Hero/Hero2';
import Services from './components/Services/Services';
import Subscribe from './components/Subscribe/Subscribe';

const App = () => {
  return (
    <main className="overflow-x-hidden bg-white text-dark">
      <Hero2/>
      <Services />
      <Banner />
      <Subscribe/>
      <Banner2/>
      <Footer/>
    </main>
  );
};

export default App;
