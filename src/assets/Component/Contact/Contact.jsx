import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    // setLoading(true)
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      password: "",
      message: "",
    });
    setLoading(false)
  };

  return (
    <div className="w-[90%] bg-base-300 mx-auto p-8 md:my-2 rounded-md">
      <h2 className="text-sm text-center font-semibold">Contact Us</h2>
      <h2 className="text-3xl text-center font-semibold my-8">Make an Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div className="md:flex gap-3 ">
          <div className="w-1/2">
            <label htmlFor="name">Name:</label>
            <input
            className="w-full p-2 rounded-lg"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/2">
            <label htmlFor="email">Email:</label>
            <input
            className="w-full p-2 rounded-lg"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="w-full">
          <label htmlFor="message">Message:</label>
          <textarea
          className="w-full p-4 rounded-lg"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button className="w-full bg-green-500 p-2 rounded-lg mt-4 hover:bg-green-400 " type="submit"> {loading ? 'wait vai' : 'Submit'} </button>
      </form>
    </div>
  );
};

export default Contact;
