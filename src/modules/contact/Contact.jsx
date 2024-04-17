import React from "react";
import "./Contact.css";
import BreadCrumbs from "../breadcrumbs/BreadCrumbs";
import GoogleMap from "../googlemap/GoogleMap";
import ContactPhoneIcon from "../../assets/images/contact/icons/contact-phn.svg";
import ContactMailIcon from "../../assets/images/contact/icons/contact-mail.svg";
import ContactLoc from "../../assets/images/contact/icons/contact-loc.svg";
import ContactForm from "../contactform/ContactForm";

const Contact = () => {
  const contactData = [
    { id: "1", icon: ContactPhoneIcon, title: "(629) 555-0129" },
    { id: "2", icon: ContactMailIcon, title: "info@example.com" },
    { id: "3", icon: ContactLoc, title: "6391 Elgin St. Celina, 10299" },
  ];
  return (
    <>
      <div className="breadrumb-container">
        <BreadCrumbs />
      </div>
      <div className="map-contain">
        <GoogleMap />
      </div>
      <div className="container">
        <div className="row" style={{ padding: "6.25rem 0 6.25rem 0" }}>
          <div className="col-lg-6">
            <h4 className="lining">Experts in field</h4>
            <div className="col-lg-10">
              <h2>Where We Are? Let's Find Out!</h2>
            </div>
            <p className="mt-3">
              Adipiscing commodo elit at imperdiet dui accumsan sit amet nulla.
              Vestibulum rhoncus est pellentesque elit ullamcorper dignissim.
              Sit amet commodo nulla facilisi nullam.Eget aliquet nibh praesent
              tristique magna sit amet purus gravida. Vel facilisis volutpat est
              velit egestas dui id ornare arcu. Sollicitudin nibh sit amet
              commodo nulla facilisi nullam.
            </p>
            <div className="mt-2">
              {contactData.map((items) => (
                <div
                  className="d-flex gap-2 align-items-baseline mb-3"
                  key={items.id}
                >
                  <img src={items.icon} alt="" />
                  <p>{items.title}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 pt-4">
            <ContactForm/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
