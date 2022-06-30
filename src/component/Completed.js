import { useEffect, useState } from "react";

const Completed = () => {
    const [completedTask, setCompletedTask] = useState([]);
    useEffect(() => {
      fetch("https://secure-harbor-66857.herokuapp.com/completed")
        .then((res) => res.json())
        .then((data) => setCompletedTask(data));
    }, [completedTask]);
    return (
      <div>
        <h1 className="text-center text-2xl font-bold">All Completed Task</h1>
        <div className="overflow-x-auto">
          <table className="table w-full my-6">
            <thead>
              <tr>
                <th>Completed</th>
                <th>Date</th>
                <th>Task</th>
                
              </tr>
            </thead>
            <tbody>
              {completedTask.map((tasks,index) => {
                const { _id, date, task } = tasks;
                return (
                  <tr key={_id}>
                    <th>{index+1}</th>
                    <td>{date}</td>
                    <td>{task}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default Completed;