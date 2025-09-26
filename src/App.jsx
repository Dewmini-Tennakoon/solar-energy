import Navigation from "./components/Navigation/Navigation";
import HeroSection from "./components/HeroSection/HeroSection";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
      </main>
    </>
  );

}

export default App;   