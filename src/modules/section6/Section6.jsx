import React from "react";
import "./Section6.css";
import BlogsComponent from "../blogsComponent/BlogsComponent";
import BlogImg1 from "../../assets/dummyimages/dummy-blogs.png";
import BlogImg2 from "../../assets/dummyimages/dummy-blogs.png";
import BlogImg3 from "../../assets/dummyimages/dummy-blogs.png";
import BlogImg4 from "../../assets/dummyimages/dummy-blogs.png";
import BlogImg5 from "../../assets/dummyimages/dummy-blogs.png";
import BlogImg6 from "../../assets/dummyimages/dummy-blogs.png";
import { Link } from "react-router-dom";

const Section6 = () => {
  const blogData = [
    {
      id: "1",
      image: BlogImg1,
      title: "Design and Development",
      para: "It is a long established fact that a reader kll will be distracted by the readable contentjk of a page hjkl when layout.",
    },
    {
      id: "2",
      image: BlogImg2,
      title: "Design and Development",
      para: "It is a long established fact that a reader kll will be distracted by the readable contentjk of a page hjkl when layout.",
    },
    {
      id: "3",
      image: BlogImg3,
      title: "Design and Development",
      para: "It is a long established fact that a reader kll will be distracted by the readable contentjk of a page hjkl when layout.",
    },
    {
      id: "4",
      image: BlogImg4,
      title: "Design and Development",
      para: "It is a long established fact that a reader kll will be distracted by the readable contentjk of a page hjkl when layout.",
    },
    {
      id: "5",
      image: BlogImg5,
      title: "Design and Development",
      para: "It is a long established fact that a reader kll will be distracted by the readable contentjk of a page hjkl when layout.",
    },
    {
      id: "6",
      image: BlogImg6,
      title: "Design and Development",
      para: "It is a long established fact that a reader kll will be distracted by the readable contentjk of a page hjkl when layout.",
    },
  ];
  return (
    <div className="section6-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="side-lining">
              <h4>Blog and News</h4>
            </div>
            <h2 className="text-center mt-3">
              Digital solutions for modern problems
            </h2>
          </div>
        </div>
        <div className="row pt-5">
          {blogData.map((items) => (
            <div className="col-lg-4 mb-4" key={items.id}>
              <Link to="/blog-detail">
                <BlogsComponent
                  image={items.image}
                  title={items.title}
                  para={items.para}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section6;
