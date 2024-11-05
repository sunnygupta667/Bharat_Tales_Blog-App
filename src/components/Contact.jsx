// src/components/Contact.jsx
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    // Display success message without backend integration
    toast.success("Your message has been sent!");
    reset(); // Reset the form fields on success
  };

  return (
    <>
     <div
      name="Contact"
      className="max-w-screen-lg mx-auto bg-[#0b0b21] p-8  mb-10 rounded-lg shadow-md mt-10"
    >
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Contact Me</h1>
      <p className="text-white mb-8 text-center">
        I'd love to hear from you! Fill out the form below and let's get in touch.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        <div className="flex flex-col">
          <label className="text-white mb-2" htmlFor="name">Full Name</label>
          <input
            {...register("name", { required: "This field is required" })}
            className={`p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
            id="name"
            type="text"
            placeholder="Enter your full name"
          />
          {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2" htmlFor="email">Email Address</label>
          <input
            {...register("email", { 
              required: "This field is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Email is not valid"
              }
            })}
            className={`p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            id="email"
            type="email"
            placeholder="Enter your email address"
          />
          {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
        </div>

        <div className="flex flex-col">
          <label className="text-white mb-2" htmlFor="message">Message</label>
          <textarea
            {...register("message", { required: "This field is required" })}
            className={`p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
            id="message"
            placeholder="Enter your message"
            rows="4"
          />
          {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold rounded-lg py-3 hover:shadow-lg transition duration-300"
        >
          Send Message
        </button>
      </form>
      
    </div>
    </>
  );
}

export default Contact;
