import React, { useEffect, useState } from "react";
import './SideMark.css'

const SideMark = ({ bookMark, readTime }) => {
  const [time, setTime] = useState(readTime);
  useEffect(() => {
    const getReadTimeFromStorage = localStorage.getItem("readTime");
    setTime(getReadTimeFromStorage);
  }, [readTime]);
  return (
    <>
      <div className="colorBody shadow p-3 mt-5 bg-body-tertiary rounded ">
        <h3 className="colorText">Spent time on read : {time} min</h3>
      </div>
      <h3 className="mt-5">Bookmarked Blogs : {bookMark.length}</h3>
    </>
  );
};

export default SideMark;
