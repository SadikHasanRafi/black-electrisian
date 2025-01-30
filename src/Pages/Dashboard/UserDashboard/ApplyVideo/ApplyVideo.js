import React from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
// import useAuth from '../../../Hooks/useAuth';
// import Header from '../../../Shared/Header/Header';
// import {  Form,Col} from "react-bootstrap";
// import useAuth from '../../hooks/useAuth';

// import useFirebase from '../../../hooks/useFirebase';
// import Swal from 'sweetalert/sweetalert';

const ApplyVideo = () => {
  const { user } = useAuth();
  // const {admin}=useAuth()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.usersEmail = user.email;
    data.time = "pending";
    data.code = "pending";

    fetch("https://black-electrisian.onrender.com/videoApply", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("added successfully");
          reset();
        }
      });
  };

  return (
    <div className="py-5">
      <Container>
        <Row>
          <Col md={{ span: 8, offset: 2 }}>
            <div
              className="login-form text-center shadow"
              style={{ background: "#032831", borderRadius: "20px" }}
            >
              <h2 className="mb-5 text-white">Add Your Apply Video Session</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("name", { required: true })}
                  placeholder="Your Name"
                />{" "}
                <br />
                <input
                  // type="number"
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("Disease", { required: true })}
                  placeholder="Disease Name"
                />{" "}
                <br />
                <input
                  // type="number"
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("address", { required: true })}
                  placeholder="Address"
                />{" "}
                <br />
                <input
                  type="number"
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("phone", { required: true })}
                  placeholder="Mobile Number"
                />{" "}
                <br />
                {/* <input
                                 style={{fontWeight:"600",color:" #0E1621"}}
                                 className='w-75 mb-3' {...register("img", { required: true })} placeholder="img url"/> */}
                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("shop", { required: true })} placeholder='Shop Name' /> <br /> */}
                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("description", { required: true })} placeholder='Description' />  */}
                {/* <input
                                style={{fontWeight:"600",color:" #0E1621"}}
                                className='w-75 mb-3'  {...register("likes")} placeholder='likes' /> */}
                {/* <input> */}
                {/* </input> */}
                <br></br>
                <button className="submit-all" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ApplyVideo;
