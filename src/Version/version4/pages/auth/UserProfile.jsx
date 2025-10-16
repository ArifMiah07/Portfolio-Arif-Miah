import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function UserProfile() {
  const { user } = useContext(AuthContext);
  if (user !== null) {
    const userData = user.providerData;
    console.log("user data: ", userData);
    console.log("user data: ", userData.displayName);
    console.log("user data: ", userData.email);
    console.log("user data: ", userData.phoneNumber);
    console.log("user data: ", userData.photoURL);
    console.log("user data: ", userData.providerId);
    console.log("user data: ", userData.uid);
  }
  /***
   * displayName: "David Meow"
   * email: "david_meow@gmail.com"
   * phoneNumber: null photoURL: null
   * providerId: "password"
   * uid: "david_meow@gmail.com"
   *
   *
   */

  return (
    <div className=" flex flex-col items-center w-full min-h-screen  ">
      {/* cover image */}
      <div className="  w-full h-full">
        <div className=" flex items-center justify-center w-full h-[40vh] overflow-hidden">
          <img
            src="https://www.hdwallpapers.in/download/abstract_cover_background_4k_hd-3840x2160.jpg"
            alt="cover"
            className="w-[80vw] h-full object-cover"
          />
        </div>
      </div>

      {/* profile info */}
      <div className=" w-[80vw]  h-full flex flex-col items-center justify-center gap-0 ">
        <div className="  flex flex-row w-full h-[120px] relative  bg-black/95  ">
          {/* profile image */}
          <div className="absolute bottom-10 left-6 w-[160px] h-[160px] rounded-full bg-black">
            <img
              src={`${
                user?.photoURL ? user?.photoURL : "/placeholder-profile.svg"
              } `}
              alt=""
            />
          </div>
          <div className="w-full h-full flex flex-row ">
            <div className=" w-[260px] p-3 ">empty</div>
            {/* user info */}
            <div className=" text-white  w-full h-full flex p-3">
              <div className="flex flex-col">
                <p className="text-2xl font-bold text-white">
                  {user?.displayName ? user.displayName : "name not found"}
                </p>
                <p>follower {"117"}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full min-h-screen bg-black/90 text-white border-t  ">
          <nav className="w-full ">
            <CustomTabs />
            {/* <ul className="flex items-center gap-6 p-2">
              <li>Feed</li>
              <li>Comments</li>
              <li>Reacts</li>
              <li>Shared</li>
            </ul> */}
          </nav>
        </div>
        <p>
          Welcome Back Mr.{" "}
          {user?.displayName ? user.displayName : "name not found"}
        </p>
        <p>Email: {user?.email ? user.email : "email not fount"}</p>
        <p>
          Profile Image:
          {user?.photoURL ? user.photoURL : "photo URL not found"}
        </p>
        <p>
          Phone Number:
          {user?.phoneNumber ? user.phoneNumber : "phone Number not found"}
        </p>
      </div>
      <div>{/* uno */}</div>
    </div>
  );
}

import { useState } from "react";

export function CustomTabs() {
  const [activeTab, setActiveTab] = useState("feed");

  const tabs = [
    { id: "feed", label: "Feed" },
    { id: "comments", label: "Comments" },
    { id: "reacts", label: "Reacts" },
    { id: "shared", label: "Shared" },
    { id: "saved", label: "Saved" },
  ];

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Tab buttons */}
      <div className="flex justify-around border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-medium transition-all duration-200
              ${
                activeTab === tab.id
                  ? "border-b-2 border-blue-500 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="p-4 text-gray-700">
        {activeTab === "feed" && (
          <div>
            <h1>📰 Feed content here...</h1>
            <section>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <div className="text-white">
                      <p>Post number {index + 1}</p>
                    </div>
                  </div>
                ))}
            </section>
          </div>
        )}
        {activeTab === "comments" && (
          <div>
            <h1>💬 Comments section...</h1>
            <section>
              {Array(10)
                .fill(0)
                .map((_, index) => (
                  <div key={index}>
                    <div className="text-white">
                      <p>Comment number {index + 1}</p>
                    </div>
                  </div>
                ))}
            </section>
          </div>
        )}
        {activeTab === "reacts" && <div>👍 Reactions list...</div>}
        {activeTab === "shared" && <div>🔁 Shared posts...</div>}
        {activeTab === "saved" && <div>🔁 Saved posts...</div>}
      </div>
    </div>
  );
}
