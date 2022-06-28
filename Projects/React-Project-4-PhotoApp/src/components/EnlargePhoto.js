import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Spinner } from 'react-bootstrap'
import "./Photo/Photo.css";

const EnlargePhoto = () => {
  const { id } = useParams();
    const [singlePhoto, setSinglePhoto] = useState({});
  useEffect(() => {
    const getSinglePhotoDetails = async () => {
      try {
        const res = await axios.get(`https://picsum.photos/id/${id}/info`);
        setSinglePhoto(res.data);
      } catch (err) {
        alert(err);
      }
    };
    getSinglePhotoDetails();
  }, [id]);
  const imageStyle = {
    height: "85vh",
    width: "90vw",
    margin: "30px 0 0",
  };
  return (
    <>
      {Object.keys(singlePhoto).length ? (
        <img
          src={singlePhoto.download_url}
          alt="singlePhoto"
          style={imageStyle}
        />
      ) : (
        <div className="spinner-wrapper">
          <Spinner animation="border" role="status"></Spinner>
        </div>
      )}
    </>
  );
};
export default EnlargePhoto;
