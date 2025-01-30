import React, { useState } from "react";

const ApprovedData = (props) => {
  const {
    username,
    address,
    userPhone,
    electricianName,
    contact,
    _id,
    index,
    email,
    img,
    positions,
    client,
  } = props.data;

  // const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`

  const [statu, setStatu] = useState("");
  const handleSelectValue = (e) => {
    const statusData = e.target.value.toLowerCase();
    console.log(statusData);
    setStatu(statusData);
  };

  const handleUpdate = (id) => {
    fetch(
      `https://black-electrisian.onrender.com/electricianStatusUpdates/${id}`,
      {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ statu }),
      },
    )
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("update");
  };

  return (
    <>
      {/* <tbody key={_id}> */}
      <tr role="row" style={{ question: "2px solid gray" }}>
        {/* <th scope="row">{index + 1}</th> */}
        <td className="text-black">{username}</td>
        <td className="text-black">{userPhone}</td>
        <td className="text-black">{electricianName}</td>
        <td className="text-black">{contact}</td>

        <td>
          <div>
            <select onChange={handleSelectValue} className="pending p-2 ">
              <option defaultValue={positions}>{positions}</option>
              <option defaultValue="buyer">booked</option>

              <option defaultValue="cancelled">Cancelled</option>
            </select>
          </div>
        </td>
        <td>
          <button className="btn-style" onClick={() => handleUpdate(_id)}>
            update
          </button>
        </td>
        <td>
          <button className="btn-style" onClick={() => props.deletes(_id)}>
            delete
          </button>
        </td>
      </tr>

      {/* </tbody> */}
    </>
  );
};

export default ApprovedData;
