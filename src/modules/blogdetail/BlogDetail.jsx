import React from "react";
import "./BlogDetail.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import MainImg from "../../assets/dummyimages/dummy-blogdetail.png";

import BlogImg1 from "../../assets/dummyimages/dummy-blog.png";
import BlogImg2 from "../../assets/dummyimages/dummy-blog.png";
import BlogImg3 from "../../assets/dummyimages/dummy-blog.png";

import Profile from "../../assets/dummyimages/dummy-profile.png";
import Rating from "../../assets/images/blogdetail/images/Rating.png";
import CommonButton from "../commonbutton/CommonButton";

const BlogDetail = () => {
  const absolData = [
    { id: "1", class: "profile-bef", title: "John Kennis" },
    { id: "2", class: "clock-bef", title: "April 2, 2022" },
    { id: "3", class: "profile-bef", title: "April 2, 2022" },
  ];

  const problemPoints = [
    { id: "1", data: "Listen to what they say about you" },
    { id: "2", data: "Randomised words which." },
    { id: "3", data: "Internet tend to repeat predefined chunks" },
  ];

  const questionsAnswers = [
    {
      id: "1",
      title: "What is Figma",
      para: "Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus malesuada. Eu lacus dis et tempor non. Odio tristique dignissim lorem ipsum vestibulum. Cras quisque praesent.",
    },
    {
      id: "2",
      title: "What is Figma",
      para: "Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus malesuada. Eu lacus dis et tempor non. Odio tristique dignissim lorem ipsum vestibulum. Cras quisque praesent.",
    },
    {
      id: "3",
      title: "What are the importance of Figma ",
      para: "Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus malesuada. Eu lacus dis et tempor non. Odio tristique dignissim lorem ipsum vestibulum. Cras quisque praesent.",
    },
    {
      id: "4",
      title: "What are the importance of Figma ",
      para: "Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus malesuada. Eu lacus dis et tempor non. Odio tristique dignissim lorem ipsum vestibulum. Cras quisque praesent.",
    },
    {
      id: "5",
      title: "What are the uses of Figma ",
      para: "Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus malesuada. Eu lacus dis et tempor non. Odio tristique dignissim lorem ipsum vestibulum. Cras quisque praesent.",
    },
    {
      id: "6",
      title: "What are the uses of Figma ",
      para: "Lacinia ut gravida tempus sollicitudin condimentum sit urna cursus malesuada. Eu lacus dis et tempor non. Odio tristique dignissim lorem ipsum vestibulum. Cras quisque praesent.",
    },
  ];

  const blogData2 = [
    {
      id: "1",
      image: BlogImg1,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
    {
      id: "2",
      image: BlogImg2,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
    {
      id: "3",
      image: BlogImg3,
      title: "How does writing influence your personal brand?",
      para: "It is a long established fact that a reader kll will be distracted by the readable It is a long established fact that a reader kll will be distracted by the readable contentjk contentjk ",
    },
  ];

  const Comments = [
    {
      id: "1",
      name: "Guy Hawkins",
      profile: Profile,
      time: "1 week ago",
      comment:
        "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    },
    {
      id: "2",
      name: "Guy Hawkins",
      profile: Profile,

      time: "1 week ago",
      comment:
        "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    },
    {
      id: "3",
      name: "Guy Hawkins",
      profile: Profile,

      time: "1 week ago",
      comment:
        "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    },
    {
      id: "4",
      name: "Guy Hawkins",
      profile: Profile,

      time: "1 week ago",
      comment:
        "I appreciate the precise short videos (10 mins or less each) because overly long videos tend to make me lose focus. The instructor is very knowledgeable in Web Design and it shows as he shares his knowledge. These were my best 6 months of training. Thanks, Vako.",
    },
  ];
  return (
    <div className="blogdetail-container">
      <div className="blogdetail-breadcrumb">
        <BreadCrumbs />
      </div>
      <div className="blogdetail-contents">
        <div className="container">
          <div className="relative-container">
            <img src={MainImg} alt="" className="img-fluid" />
            <div className="absol-container">
              {absolData.map((items) => (
                <div className={items.class} key={items.id}>
                  {items.title}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-5 pt-5">
            <h2>Project Description</h2>
            <p className="mt-3">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium dynamically target high-payoff
              intellectual capital for customized technologies objectively
              integrate emerging core competencies before process-centric
              communities dramatically evisculate holistic innovation rather
              than client-centric data
            </p>
            <p className="my-4">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium dynamically target high-payoff
              intellectual capital for customized technologies objectively
              integrate emerging core competencies before process-centric
              communities dramatically evisculate holistic innovation rather
              than client-centric data.
            </p>
            <p className="mb-3">
              Pellentesque vehicula eros neque, maximus mattis est sagittis
              Nulla facilisi. In sed pretium dynamically target high-payoff
              intellectual capital for customized technologies objectively
              integrate emerging core competencies before process-centric
              communities dramatically evisculate holistic innovation rather
              than client-centric data.
            </p>
            <div className="mt-4">
              {problemPoints.map((items) => (
                <div className="points">
                  <p>{items.data}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="quote-container">
            <p className="text-white">
              “The job market of the future will consist of those jobs that
              robots cannot perform. Our blue-collar work is pattern
              recognition, making sense of what you see. Gardeners will still
              have jobs because every garden is different.” “The job market of
              the future will consist of those jobs that robots cannot perform.
              Our blue-collar work is pattern recognition, making sense of what
              you see. Gardeners will still have jobs because every garden is
              different.”
            </p>
          </div>
          <div className="mt-5 pt-2">
            <div className="row">
              {questionsAnswers.map((items) => (
                <div className="col-lg-6 mb-3" key={items.id}>
                  <h4 className="text-black">
                    {items.id}.{items.title}
                  </h4>
                  <p>{items.para}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="user-comments pt-5">
            <h4 className="text-black">Comments:</h4>
            <div className="row pt-4">
              <div className="col-lg-6">
                <div className="scroll-container">
                  {Comments.map((items) => (
                    <div className="comments-section mb-5" key={items.id}>
                      <div className="d-flex gap-3">
                        <img
                          src={items.profile}
                          alt=""
                          className="img-fluid profile-img"
                        />
                        <div className="name-comments">
                          <div className="d-flex gap-3 align-items-baseline">
                            <h5>{items.name}</h5>
                            <span>.</span>
                            <p>{items.time}</p>
                          </div>
                          <img src={Rating} alt="" className="rating-sec" />
                          <p className="mt-2">{items.comment}</p>
                          <CommonButton
                            label="Reply"
                            bgColor="#D2042D"
                            color="white"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="form-container">
                  <h4 className="text-black mb-4">Leave a comment:</h4>
                  <form action="" className="d-flex flex-column gap-2">
                    <label>Name:</label>
                    <input type="text" />
                    <label>Email:</label>
                    <input type="text" />
                    <label>Message:</label>
                    <textarea type="text" rows={7} />
                    <div className="d-flex align-items-center gap-3 checkbox-sec">
                      <input type="checkbox" />
                      <p className="policy-sec">
                        I agree to the terms and conditions laid out in the
                        Privacy policy
                      </p>
                    </div>
                    <div>
                      <CommonButton
                        label="Submit"
                        bgColor="#D2042D"
                        color="white"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="relate-blogs">
            <div className="row justify-content-center">
              <div className="col-lg-6">
                <h4 className="side-lining text-center">Related Blogs</h4>
                <h2 className="text-center">Related blogs For you</h2>
              </div>
            </div>
            <div className="row pt-5">
              {blogData2.map((items) => (
                <div className="col-lg-4 mb-5" key={items.id}>
                  <div className="image-relative">
                    <img src={items.image} alt="" className="img-fluid" />
                    <div className="blog-detail-contain">
                      <div className="date-and-month2">
                        <div className="text-center">22</div>
                        <div className="text-center">May</div>
                      </div>

                      <div className="d-flex gap-2 align-items-center bg-white px-2 response-data">
                        <div className="blog-user">Admin</div>
                        <div className="comments">Comments</div>
                      </div>
                    </div>
                  </div>
                  <div className="pt-5 mt-2">
                    <h4 className="text-black">{items.title}</h4>
                    <p>{items.para}</p>
                    <div className="read-more">Read More</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
