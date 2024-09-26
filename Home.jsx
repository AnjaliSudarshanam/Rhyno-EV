import  { useState, useEffect } from 'react';
// import 'tailwindcss/tailwind.css';
import {Link} from 'react-router-dom'
const uspItems = [
  {
    title: 'LFP Battery',
    description: `Rhyno is equipped with Lithium Iron Phosphate (LFP) batteries, renowned for their safety features—eliminating the risk of fire associated with other Lithium batteries. These batteries boast a broader temperature range, ideal for the diverse Indian climate. Our technology enhances Rhyno's longevity, complemented by an Active Balancing Smart Battery Management System (BMS) for extended life and reduced maintenance. Each battery undergoes rigorous waterproofing tests according to IP76 standards. But it doesn't stop there—our technology goes the extra mile in ensuring the battery's lasting durability. Connect with us to discover the thoughtful engineering behind our batteries!`
  },
  {
    title: 'Wider Tyres',
    description: `Now, say goodbye to skidding and embrace the leaning turns! Featuring first-of-its-kind, 9.5-inch wider tyres that make this machine an enormous beast that ensures stability on different terrains such as wet roads, mud, and sand.`
  },
  {
    title: 'Range Prediction',
    description: `Many budget-friendly electric scooters overlook this crucial feature, causing riders to experience range anxiety. With Rhyno, you can ride with peace of mind, thanks to the scooter providing precise information about the remaining battery.`
  },
  {
    title: 'Extraordinary Experience',
    description: `Rhyno is more than just a mode of transportation. It is an experience of sheer comfort and style! A seamless fusion of minimalism, sophistication, and a touch of masculinity!`
  },
  {
    title: 'Rugged and Simple Design',
    description: `We’ve had enough of the EVs looking and feeling like fragile plastic toys. Often fading out and shamelessly breaking in minor accidents, ending up spending weeks and months at service stations for complex repairs. We took a bold step of making something raw, rugged, and practical. We kept it so simple that even your trusted local mechanic can understand and repair most of it. If you have reached this far, why not take a test ride? Click here to locate your nearest dealership or book a test ride at your home!`
  }
];

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentUspIndex, setCurrentUspIndex] = useState(0);

  const words = ['Style', 'Elegance', 'Minimalism', 'Comfort'];

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    const uspInterval = setInterval(() => {
      setCurrentUspIndex((prevIndex) => (prevIndex + 1) % uspItems.length);
    }, 5000);

    return () => {
      clearInterval(wordInterval);
      clearInterval(uspInterval);
    };
  }, [words.length, uspItems.length]);


 
  return (
    <div className="bg-[#131313] text-white min-h-screen p-4 font-poppins">
        <br /> <br /><br /><br />
      <header className="text-center my-8">
        <h1 className="text-2xl md:text-4xl font-bold">
          Let&apos;s Elevate Your Ride Experience With Rhyno – Where Superiority Meets{' '}
          <span className="text-blue-500">{words[currentWordIndex]}</span>.
        </h1>
      </header>
      <section className="text-center my-8">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">Vehicle Photos</h2>
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <img src="./assets/bike.png" alt="Vehicle 1" className="w-full md:w-1/4 h-auto rounded-md" />
          <img src="./assets/blue.png" alt="Vehicle 2" className="w-full md:w-1/4 h-auto rounded-md" />
          <img src="./assets/black.png" alt="Vehicle 3" className="w-full md:w-1/4 h-auto rounded-md" />
        </div>
      </section>
      <section className="text-center my-8">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">Product Check Out</h2>
        <div className="flex flex-wrap justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
          <button className="bg-blue-600 px-4 py-2 rounded-md w-full md:w-auto"  >Check Out SE03</button >
          <button className="bg-blue-600 px-4 py-2 rounded-md w-full md:w-auto">Check Out SE03Lite</button>
          <button className="bg-blue-600 px-4 py-2 rounded-md w-full md:w-auto">Check Out SE03Max</button>
        </div>
      </section>
      <section className="text-center my-8">
        <h2 className="text-xl md:text-3xl font-semibold mb-4">Our USP</h2>
        <div className="bg-[#424242] rounded-md">
          <h3 className="text-lg md:text-2xl font-bold mb-2">{uspItems[currentUspIndex].title}</h3>
          <p>{uspItems[currentUspIndex].description}</p>
        </div>
      </section>
      <button className="fixed bottom-4 right-4 bg-red-600 px-4 py-2 rounded-full">Pre-book Now</button>
    </div>
  );
};

export default Home;
