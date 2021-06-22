import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react'

const App = () => {
  // const x = false
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb, 5',
      time: '14:30',
      timeAMPM: 'AM',
      reminder: true
    },
    {
      id: 2,
      text: 'Apple Store Appointment',
      day: 'Jul, 5',
      time: '04:30',
      timeAMPM: 'AM',
      reminder: true
    },
    {
      id: 3,
      text: 'Dentist Appointment',
      day: 'Feb, 15',
      time: '10:30',
      timeAMPM: 'AM',
      reminder: false
    }
  ])

  return (
    // Because this is JSX, we have to use the attribute className instead of class.
    <div className="App">
      {/* We could do also:
      <Header> </Header>
      */}
      <Header title='elbitapmoC' />
      <Tasks tasks={tasks} />
      {/* <p>We can write JS within the code... {x ? 'Awesome isn\'t it?' : 'Radical Dudee!'}</p> */}
    </div>
    // We could us a fragment (an empty element) if we don't want to have a parent element.
  );
}

export default App;
