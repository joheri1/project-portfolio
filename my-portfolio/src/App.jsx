/* eslint-disable react/prop-types */
import Hero from "./components/sections/hero/Hero";
import { TextSection } from "./components/sections/text-section/TextSection";
import { CardSection } from "./components/sections/card-section/CardSection";
import { Footer } from "./components/sections/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Hero />
      <TextSection />
      <CardSection />
      <TextSection />
      <CardSection />
      <Footer />
    </div>
  );
};

export default App;
