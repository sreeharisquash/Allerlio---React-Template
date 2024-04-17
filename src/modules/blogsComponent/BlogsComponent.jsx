import React from "react";
import "./BlogsComponent.css";
import ProfileIcon from "../../assets/images/blogscompo/icons/profile.svg";
import CalenderIcon from "../../assets/images/blogscompo/icons/Calendar.svg";
import MessageIcon from "../../assets/images/blogscompo/icons/Chat.svg";

const BlogsComponent = ({ image, title, para }) => {
  const dateMsgData = [
    { id: "1", icon: ProfileIcon, data: "Admin" },
    { id: "2", icon: CalenderIcon, data: "12 Feb,2023" },
    { id: "3", icon: MessageIcon, data: "25" },
  ];
  return (
    <div className="blogs-container">
      <div class="card">
        <img src={image} class="card-img-top" alt="" />
        <div className="date-msg">
          {dateMsgData.map((items) => (
            <div className="contain-data-detail d-flex align-item-center" key={items.id}>
              <img src={items.icon} alt="" />
              <p>{items.data}</p>
            </div>
          ))}
        </div>
        <div class="card-body">
          <h6 class="card-title text-left">{title}</h6>
          <div className="underlining"></div>
          <p class="card-text mt-3">{para}</p>
          <div className="d-flex justify-content-center mb-3"></div>
          <div className="read-more">Read more</div>
        </div>
      </div>
    </div>
  );
};

export default BlogsComponent;
