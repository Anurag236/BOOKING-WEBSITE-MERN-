import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      url: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg",
      title: "Pizza",
    },
    {
      id: 2,
      url: "https://insanelygoodrecipes.com/wp-content/uploads/2020/05/Burger-with-fries-1024x536.png",
      title: "Burger",
    },
    {
      id: 3,
      url: "https://www.thespruceeats.com/thmb/UnVh_-znw7ikMUciZIx5sNqBtTU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/steamed-momos-wontons-1957616-hero-01-1c59e22bad0347daa8f0dfe12894bc3c.jpg",
      title: "Momos",
    },
    {
      id: 4,
      url: "./birthday1.jpg",
      title: "We Offer Birthday Parties",
    },
    {
      id: 5,
      url: "https://cdn.vox-cdn.com/thumbor/5d_RtADj8ncnVqh-afV3mU-XQv0=/0x0:1600x1067/1200x900/filters:focal(672x406:928x662)/cdn.vox-cdn.com/uploads/chorus_image/image/57698831/51951042270_78ea1e8590_h.7.jpg",
      title: "Our Premium Seatings",
    },
    {
      id: 6,
      url: "https://media.istockphoto.com/id/1181396290/photo/people-laughing-at-dinner-table.jpg?s=612x612&w=0&k=20&c=6Vyn5ppOp9fLqOeVKL9KCWfNYS69_SchgiOyviVAVuM=",
      title: "We Offer Cocktail Parties",
    },
    {
      id: 7,
      url: "https://curlytales.com/wp-content/uploads/2019/05/ayubs-mumbai.jpg",
      title: "Panner Tikka",
    },
    {
      id: 8,
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjPRVM_kiN-kYzvqx1GGYw8A6dSxUaFUIIQ&usqp=CAU",
      title: "Dosa",
    },
    {
      id: 9,
      url: "https://www.eggs.ca/assets/RecipeThumbs/EFC-Egg-Salad-Sandwich-HERO-1280x720.jpg",
      title : "Sandwich",
    },
  ];
  return (
    <>
      <div className="services container">
        <h2>OUR SERVICES</h2>
        <div className="banner">
          {services.map((element) => {
            return (
              <div className="item" key={element.id}>
                <h3>{element.title}</h3>
                <img src={element.url} alt={element.title} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Services;
