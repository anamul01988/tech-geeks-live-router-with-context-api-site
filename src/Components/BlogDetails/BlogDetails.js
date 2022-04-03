import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogContext } from "../../App";
import "./BlogDetails.css";
import { BsChevronLeft } from "react-icons/bs";

const BlogDetails = () => {
    // const x = useParams();
    // console.log(x);
    // console.log(x.id);
  const { id } = useParams();
  const navigate = useNavigate();
  const [blogs] = useContext(BlogContext);

  const blog = blogs.find((blog) => blog._id == id);

  return (
    <>
      <div className='header-gradient' />
      {/* <h3>this is blog details {id}</h3> */}
      <div>
        <button className='back-button' onClick={() => navigate(-1)}>
          <BsChevronLeft />
          <p>Back</p>
        </button>
        <div className='blog-details'>
          <div className='blog-image'>
            <img src={blog?.imageURL} alt='' />
          </div>
          <h1>{blog?.title}</h1>
          <p>{blog?.blog}</p>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
