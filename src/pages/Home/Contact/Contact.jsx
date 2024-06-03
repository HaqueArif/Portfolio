import { useRef } from "react";
import emailjs from "@emailjs/browser";
import sendEmailLottie from "../../../assets/G9jePOejUK.json";
import Lottie from "lottie-react";
import { toast } from "sonner";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3tifahh",
        "template_5lby9gf",
        form.current,
        "hd6IHChiOtH5DgvVd"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            toast("Email sent successfully");
            form.current.reset();
          }
        },
        (error) => {
          if (error) {
            toast("Something went wrong, Try again later");
          }
        }
      );
  };

  return (
    <div className="px-3 md:px-20 lg:px-60  my-40">
      <h2
        data-aos="fade-right"
        data-aos-duration="2000"
        className="text-center md:text-left text-3xl md:text-5xl font-bold mb-5"
      >
        Contact Me
      </h2>
      <p
        data-aos="fade-left"
        data-aos-duration="2000"
        className="text-center md:text-left"
      >
        Thank you for visiting my portfolio! I'd love to hear from you regarding
        any questions, opportunities, or collaborations. You can reach me
        directly at [haquearif143@gmail.com] or by using the contact form below.
        Let's connect and create something amazing together!
      </p>
      <div className="grid lg:grid-cols-2">
        <div className="w-60 md:w-96 lg:w-full mx-auto mb-3">
          <Lottie animationData={sendEmailLottie} loop={true} />
        </div>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-neutral rounded-2xl px-5 py-10"
        >
          <label>Name</label>
          <input
            className="w-full block bg-[#20262e] px-2 py-3 rounded-lg mb-3"
            type="text"
            name="user_name"
          />
          <label>Email</label>
          <input
            className="w-full block bg-[#20262e] px-2 py-3 rounded-lg mb-3"
            type="email"
            name="user_email"
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            className="w-full block  bg-[#20262e] px-2 py-3 rounded-lg mb-3"
          />
          <input
            className=" bg-accent text-white px-5 py-2 rounded-2xl hover:rounded-3xl hover:border-b duration-500"
            type="submit"
            value="Send"
          />
        </form>
      </div>
      <div></div>
    </div>
  );
};

export default Contact;
