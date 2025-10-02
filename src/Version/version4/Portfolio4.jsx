/** sorry that forgot what i did last time and i did documented and as it possible to create a new one instead of reading all of these dumb code written myself.
*/
import MainLayout from "./layouts/MainLayout";

 

// Do : This page will me root page of version 4 and it page will show a landing page

export default function Portfolio4(){
    // write all the functionalities with proper documentation even if with comments at/on here
    return(
        // this the component
        <div className=" min-h-screen border-4 box-border border-red-500 " style={{width: 'calc(100vw - 10)'}} >
            {/* this is the root page */}
            <MainLayout />
        </div>
    )
}