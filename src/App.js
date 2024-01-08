
import './App.css';
import Date from './components/Date';
import Form from './components/Form';
import MyForm from './components/MyForm';
import New from './components/New';

function App() {
  return (
    <div className="App">
      <Date/>
      <New/>
      <Form/><br/><br/>
      <MyForm/>
    </div>
  );
}

export default App;
