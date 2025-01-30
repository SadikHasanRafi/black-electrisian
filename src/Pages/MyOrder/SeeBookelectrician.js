import React, { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
// import useAuth from '../../../../hooks/useAuth';

const SeeBookelectrician = () => {
  const [service, setService] = useState([]);
  const { user } = useAuth();
  const [control, setControl] = useState(false);
  // const email=user?.email

  useEffect(() => {
    fetch(
      `https://black-electrisian.onrender.com/mybookElectrician/${user?.email}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setService(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const proceed = window.confirm("are you sure, you want to delete");
    fetch(
      `https://black-electrisian.onrender.com/electricianmanageAllOrderDelete/${id}`,
      {
        method: "DELETE",
      },
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("Delete");
          const remaining = service.filter((service) => service._id !== id);
          setService(remaining);
        }
      });
    console.log(id);
  };

  const designShow = {
    width: "18rem",
  };
  return (
    <div>
      <h1>Booking Client</h1>
      <div className="container">
        <div className="row">
          {service?.map((offers) => (
            <div className="col-lg-6 mb-5 mt-5 col-sm-12 image-card ">
              <div className="card" style={designShow}>
                <img
                  className="image-design"
                  src={offers?.img}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body body-designs">
                  <h3>Booking User: {offers?.username}</h3>
                  <h6 className="card-text">
                    BookingAddress: {offers?.useraddress}.
                  </h6>
                  <h6 className=" ">
                    BookinguserOcupation:{offers?.ocupation}
                  </h6>
                  <h6 className=" ">BookinguserPhone:{offers?.userPhone}</h6>
                  <h6 className="me-5 ">BookingUsercity:{offers?.city}</h6>
                  <h6 className="me-5">
                    ElectricianName:{offers?.electricianName}
                  </h6>
                  <h6 className="me-5">ElectricianContact:{offers?.contact}</h6>
                  <h6 className="me-5">ElectricianEmail:{offers?.userEmail}</h6>
                  <h6 className="bg-danger text-white me-2 p-1 ">
                    {offers?.positions}
                  </h6>

                  <button
                    className="button"
                    onClick={() => handleDelete(offers?._id)}
                  >
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

export default SeeBookelectrician;
