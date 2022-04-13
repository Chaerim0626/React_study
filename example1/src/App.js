import './App.css';
import Myheader from './Myheader'
import Counter from './Counter'
import Container from './Container';

function App() {
  const counterProps = {
    a : 1,
    b : 1,
    intialValue: 5

  }

  return (
    <div className="App">
      <Container>
      <Myheader/>
        <h2>Hello react</h2>
        <Counter {...counterProps}/>
      </Container>
 
    </div>
  );
}

export default App;
