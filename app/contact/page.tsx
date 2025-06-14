"use client";
import { FaEnvelope } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import InputField from "@/components/InputField";

type formData = {
  name: string;
  email: string;
  message: string;
};

type formErrors = {
  name: string;
  email: string;
  message: string;
};

type formField = "name" | "email" | "message";

export default function Contact() {
  const [formData, setFormData] = useState<formData>({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<formErrors>({
    name: "",
    email: "",
    message: "",
  });

  const validateField = (name: string, value: string) => {
    let message = "";

    switch (name) {
      case "name":
        if (!value) message = "Name is required";
        else if (value.length < 2)
          message = "Name should be at least 2 characters";
        break;

      case "email":
        if (!value) message = "Email is required";
        else if (!/\S+@\S+\.\S+/.test(value))
          message = "Please enter a valid email";
        break;

      case "message":
        if (!value) message = "Message is required";
        else if (value.length < 30)
          message = "Message should be at least 30 characters";
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: message }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate the field immediately for format errors
    validateField(name, value);
  };

  const validateForm = (): boolean => {
    let isValid = true;

    Object.entries(formData).forEach(([key, value]) => {
      validateField(key, value);
      if (value === "" || errors[key as formField]) {
        isValid = false;
      }
    });

    return isValid;
  };

  return (
    <>
      <div className="dark:bg-gray-800">
        {/* Contact Header */}
        <div className="mx-auto mt-10 h-auto max-w-5xl p-1 py-20">
          <div className="flex h-[200px] items-center">
            <div className="w-full text-center">
              <h1 className="text-3xl font-bold text-purple-700 md:text-3xl lg:text-5xl">
                Contact me
              </h1>
              <p className="mt-4 text-lg dark:text-white">
                Have a project in mind? let's connect! Fill out the form below
                and I Will get back to you so!
              </p>
            </div>
          </div>

          {/* Contact body*/}
          <div className="w-full">
            <div className="mx-auto h-auto max-w-4xl p-4">
              <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                {/* Contact Form*/}
                <div className="rounded-lg bg-gray-100 p-4 shadow-xl dark:bg-gray-300">
                  <form className="mx-auto w-3/4 space-y-6 p-4 text-center">
                    <div>
                      <label className="text-xl">Name</label>

                      <InputField
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        error={errors.name}
                      />
                    </div>
                    <div>
                      <label className="text-xl">Email</label>

                      <InputField
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        error={errors.email}
                      />
                    </div>
                    <div>
                      <label className="text-xl">Message</label>

                      <textarea
                        id="message"
                        name="message"
                        className="text-md mt-2 h-48 w-full resize-none rounded-lg border border-gray-400 bg-gray-100 p-3 outline-none focus:ring-3 focus:ring-purple-700 dark:bg-gray-300"
                        placeholder="Write your message here"
                        onChange={handleChange}
                        value={formData.message}
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full cursor-pointer rounded-lg bg-purple-700 p-4 text-xl font-bold text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
                {/* Contact Information*/}
                <div className="mt-20 flex justify-center gap-30 space-y-16">
                  <div className="text-center">
                    <FaEnvelope
                      className="mx-auto rounded-lg text-purple-700"
                      size={60}
                    />
                    <h1 className="font-bold dark:text-white">Email</h1>
                    <p className="mt-4 font-bold text-purple-700">
                      <a
                        href="mailto:izzidinsamara@gmail.com"
                        className="underline hover:no-underline"
                      >
                        izzidinsamara@gmail.com
                      </a>
                    </p>
                  </div>
                  <div className="text-center">
                    <FaLinkedin
                      className="mx-auto rounded-lg p-2 text-purple-700"
                      size={60}
                    />
                    <h1 className="font-bold dark:text-white">Linkedin</h1>
                    <p className="mt-4 font-bold text-purple-700">
                      <a
                        href="https://www.linkedin.com/in/izzeddin-samara"
                        className="underline hover:no-underline"
                      >
                        izzeddin-samara
                      </a>
                    </p>
                  </div>
                  <div className="text-center">
                    <FaWhatsapp
                      className="mx-auto rounded-lg p-2 text-purple-700"
                      size={60}
                    />
                    <h1 className="font-bold dark:text-white">Whatsapp</h1>
                    <p className="mt-4 font-bold text-purple-700">
                      <a
                        href="https://api.whatsapp.com/send/?phone=00972595484832&text&type=phone_number&app_absent=0"
                        className="underline hover:no-underline"
                      >
                        +972 59-548-4832
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
