import './css/App.css';
import react from 'react';
// import '/Content';
import HeaderBar from './navigation/HeaderBar';
import Content from './contents/Content';
import Image from './img/background.jpeg'
function App() {
  return (
    <div className="App">
      <div id="backimg"> <img src={Image}/> </div>
      <HeaderBar />
      <Content />
    </div>
  );
}

export default App;
