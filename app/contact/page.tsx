"use client";
import { useState } from "react";
import InputField from "@/components/InputField";
import { Button, Modal, ModalBody, ModalFooter } from "flowbite-react";
import { Spinner } from "flowbite-react";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "emailjs-com";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const AUTORESPONSE_TEMPLATE =
  process.env.NEXT_PUBLIC_EMAILJS_AUTORESPONSE_TEMPLATE!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

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

  const [success, setSuccess] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [modalContent, setModalContent] = useState("loading"); // Tracks modal state ('loading' or 'success')
  const [showModal, setShowModal] = useState(false); // Controls modal visibility

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        setShowModal(true);
        setModalContent("loading");
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (data.success) {
          // 2. Send email to Portfolio Owner
          await emailjs.send(
            SERVICE_ID,
            TEMPLATE_ID,
            {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
            },
            PUBLIC_KEY,
          );

          // 3. Auto-response to sender
          await emailjs.send(
            SERVICE_ID,
            AUTORESPONSE_TEMPLATE,
            {
              from_name: formData.name,
              to_email: formData.email,
            },
            PUBLIC_KEY,
          );

          setModalContent("success");
          setError("");
          setFormData({ name: "", email: "", message: "" });
          setErrors({ name: "", email: "", message: "" });
        } else {
          setError("Failed to send message. Please try again later.");
          setSuccess("");
        }
      } catch (err) {
        setShowModal(false);
        console.error(err);
      }
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <div className="">
        {/* Contact Header */}
        <div className="mx-auto mt-10 h-auto max-w-6xl p-1 py-20">
          <div className="flex h-[200px] items-center">
            <div className="w-full text-center">
              <h1 className="text-3xl font-bold text-purple-700 md:text-4xl dark:text-purple-500">
                Contact me
              </h1>
              <p className="mt-8 text-sm md:text-lg dark:text-white">
                Excited to build something awesome together — just drop a
                message and I’ll reply soon!
              </p>
            </div>
          </div>
          {success && <p className="text-green-600">{success}</p>}
          {error && <p className="text-red-600">{error}</p>}

          {/* Contact body*/}
          <div className="w-full">
            <div className="mx-auto h-auto max-w-3xl">
              <div className="mx-auto grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1 p-2">
                {/* Contact Form*/}
                <div className="rounded-lg bg-gray-100 md:p-10 p-4  shadow-xl dark:bg-gray-700 dark:text-white">
                  <form
                    onSubmit={handleSubmit}
                    className="mx-auto space-y-6 text-center"
                  >
                    <div>
                      <label className="text-md md:text-xl">Full Name</label>

                      <InputField
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        error={errors.name}
                      />
                    </div>
                    <div>
                      <label className="text-md md:text-xl">
                        Email Address
                      </label>

                      <InputField
                        type="text"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        error={errors.email}
                      />
                    </div>
                    <div>
                      <label className="text-md md:text-xl">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        className={`text-md mt-2 h-48 w-full resize-none rounded-lg border border-gray-500 p-3 outline-none focus:ring-3 focus:ring-purple-700 ${
                          errors.message
                            ? "border-red-600 focus:ring-red-600"
                            : "border-gray-300 focus:ring-blue-800"
                        }`}
                      ></textarea>
                      {errors.message && (
                        <p className="text-center text-[14px] text-red-700">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="text-md w-full cursor-pointer rounded-lg bg-purple-700 p-4 font-bold text-white hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 md:text-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={showModal} size="md">
        <ModalBody className="dark:bg-gray-700">
          {modalContent === "loading" ? (
            <div className="mx-auto flex max-w-xs flex-col items-center justify-center space-y-6  p-6">
              <Spinner
                aria-label="Loading spinner"
                size="xl"
                color="purple"
                className="animate-spin"
              />
              <p className="text-lg font-medium text-purple-700 dark:text-purple-500">
                Sending your message...
              </p>
              <p className="text-sm text-purple-500 italic dark:text-purple-300 text-center">
                Please wait a moment while we process your request.
              </p>
            </div>
          ) : (
            <div className="mx-auto max-w-md p-6 text-center dark:bg-gray-700">
              <FaCheckCircle
                size={60}
                className="mx-auto mb-4 text-green-600 dark:text-green-400"
              />
              <h2 className="text-2xl font-bold text-green-700 dark:text-green-400">
                Message Sent!
              </h2>
              <p className="mt-2 text-green-700 dark:text-white">
                Thank you for reaching out. I have received your message and
                will get back to you as soon as possible.
              </p>
              <p className="mt-1 text-sm text-green-600 dark:text-white">Have a great day!</p>
            </div>
          )}
        </ModalBody>
        <ModalFooter>
          {modalContent === "success" && (
            <Button
              className="cursor-pointer dark:bg-purple-500 dark:hover:bg-purple-600"
              color="purple"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          )}
        </ModalFooter>
      </Modal>
    </>
  );
}
