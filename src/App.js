import logo from './logo.svg';
import './App.css';
import img from './image.jpg.jpeg';
import StudentForm from './components/Student-form/StudentForm';


function NavBar() {
  return <h1> This is a Navbar component</h1>;

}
function Banner() {
  return <h1 >   Banner component</h1>;
}
function Headers() {
  return <h1 >   Headers component</h1>;
}
function About() {
  return <h1 >   Aboutcomponent</h1>;
}
function Footer() {
  return <h1 >   Footer component</h1>;
}
function GreetUser(props) {
  return <>
    <h1> name: {props.name}</h1>
    <h3> email:{props.email}</h3>
    <h1> phone number: {props.phonenumber}</h1>
    <h1> branch: {props.branch}</h1>
  </>



}

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Banner></Banner>{/*reuse the component*/}
      <Headers></Headers>
      <About></About>
      <Footer></Footer>
      <GreetUser name="savi"  branch="cse" />
      <GreetUser  phonenumber="3546883894835"/>
      <GreetUser email="savihs@2355"/>

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
  <img src={img}  alt="" />*/}
   <StudentForm/>

    </div>


  );
}

export default App;
