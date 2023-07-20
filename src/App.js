
import './App.css';
import Fifth from './Fifth';
import First from './First';
import Fourth from './Fourth';
import Second from './Second';
// import Third from './Third';
import ThirdDupli from './ThirdDupli';

function App() {
  return (
    <div className="App">
     <First/>
     <Second/>
     {/* <Third/> */}
     <ThirdDupli/>
     <Fourth/>
     <Fifth/>
    </div>
  );
}

export default App;
