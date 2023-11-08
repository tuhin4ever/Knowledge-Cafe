import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import "./SingleCard.css";
const SingleCard = (props) => {
  const {poster,imageUser,authorName,date,readTime,description} = props.cafe;

  const handleAddToBookMark = props.handleAddToBookMark ;
  const handleReadTime = props.handleReadTime;


  return (
    <div  className="card w-100 col-md-5 mx-auto mt-3 ">
      <div className="poster w-full  m-auto p-2">
        <img className="w-100 rounded" src={poster} />
      </div>

      <div className="d-flex align-items-center">
        <img className="author rounded-circle mx-2 mt-2" src={imageUser} />
        <h4 className="mx-3">{authorName}</h4>
      </div>
      <div className="container d-flex just justify-content-between  ">
        <p className="mx-5 ">{date}</p>
        <p>
          {readTime} min read <FontAwesomeIcon className="cursor-pointer" onClick={() => handleAddToBookMark(props.cafe)}  icon={faBookmark} border />
        </p>
      </div>
      <h3 className="w-50 lh-base">{description}</h3>
      <div className="d-flex gap-2 fw-bold">
        <p>#beginners</p>
        <p>#programming</p>
      </div>
      <div className="my-3">
        <button className="btn btn-link" onClick={()=> handleReadTime(readTime)}>Mark as read</button>
      </div>
    </div>
  );
};

export default SingleCard;
