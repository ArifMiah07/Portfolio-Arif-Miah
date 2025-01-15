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
      <section className="lg:col-span-3 lg:w-[330px] bg-[#60A15680] p-5">
        <div className="lg:w-[270px] bg-[#ffffbb] ">
          <LeftSideBar></LeftSideBar>
        </div>
      </section>
      {/* right */}
      <section className="lg:col-span-9 w-full drop-shadow-lg shadow-lg bg-[#] p-1">
        <ScrollContainer>
          <div className="bg-[#] lg:w-full  mb-2 p-1 ">
            {/* content container */}
            <div className="w-full p-5 drop-shadow-lg shadow-lg bg-[#] flex flex-col items-center gap-5 ">
              {/* top */}
              <div className="bg-[#] w-full flex flex-col p-5 ">
                {/* heading */}
                <div className="bg-[#F5F5F5] w-full flex flex-col items-center ">
                  <h1 className="text-center text-[48px]">Get in Touch</h1>
                  <h2 className="text-center text-[#1F2937]  text-[24px] mb-4">
                    I&apos;m always open to new opportunities and interesting
                    projects.
                  </h2>
                </div>
                {/* content */}
                <div className="w-full">
                  <form onSubmit={handleSubmit} className="w-full">
                    <div className="w-full h-full p-5 bg-[#F5F5F5] flex flex-col gap-5">
                      <div className="w-full flex flex-col lg:flex-row gap-5">
                        <input
                          className=" input-field border border-[#D1D5DB] font-medium text-[19px] hover:text-black hover:bg-[#fff] w-full outline-none p-3"
                          placeholder="Your Name"
                          type="text"
                          name="name"
                        />
                        <input
                          className=" input-field border border-[#D1D5DB] bg-[#fff] w-full outline-none p-3"
                          placeholder="Your Email"
                          type="email"
                          name="email"
                        />
                      </div>

                      <div className="w-full">
                        <textarea
                          className="input-field border border-[#D1D5DB] bg-[#fff] w-full h-[160px] outline-none p-3 "
                          placeholder="Write Your Message"
                          name="message"
                          id="message"></textarea>
                      </div>

                      <div className="w-full input-field border border-[#D1D5DB] bg-[#fff] ">
                        <button type="submit " className="w-full bg-[#3B82F6] text-white p-3">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* down */}
              <div className="bg-[#] w-full p-5">
                <div className="bg-[#F5F5F5] flex flex-col items-center justify-center p-5 gap-5 ">
                  {/* heading */}
                  <div className="w-full flex flex-col items-center p-5 bg-[#fff] ">
                    <h1 className="text-center text-[24px]">
                      Contact Information
                    </h1>
                    <p className="text-center text-[17px]">
                      Feel free to reach out through any of these channels. I
                      typically respond within 24 hours.
                    </p>
                  </div>
                  {/* content */}
                  <div className="w-full p-5 bg-[#fff] flex flex-col items-center gap-3 ">
                    {/* email */}
                    <div className="flex flex-row items-center justify-center gap-1">
                      <span>
                        <SiGmail></SiGmail>
                      </span>
                      <p>arifmiah.me101@gmail.com</p>
                    </div>
                    {/* icons */}
                    <div className="w-fit flex flex-row items-center text-[21px] gap-4 ">
                      <span>
                        
                        <Link to={"https://github.com/arifmiah07"}>
                          <FaGithub></FaGithub>
                        </Link>
                      </span>
                      <span>
                        <Link to={"https://www.facebook.com/"}>
                          <FaFacebook></FaFacebook>
                        </Link>
                      </span>
                      <span>
                        <Link to={'https://www.instagram.com/'}>
                          <FaInstagram></FaInstagram>
                        </Link>
                      </span>
                      <span>
                        <Link to={'https://www.linkedin.com/in/arifmiah01/'}>
                        <FaLinkedin></FaLinkedin>
                        </Link>
                      </span>
                      <span>
                        <Link to={'https://x.com/ArifMiah01'}>
                        <FaSquareXTwitter></FaSquareXTwitter>
                        </Link>
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
