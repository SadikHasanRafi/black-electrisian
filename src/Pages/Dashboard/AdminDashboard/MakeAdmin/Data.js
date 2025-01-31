import React, { useState } from "react";
import { baseUrl } from "../../../../constants/urls";

const Data = (props) => {
  const {
    displayName,
    address,
    phone,
    role,
    contact,
    _id,
    index,
    email,
    img,
    profession,
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
    fetch(`${baseUrl}/buyerStatusUpdate/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ statu }),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    alert("update");
  };

  return (
    <>
      {/* <tbody key={_id}> */}
      <tr role="row" style={{ question: "2px solid gray" }}>
        {/* <th scope="row">{index + 1}</th> */}
        <td className="text-black">{displayName}</td>
        <td className="text-black">{address}</td>
        <td className="text-black">{email}</td>
        <td className="text-black">{phone}</td>
        <td className="text-black">
          {client}
          {role}
        </td>
      </tr>

      {/* </tbody> */}
    </>
  );
};

export default Data;
