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
    <div className=" w-full min-h-screen  ">
      {/* cover image */}
      <div className="w-full h-full  ">
        <div className="w-full h-[40vh] overflow-hidden">
          <img
            src="https://www.hdwallpapers.in/download/abstract_cover_background_4k_hd-3840x2160.jpg"
            alt="cover"
            className="w-full h-full object-cover "
          />
        </div>
      </div>
      {/* profile info */}
      <div className="w-full h-full flex flex-col items-center justify-center gap-4  ">
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
