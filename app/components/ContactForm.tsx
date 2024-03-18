"use client";
import React, { useState, FormEvent } from "react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    budget: 7500, // Default value for price
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch("/api/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Failed to submit the data. Please try again.");
      }
    } catch (error: any) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  const getBudgetText = (budget: number) => {
    if (budget >= 3000 && budget <= 6000) {
      return "You can do it better. 😔";
    } else if (budget > 6000 && budget <= 14500) {
      return "Budgeting champ! You're crushing it! 😃";
    } else if (budget > 14500) {
      return "You're a financial rockstar! 😎";
    }
  };

  const displayBudget = (budget: number) => {
    return budget > 29500 ? "∞" : `€ ${budget}`;
  };

  return (
    <div className="form-wrapper">
      {error && <div style={{ color: "red" }}>{error}</div>}
      <form onSubmit={onSubmit} className="max-w-xl mx-auto relative z-10">
        <div className="flex items-center mb-5">
          <label
            htmlFor="name"
            className="w-20 inline-block text-left mr-4 text-gray-500"
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
            className="border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:placeholder-transparent focus:border-emerald-400"
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <label
            htmlFor="email"
            className="w-20 inline-block text-left mr-4 text-gray-500"
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
            className="border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:placeholder-transparent focus:border-emerald-400"
            required
          />
        </div>
        <div className="flex items-center">
          <label
            htmlFor="phone"
            className="w-20 inline-block text-left mr-4 text-gray-500"
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
            className="border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 outline-none focus:placeholder-transparent focus:border-emerald-400"
            required
          />
        </div>
        <div className="flex items-center mb-5">
          <label
            htmlFor="budget"
            className="w-20 inline-block text-left mr-4 text-gray-500"
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
            <div className="flex justify-between	">
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
            rows={6}
            placeholder="Enter your message"
            className="w-full border-b-2 border-gray-400 bg-transparent flex-1 py-2 placeholder-gray-300 focus:placeholder-transparent outline-none focus:border-emerald-400"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-emerald-400 hover:bg-emerald-600 font-semibold px-4 py-2 rounded"
          style={{
            color: "#003d27",
          }}
        >
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
