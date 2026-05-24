import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Compare from './components/Compare';
import Itinerary from './components/Itinerary';
import PlaceLog from './components/PlaceLog';
import Reels from './components/Reels';
import Team from './components/Team';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Compare />
        <Itinerary />
        <PlaceLog />
        <Reels />
        <Team />
      </main>
      <Footer />
    </>
  );
}
