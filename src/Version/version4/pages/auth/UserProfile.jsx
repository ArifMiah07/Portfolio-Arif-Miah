import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function UserProfile(){

    const {user} = useContext(AuthContext) ;

    return(
        <div className=" w-full min-h-screen  ">
            Well come back {user?.displayName}
        </div>
    )
}