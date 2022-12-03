import './App.css'
import Navbar from './components/Navbar'

const App = () => {
  const title = 'Welcome to the new blog!';
  const likes = 50;
  return (
    <div className='App'>
      <Navbar />
      <div className='content'></div>
      <h1>{ title }</h1>
      <p>Liked { likes } times</p>
    </div>
  );
}

export default App
