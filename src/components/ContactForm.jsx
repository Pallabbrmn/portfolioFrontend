import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Email sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      alert("Failed to send email.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="text-2xl border-b-2 outline-none px-2 py-4"
            type="text"
            placeholder="Name"
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="text-2xl border-b-2 outline-none px-2 py-4"
            type="text"
            placeholder="Email "
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          className="text-2xl border-b-2 outline-none px-2 py-4 w-full md:w-full"
          placeholder="Type your message."
          rows="5"
        ></textarea>
        <button className="text-3xl bg-black rounded-full text-white px-10 py-1">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
