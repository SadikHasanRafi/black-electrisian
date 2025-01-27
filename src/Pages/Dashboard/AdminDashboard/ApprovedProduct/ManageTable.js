import React, { useState } from 'react';

const ManageTable = (props) => {
    
    const { driveLink, productName, code, tran_id, status, year, _id ,cartProducts,email} = props.data

    let googleId = driveLink?.slice(32, 65);
    const viewUrl = `https://drive.google.com/file/d/${googleId}/preview`

    const [statu, setStatu] = useState('')
    const handleSelectValue = (e) => {
        const statusData = (e.target.value).toLowerCase()
        setStatu(statusData)
    }



    const handleUpdate = (id) => {
        fetch(`https://black-electrisian.onrender.com/QuestionStatusUpdate/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({ statu}),
        })
            .then((res) => res.json())
            .then((result) => console.log(result));
        alert('update')
    }

    return (
        <>
      
            {/* <tbody key={_id}> */}
                 <tr role="row" style={{ question: "2px solid gray" }} >
                            {/* <th scope="row">{index + 1}</th> */}
                            <td className='text-black'>{productName}</td>
                            <td className='text-black'>{tran_id}</td>
                            <td className='text-black'>{code}</td>
                            
                            <td> <iframe title="question" src={viewUrl}
                                className="img-fluid rounded-start w-100 " style={{ height: "130px" }} allow="autoplay"></iframe>
                            </td> 

                            <td>
                                <div >
                                    <select onChange={handleSelectValue} className="pending p-2 ">
                                        <option defaultValue={status}>{status}</option>
                                        <option defaultValue="approved">Approved</option>
                                        <option defaultValue="pending">Pending</option>
                                        <option defaultValue="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => handleUpdate(_id)}>update</button>
                            </td>
                            <td>
                                <button className="btn-style" onClick={() => props.deletes(_id)}>delete</button>
                            </td>
                        </tr> 
            
                      
                      {/* </tbody> */}
             </>
       
    );
};

export default ManageTable;