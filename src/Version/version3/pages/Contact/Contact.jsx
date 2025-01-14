import { ScrollContainer } from "react-nice-scroll";
import "react-nice-scroll/dist/styles.css";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import { useState } from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name?.value || ""; // Optional chaining for safety
    const email = form.email?.value || "";
    const message = form.message?.value || "";

    console.log(name, email, message);
  };

  return (
    <div className="bg-red-50 mx-auto w-full h-screen grid grid-cols-1 lg:grid-cols-12 lg:overflow-hidden ">
      {/* left */}
      <section className="lg:col-span-3 lg:w-[330px] bg-[#1B8B09] p-5">
        <div className="lg:w-[270px] bg-[#60A15680] ">
          <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full  bg-[#FF0088] p-2 ">
        <ScrollContainer>
          <div className="bg-[#D663A080] lg:w-[930px]  p-5 ">
            {/* content container */}
            <div className="w-full p-5 bg-[#D9D9D9] flex flex-col items-center gap-5 ">
              {/* top */}
              <div className="bg-[#D9D5D5] w-full flex flex-col p-5 ">
                {/* heading */}
                <div className="bg-[#D9D5D5] w-full flex flex-col items-center ">
                  <h1 className="text-center text-[48px]">Get in Touch</h1>
                  <h2 className="text-center text-[24px] mb-4">
                    I&apos;m always open to new opportunities and interesting
                    projects.
                  </h2>
                </div>
                {/* content */}
                <div className="w-full">
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="w-full h-full p-5 bg-[#EEEDEA] flex flex-col gap-5">
                      <div className="w-full flex flex-col lg:flex-row gap-5">
                        <input
                          className=" bg-[#D9D9D9] hover:bg-[#fff] w-full outline-none p-3"
                          placeholder="Your Name"
                          type="text"
                          name="name"
                        />
                        <input
                          className=" bg-[#D9D9D9] hover:bg-[#fff] w-full outline-none p-3"
                          placeholder="Your Email"
                          type="email"
                          name="email"
                        />
                      </div>

                      <div className="w-full">
                        <textarea
                          className="bg-[#D9D9D9] hover:bg-[#fff] w-full h-[160px] outline-none p-3 "
                          placeholder="Write Your Message"
                          name="message"
                          id="message"></textarea>
                      </div>

                      <div className="w-full bg-[#D9D9D9] hover:bg-[#fff] ">
                        <button type="submit " className="w-full p-3">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* down */}
              <div className="bg-[#D9D5D5] w-full p-5">
                <div className="bg-[#EEEDEA] flex flex-col items-center justify-center p-5 gap-5 ">
                  {/* heading */}
                  <div className="w-full flex flex-col items-center p-5 bg-[#D9D9D9] ">
                    <h1 className="text-center text-[24px]">
                      Contact Information
                    </h1>
                    <p className="text-center text-[17px]">
                      Feel free to reach out through any of these channels. I
                      typically respond within 24 hours.
                    </p>
                  </div>
                  {/* content */}
                  <div className="p-5 bg-[#D9D9D9] flex flex-col items-center gap-4 ">
                    {/* email */}
                    <div className="flex flex-row items-center justify-center gap-1">
                      <span>
                        <SiGmail></SiGmail>{" "}
                      </span>
                      <p>arifmiah.me101@gmail.com</p>
                    </div>
                    {/* icons */}
                    <div>
                      <span>
                        {" "}
                        <Link to={"https://github.com/arifmiah07"}>
                          <FaGithub></FaGithub>{" "}
                        </Link>
                      </span>
                      <span>
                        {" "}
                        <FaFacebook></FaFacebook>{" "}
                      </span>
                      <span>
                        {" "}
                        <FaInstagram></FaInstagram>{" "}
                      </span>
                      <span>
                        {" "}
                        <FaLinkedin></FaLinkedin>{" "}
                      </span>
                      <span>
                        {" "}
                        <FaSquareXTwitter></FaSquareXTwitter>{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollContainer>
      </section>
    </div>
  );
};

export default Contact;
