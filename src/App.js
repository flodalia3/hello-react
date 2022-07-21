//import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import {useState} from 'react'; //hook
import axios from 'axios';

function App() {
  // const nameState = useState("Ciccio");
  // const name = nameState[0];
  // const setName = nameState[1];
  const [name, setName] = useState("Ciccio");
  const [surname, setSurname] = useState("Pasticcio");
  const [courses, setCourses] = useState([]);
  //let name = "Ciccio";
  //let surname = "Pasticcio";
  const mainSearch = (n) => console.log(n);
  const changeData = (e) => {
    setName("Pippo");
    setSurname("De Pippis");
  };
  const loadData = () => {
    axios.get("http://localhost:8080/course")
    .then((res) => setCourses(res.data))
  };

  return (
    <div className="App">
      <p>Hello {name} {surname}!</p>
      <button onClick={changeData}>Click Me</button>
      <button onClick={loadData}>Load Data from Server</button>
      <MyComponent clientName={name} goldUser="true" onSubmit={mainSearch} />
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Hourse Course</th>
            <th>Level Course</th>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {
            courses.map( (c,p) => {
              return (
                <tr key={p}>
                  <td>{c.id}</td>
                  <td>{c.title}</td>
                  <td>{c.hoursCourse}</td>
                  <td>{c.courseLevel}</td>
                  <td>{c.description}</td>
                  <td>{c.price}</td>
                </tr>
              )
            }
            )
          }
        </tbody>
      </table>
      
    </div>
  );
}

export default App;
