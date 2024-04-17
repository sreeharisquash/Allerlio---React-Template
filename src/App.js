import "./App.css";
import BaseLayout from "./modules/baselayout/BaseLayout";
import { useEffect, useState } from "react";
import GoToTop from "./assets/icons/GO TO TOP.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import Router from "./Routes/Router";
import RouterWrapper from "./modules/routerwrapper/RouterWrapper";

function App() {
  // function BackToTopButton() {
  //   const [backToTopButton, setBackToTopButton] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       if (window.scrollY > 100) {
  //         setBackToTopButton(true);
  //       } else {
  //         setBackToTopButton(false);
  //       }
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  //   const scrollUp = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: "smooth",
  //     });
  //   };

  //   useEffect(() => {
  //     Aos.init({ duration: 2000, once : true});
  //   }, []);


    return (
      <div className="back-to-top">
        <RouterWrapper/>
        {/* {backToTopButton && (
            <img
              src={GoToTop}
              alt=""
              className="btn-to-top"
              style={{
                position: "fixed",
                zIndex: "5000",
                bottom: "50px",
                right: "50px",
              }}
              onClick={scrollUp}
            />
        )} */}
      </div>
    );
  // }

  // return <BackToTopButton />;
}

export default App;
