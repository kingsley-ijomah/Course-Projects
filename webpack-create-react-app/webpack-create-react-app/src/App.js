import logo from './logo.svg';
import './App.scss';

import smallDog from './assets/images/dog-small.png';
import largeDog from './assets/images/dog-large.jpeg';

console.log(process.env)

// console.log(env.IMAGE_INLINE_SIZE_LIMIT);
// console.log(process.env.IMAGE_INLINE_SIZE_LIMIT);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={smallDog} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
