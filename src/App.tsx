import './App.css';
import CategoryPage from './components/category';
import FooterPage from './components/footer';
import Section from './components/section';
import Testmonials from './components/testmonials';

function App() {
  return (
    <div className='bg-[#2C1F4A]'>
      <CategoryPage />
      <Section />
      <Testmonials />
      <FooterPage />
    </div>
  );
}

export default App;
