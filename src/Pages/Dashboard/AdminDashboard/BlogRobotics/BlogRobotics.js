import React from "react";
import { Col, Row, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../../Hooks/useAuth";
import { baseUrl } from "../../../../constants/urls";

const BlogRobotics = () => {
  const { user } = useAuth();
  // const {admin}=useAuth()
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch(baseUrl+"/blogrobot", {
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
              <h2 className="mb-5 text-white">Add Your Apply Blog</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("BlogName", { required: true })}
                  placeholder="Blog Name"
                />{" "}
                <br />
                <input
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("Equipment", { required: true })}
                  placeholder="Blog Equipment"
                />{" "}
                <br />
                <input
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("description", { required: true })}
                  placeholder="Description"
                />{" "}
                <br />
                <input
                  style={{ fontWeight: "600", color: " #0E1621" }}
                  className="w-75 mb-3"
                  {...register("img", { required: true })}
                  placeholder="img url"
                />
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

export default BlogRobotics;
