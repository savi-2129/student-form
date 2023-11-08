import React, { useState } from 'react'
import axios from 'axios'
function StudentForm() {
  const [id, setid] = useState();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhonenumber] = useState();
  const [branch, setBranch] = useState("");
  const [sem, setSem] = useState();



  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      id: id,
      name: name,
      email: email,
      phone: phone,
      branch: branch,
      sem: sem,

    }
    try {
      const response = await axios.post("http://localhost:5000/student", data)
      alert("student created");
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      <h1> Student Registation Form</h1>
      <form onSubmit={handleSubmit}>

        <input type="text" placeholder="enter your id" value={id} onChange={(e) => setid(e.target.value)} />
        <p>{id}</p>


        <input type="text" placeholder="enter your name" value={name} onChange={(e) => setName(e.target.value)} />
        <p>{name}</p>

        <input type="text" placeholder="enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <p>{email}</p>

        <input type="text" placeholder="enter your number" value={phone} onChange={(e) => setPhonenumber(e.target.value)} />
        <p>{phone}</p>

        <input type="text" placeholder="enter your branch" value={branch} onChange={(e) => setBranch(e.target.value)} />
        <p>{branch}</p>

        <input type="text" placeholder="enter your semister" value={sem} onChange={(e) => setSem(e.target.value)} />
        <p>{sem}</p>


        <button>Submit</button>



      </form>
    </div>

  )
}


export default StudentForm