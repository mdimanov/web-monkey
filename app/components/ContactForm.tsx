"use client";
import React, { useState, FormEvent } from "react";
import toast from "react-hot-toast";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  budget: 7500, // Default value for price
  message: "",
};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true); // Set isLoading to true before making the fetch request
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.status === 200) {
      setFormData(initialFormData);
      setIsLoading(false);
      toast.success(
        `Hey ${formData.name}, thanks for reaching out! Let's make some magic happen!`
      );
    }
  };

  const getBudgetText = (budget: number) => {
    if (budget >= 3000 && budget <= 6000) {
      return "You can do it better. 😔";
    } else if (budget > 6000 && budget <= 14500) {
      return "You're crushing it! 😃";
    } else if (budget > 14500) {
      return "WOW financial rockstar! 😎";
    }
  };

  const displayBudget = (budget: number) => {
    return budget > 29500 ? "∞" : `€ ${budget}`;
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmit} className="max-w-xl mx-auto relative z-10">
        <div className="flex items-center mb-5">
          <label
            htmlFor="name"
            className="w-20 inline-block text-left mr-4 text-gray-300"
          >
            Name
          </label>
          <input
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="Your name / Company"
            className="border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 placeholder-opacity-20 outline-none focus:placeholder-transparent focus:border-emerald-400"
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <label
            htmlFor="email"
            className="w-20 inline-block text-left mr-4 text-gray-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your.email@example.com"
            className="border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 placeholder-opacity-20 outline-none focus:placeholder-transparent focus:border-emerald-400"
            required
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="phone"
            className="w-20 inline-block text-left mr-4 text-gray-300"
          >
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="(e.g., +359 888 123 456)"
            className="border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 placeholder-opacity-20 outline-none focus:placeholder-transparent focus:border-emerald-400"
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <label
            htmlFor="budget"
            className="w-20 inline-block text-left mr-4 text-gray-300"
          >
            Budget
          </label>
          <div className="price-wrapper flex-1 mt-9">
            <input
              type="range"
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              min="3000"
              max="30000"
              step="500"
              className="w-full appearance-none bg-emerald-400 h-px rounded-md"
            />
            <div className="flex justify-between md:text-base text-sm">
              <span>{getBudgetText(formData.budget)}</span>
              <strong>{displayBudget(formData.budget)}</strong>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Enter your message"
            className="w-full border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 placeholder-opacity-20 focus:placeholder-transparent outline-none focus:border-emerald-400"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full flex justify-center bg-emerald-400 hover:bg-emerald-600 font-semibold px-4 py-2 rounded"
          style={{
            color: "#003d27",
          }}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin mr-2 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                />
              </svg>
              Submit
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
