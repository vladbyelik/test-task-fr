import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Profile from '../Profile/Profile';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />

      <div className='container'>
        <Profile />
      </div>

      <Footer />
    </div>
  );
}

export default App;
