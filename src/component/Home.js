import { useEffect, useState } from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
  const [allTask, setAllTask] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/task")
      .then((res) => res.json())
      .then((data) => setAllTask(data));
  }, []);

  const handleUpdate=(id)=>{
    navigate(`update/${id}`)
  }
  return (
    <div>
      <h1>Home</h1>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th>
                Completed
              </th>
              <th>Date</th>
              <th>Task</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {allTask.map((tasks) => {
              const { _id, date, task } = tasks;
              return (
                <tr key={_id}>
                  <th>
                    <input type="checkbox" name="" id="" />
                  </th>
                  <td>{date}</td>
                  <td>{task}</td>
                  <td onClick={()=>handleUpdate(_id)} className="text-blue-500 text-2xl cursor-pointer">
                    <AiOutlineEdit />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
