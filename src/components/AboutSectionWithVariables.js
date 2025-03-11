function AboutSectionWithVariables() {
  const sections = [
    {
      title: "Our Mission",
      description:
        "We strive to deliver the best services to our customers with utmost dedication.",
    },
    {
      title: "Our Vision",
      description:
        "To be the leading provider in our industry through innovation and excellence.",
    },
    {
      title: "Our Values",
      description:
        "Integrity, Excellence, and Customer Satisfaction drive our business forward.",
    },
    {
      title: "Our Team",
      description:
        "A group of passionate professionals committed to achieving great results.",
    },
    {
      title: "Our History",
      description:
        "Founded in 2010, we have grown to become a trusted name in the industry.",
    },
    {
      title: "Contact Us",
      description:
        "Reach out to us for inquiries, collaborations, or just to say hello!",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6 md:px-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        About Us
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
          >
            <h2 className="text-2xl font-semibold text-gray-700 mb-3">
              {section.title}
            </h2>
            <p className="text-gray-600">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default AboutSectionWithVariables;
