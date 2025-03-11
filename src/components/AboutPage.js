import React from "react";
import { useState, useEffect } from "react";
import { UserPlus, Briefcase, MessageSquare } from "lucide-react";
import sagar from "../images/sagar.jpg";
import dhiraj from "../images/dhiraj.jpg";
import akanksha from "../images/akanksha.jpg";
import swati from "../images/swati.jpg";
import anjali from "../images/anjali.jpg";
import krushna from "../images/krushna.png";
import office from "../images/office.jpg";
import Aaditi from "../images/Aaditi.jpg";
import Ankita from "../images/Ankita.jpg";
import Siddhesh from "../images/Siddhesh.jpg";
import Neeleshsir from "../images/Neeleshsir.jpg";
import LokeshSir from "../images/LokeshSir.jpg";
import Kalyanimam2 from "../images/Kalyanimam2.jpg";

export default function AboutPage() {
  const [customers, setCustomers] = useState(0);
  const [services, setServices] = useState(0);
  const [feedbacks, setFeedbacks] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCustomers((prev) => prev + Math.floor(Math.random() * 5));
      setServices((prev) => prev + Math.floor(Math.random() * 3));
      setFeedbacks((prev) => prev + Math.floor(Math.random() * 4));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-50">
      {/* Hero Section */}
      <div className="relative flex justify-center items-center">
        <img
          src={office}
          alt="Office"
          className="h-[400px] w-full object-cover"
        />
        <div className="absolute bg-gradient-to-r from-blue-600 to-indigo-500 p-6 rounded-md shadow-lg max-w-[90%] text-center">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold">
            Teamwork Makes the Dream Work
          </h1>
        </div>
      </div>

      <section className="py-16 px-8 text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Kalyani Ajalkar",
              role: "Founder President",
              img: Kalyanimam2,
            },
            {
              name: "Lokesh Ajalkar",
              role: "Chief Executive Officer",
              img: LokeshSir,
            },
            {
              name: "Neelesh Nidhalkar",
              role: "Legal Adviser",
              img: Neeleshsir,
            },
          ].map((Mainmember, ind) => (
            <div
              key={ind}
              className="py-4 rounded-md w-92 h-full shadow-md  text-center"
            >
              <img
                className="w-72 h-56 mx-auto mb-4"
                // className="w-72 h-56 object-cover rounded-md shadow-lg"
                src={Mainmember.img}
                alt={Mainmember.name}
              />
              <h3 className="text-2xl font-bold text-gray-800">
                {Mainmember.name}
              </h3>
              <p className="text-gray-700 font-medium text-xl">
                {Mainmember.role}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-8 px-8 text-center">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-8">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { name: "Sagar Wankhede", role: "Team Lead", img: sagar },
            { name: "Dhiraj Patil", role: "Team Lead", img: dhiraj },
            { name: "Aaditi Dagade", role: "Human Resources", img: Aaditi },
            {
              name: "Akanksha Dhekane",
              role: "Senior Developer",
              img: akanksha,
            },
            { name: "Swati Mohite", role: "Senior Developer", img: swati },
            { name: "Anjali Kondulkar", role: "Junior Developer", img: anjali },
            {
              name: "Krushna Chaugule",
              role: "Junior Developer",
              img: krushna,
            },
            { name: "Ankita Nalawade", role: "Junior Developer", img: Ankita },
            {
              name: "Siddhesh Dhokare",
              role: "Junior Developer",
              img: Siddhesh,
            },
          ].map((member, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-xl bg-white border-l-4 border-indigo-500"
            >
              <img
                className="w-32 h-32 rounded-full mx-auto  mb-4 border border-black"
                src={member.img}
                alt={member.name}
              />
              <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
              <p className="text-gray-700 font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="flex flex-col items-center justify-center min-h-96 gap-6 md:flex-row">
        {/* Total Customers Card */}
        <div className="w-80 p-6 shadow-lg rounded-2xl bg-white text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Total Customers
          </h2>
          <p className="text-4xl font-bold text-blue-600 mt-2">{customers}</p>
          <div className="mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2"
              onClick={() => setCustomers(customers + 1)}
            >
              <UserPlus size={20} /> Add Customer
            </button>
          </div>
        </div>

        {/* Total Services Card */}
        <div className="w-80 p-6 shadow-lg rounded-2xl bg-white text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Total Services
          </h2>
          <p className="text-4xl font-bold text-green-600 mt-2">{services}</p>
          <div className="mt-4">
            <button
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2"
              onClick={() => setServices(services + 1)}
            >
              <Briefcase size={20} /> Add Service
            </button>
          </div>
        </div>

        {/* Total Feedbacks Card */}
        <div className="w-80 p-6 shadow-lg rounded-2xl bg-white text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Total Feedbacks
          </h2>
          <p className="text-4xl font-bold text-red-600 mt-2">{feedbacks}</p>
          <div className="mt-4">
            <button
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-all flex items-center justify-center gap-2"
              onClick={() => setFeedbacks(feedbacks + 1)}
            >
              <MessageSquare size={20} /> Add Feedback
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
