import React, { useEffect, useState } from 'react'
import PageBanner from './PageBanner';
import { Costemdatajason } from './CostemDataJason';

export default function Shop() {
  const [data, setData] = useState([]);
  const [name,setName] = useState("");
  const [number,setNumber] = useState("");
  const [guest,setGuest] = useState(1);
  const [date,setDate] = useState("");
  const [time,setTime] = useState("");
  const [editId,setEditId] =useState(null);
  const [isEdit,setIsEdit] = useState(false);
// -----------------------------------get the data from cosdata and put into the table-----------------
  useEffect(() => {
   setData(Costemdatajason);
  }, []);

  // -----------------------------------Add Button------add the new/edit data when you click the add button------------
  const handleAdd = () => {
    const newReservation = {
      id: data.length + 1,
      firstName: name,
      phoneNum: number,
      guestNo: guest,
      date: date,
      timing: time 
    };
    setData([...data,newReservation])

    setName("");
    setNumber("");
    setGuest(1);
    setDate("");
    setTime("");
  };
  // -----------------------------------delete Button------------------
  const handleDelete = (id) => {
    const newData = data.filter((item)=> item.id !== id);
    setData(newData);
  };
  // -----------------------------------edit Button-----------------
 const handleEdit = (item) =>{
  setName(item.firstName);
  setNumber(item.phoneNum);
  setGuest(item.guestNo);
  setDate(item.date);
  setTime(item.timing);
   setEditId(item.id);
  setIsEdit(true);
 };
 // -----------------------------------update Button------a------------
 const handleUpdate = () => {

  const updatedData = data.map((item) => {
    if(item.id === editId){
      return {
        ...item,
        firstName: name,
        phoneNum: number,
        guestNo: guest,
        date: date,
        timing: time
      }
    }
    return item;
  });

  setData(updatedData);

  setIsEdit(false);
  setEditId(null);
};
// -----------------------------------clear Button------------------
const handleClear = () => {
  setName("");
  setNumber("");
  setGuest(1);
  setDate("");
  setTime("");
};

  return (
    <>
      <PageBanner title="Reservation"/>
      <div className='container mt-5 res-shop mb-5'>
        <h2 className='text-center shop-h2'>Restaurant Reservation</h2>

        <div className='form-box'>
          <input type='text' placeholder='Enter The Name' value={name} onChange={(e) => setName(e.target.value)}/>
          <input type='text' placeholder='Enter The Mobile Number' value={number} onChange={(e) => setNumber(e.target.value)}/>
          <input type='number' placeholder='guest' value={guest} onChange={(e) => setGuest(e.target.value)}/>
          <input type='date' value={date} onChange={(e) => setDate(e.target.value)}/>
          <input type='time' value={time} onChange={(e) => setTime(e.target.value)}/>
          <div>
          {isEdit ? (
            <button className='b1 me-2' onClick={handleUpdate}>Update</button>
          ) : (
            <button className='b1 me-2' onClick={handleAdd}>Add</button>
          )}
          <button className='b1' onClick={handleClear}>clear</button>
          </div>
        </div>
        <table className="table table-striped table-bordered table-hover mt-4">
          <thead className="table-success">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Number</th>
            <th>Guest</th>
            <th>Date</th>
            <th>Time</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item,index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.phoneNum}</td>
              <td>{item.guestNo}</td>
              <td>{item.date}</td>
              <td>{item.timing}</td>
              <td>
                <button className="btn btn-success btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}

        </tbody>

        </table>

      </div>
    </>
  )
}
