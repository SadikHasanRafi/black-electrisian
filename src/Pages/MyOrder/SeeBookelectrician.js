import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { baseUrl } from "../../constants/urls";

const SeeBookElectrician = () => {
  const [service, setService] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user?.email) return; // Prevent fetching if user email is undefined
    fetch(`${baseUrl}/mybookElectrician/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, [user?.email, baseUrl]);

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure you want to delete?");
    if (!proceed) return;

    fetch(`${baseUrl}/electricianmanageAllOrderDelete/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Deleted successfully!");
          setService((prevService) =>
            prevService.filter((service) => service._id !== id)
          );
        }
      })
      .catch((err) => console.error("Error deleting service:", err));
  };

  return (
    <div>
      <h1>Booking Clients</h1>
      <div className="container">
        <div className="row">
          {service?.map((offers) => (
            <div key={offers._id} className="col-lg-6 mb-5 mt-5 col-sm-12 image-card">
              <div className="card" style={{ width: "18rem" }}>
                <img
                  src={offers?.img}
                  className="card-img-top image-design"
                  alt="Electrician Service"
                />
                <div className="card-body body-designs">
                  <h3>Booking User: {offers?.username}</h3>
                  <h6>Booking Address: {offers?.useraddress}</h6>
                  <h6>Occupation: {offers?.ocupation}</h6>
                  <h6>Phone: {offers?.userPhone}</h6>
                  <h6>City: {offers?.city}</h6>
                  <h6>Electrician Name: {offers?.electricianName}</h6>
                  <h6>Contact: {offers?.contact}</h6>
                  <h6>Email: {offers?.userEmail}</h6>
                  <h6 className="bg-danger text-white p-1">{offers?.positions}</h6>
                  <button className="button" onClick={() => handleDelete(offers._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeeBookElectrician;
