
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';

export default function Home() {
  return (
    <div className="bg-darkBlue min-h-screen text-white">
      <Header />
      <Hero />
      <Courses />
    </div>
  );
}