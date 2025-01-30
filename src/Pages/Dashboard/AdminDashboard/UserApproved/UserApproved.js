import React, { useEffect, useState } from "react";
import useAuth from "../../../../Hooks/useAuth";
// import useAuth from '../../../../Hooks/useAuth';
import ApprovedData from "./ApprovedData";

// import ManageTable from './ManageTable';
// import useFirebase from '../../../hooks/useFirebase';

const UserApproved = () => {
  const [questions, setQuestions] = useState([]);
  const { user } = useAuth();
  console.log(questions);

  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`https://black-electrisian.onrender.com/adminConfarm`)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
    // console.log(data)
  }, []);
  console.log(questions);

  // delete

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, you want to delete");
    if (proceed) {
      fetch(`https://black-electrisian.onrender.com/deleteUser/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("delete");
            const remaining = questions.filter((product) => product._id !== id);
            setQuestions(remaining);
            console.log(data);
          }
        });
    }
  };

  // let value=question.drivelink;

  const handleUpdate = (id) => {
    fetch(`https://black-electrisian.onrender.com/QuestionStatusUpdate/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("update");
  };

  const handleSelectValue = (e) => {
    const statusData = e.target.value.toLowerCase();
    setStatus(statusData);
  };

  return (
    <div className="container all-question-container">
      <div className="text-center pb-3">
        <h1 className="mb-2 text-center pt-2 text-black">
          Total Electrician{" "}
          <span style={{ color: "#1289A7" }}>{questions.length}</span>{" "}
        </h1>
      </div>

      <table className="table table-gray" style={{ width: "100%" }}>
        <thead>
          <tr
            className=" text-white mb-3 p-2 mb-3"
            style={{ question: "1px solid red", background: "#182533" }}
          >
            {/* <th >Number</th> */}
            <th>BookerName</th>
            <th>BookerNumber</th>
            <th>Electrician</th>

            <th>ElectricianNumber</th>
            <th>Position</th>
            <th>Update</th>
            <th>delete</th>
          </tr>
        </thead>
        {questions?.map((question, index) => (
          <tbody key={question._id}>
            <ApprovedData deletes={handleDelete} data={question}></ApprovedData>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UserApproved;
