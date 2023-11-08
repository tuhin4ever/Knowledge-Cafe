import React, { useEffect, useState } from "react";
import SingleCard from "../Cards/SingleCard";
import SideMark from "../SideMark/SideMark";
import { toast } from "react-toastify";
const Home = ({ handleReadTime, readTime }) => {
  const [cafes, setCafes] = useState([]);
  const [bookMark, setBookMark] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCafes(data));
  }, []);

  useEffect(() => {
    const previous = JSON.parse(localStorage.getItem("bookMark")) || [];
    setBookMark(previous);
  }, []);

  const handleAddToBookMark = (cafe) => {
    const tryMe = bookMark.find((item) => item.id === cafe.id);
    if (tryMe) {
      toast.error("You Already bookmarked This Blog !");
      return;
    }
    const newBookMark = [...bookMark, cafe];
    setBookMark(newBookMark);
    const previous = JSON.parse(localStorage.getItem("bookMark")) || [];
    previous.push(cafe);
    localStorage.setItem("bookMark", JSON.stringify(previous));
    toast.success("Cafe bookmarked successfully!");
  };
  return (
    <>
      <div className="container my-5">
        <div className="main row gx-5">
          <div className="home-container col-md-8 px-5 mt-5">
            <div className="card-container row">
              {cafes.map((cafe) => (
                <SingleCard
                  key={cafe.id}
                  cafe={cafe}
                  handleAddToBookMark={handleAddToBookMark}
                  handleReadTime={handleReadTime}
                ></SingleCard>
              ))}
            </div>
          </div>
          <div className="side-container col-md-4 card mt-5">
            <SideMark bookMark={bookMark} readTime={readTime}></SideMark>
            {bookMark.map((book) => (
              <div
                key={book.id}
                className="card w-100 shadow-none p-3 mt-4 bg-light rounded"
              >
                <h4>{book.description}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
