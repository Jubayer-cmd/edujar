import './App.css';
import Course from './components/Course';
import CategoryPage from './components/category';
import FooterPage from './components/footer';
import Header from './components/header';
import Navbar from './components/navbar';
import Section from './components/section';
import Testmonials from './components/testmonials';

function App() {
  return (
    <div className='bg-[#2C1F4A]'>
      <Navbar />
      <Header />
      <Course />
      <CategoryPage />
      <Section />
      <Testmonials />
      <FooterPage />
    </div>
  );
}

export default App;
