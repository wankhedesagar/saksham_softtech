import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import add from '../Images/map.png';
import contact from '../Images/phone-call.png';
import mail from '../Images/gmail.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/auth/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        setResponseMessage("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
        toast.success("Your Message Sent Successfully, We'll Connect Shortly");
      } else {
        setResponseMessage(data.error || "Something went wrong!");
        toast.error("Error!! Something Went Wrong");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setResponseMessage("Server error. Please try again later.");
      toast.error("Error!! Something Went Wrong");
    }
  };

  return (
    <div className="w-full px-4 md:px-10 lg:px-20">
      {/* Section Title */}
      <div className="text-center my-10" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-gray-800 transition-transform duration-300 hover:scale-110">
          Contact Us
        </h2>

        <p className="text-gray-600 text-2xl  mt-2">
          "Let's connect! Get in touch for Support or Collaboration."
        </p>
      </div>

      {/* Info Cards */}
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Address Section */}
        <div
          className="bg-gray-100 border border-gray-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={add} alt="Address Icon" className="w-12 h-12 mb-3" />
          <h3 className="text-lg font-semibold">Address</h3>
          <p className="px-4">
            Sr No. 19/1, Hingne Home Colony, Karve Nagar, Pune-411052
          </p>
        </div>

        {/* Call Us Section */}
        <div
          className="bg-gray-100 border border-gray-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={contact} alt="Call Icon" className="w-12 h-12 mb-3" />
          <h3 className="text-lg font-semibold">Call Us</h3>
          <p>+91 8010540275</p>
        </div>


        {/* Email Section */}
        <div
          className="bg-gray-100 border border-gray-300 shadow-lg p-6 rounded-lg flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src={mail} alt="Mail Icon" className="w-12 h-12 mb-3" />
          <h3 className="text-lg font-semibold">Email Us</h3>
          <p>sakshamsoftech@gmail.com</p>
        </div>
      </div>
{/* Contact Section */}
{/* Contact Section */}
<div className="bg-gray-100  rounded-lg shadow-lg">
 

  {/* Responsive Grid */}
  <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-6 mt-7 mb-7">
    {/* Google Map */}
    <div className="h-[300px] md:h-full">
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d945.9656249085289!2d73.80937381536236!3d18.489886455241535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0f70c84df9%3A0x393a5082750120cd!2sSai%20Ambar%20Society%2C%20Hingane%20Home%20Colony%2C%20Karve%20Nagar!5e0!3m2!1sen!2sin!4v1741283473361!5m2!1sen!2sin"
        className="w-full h-full rounded-lg shadow-lg border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      ></iframe>
   
      
    </div>
    {/* Contact Form */}
    <div className="h-auto md:h-full">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 shadow-lg rounded-lg h-auto md:h-full flex flex-col justify-between"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="text"
          name="subject"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-300 mb-4"
          rows="6"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <div className="text-center">
          {loading && <div className="text-blue-500">Sending...</div>}
          {responseMessage && <div className="text-green-500">{responseMessage}</div>}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>

    

  </div>
</div>



      <ToastContainer />
    </div>
  );
};

export default ContactUs;
