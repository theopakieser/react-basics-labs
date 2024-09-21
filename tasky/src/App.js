import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" />
      <p className='description'>Fold and put away </p>
      <Task title="Laundry" deadline="Tomorrow"/>
        <p className='description'>Fold and put away </p>
      <Task title="Tidy" deadline="Today" />
    </div>
  );
}

export default App;