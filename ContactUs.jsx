import { CiMail } from "react-icons/ci";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { CiLocationOn } from "react-icons/ci";


export default function ContactUs()
{
    return(
        <>
        <div className="bg-[#131313] min-h-screen text-white font-poppins">
            <br /> <br /><br /><br /><br />

           
                <h1 className="text-center text-5xl px-2 py-2 ">Contact Us</h1>
               
                <div className="flex space-x-2 px-2 py-2 mx-8 my-8 text-3xl justify-center align-center">
            
                <div className="mx-2 my-2 text-lg flex items-center justify-center  ">
                 <div className="mx-2 my-6"> <CiMail/></div>
                
                <div> Mail : info@rhyno.in</div>
                </div>
                <div className="mx-2 my-2 text-lg flex items-center justify-center  ">
                   <span className="mx-2 my-6 "><TbDeviceLandlinePhone/></span> 
                <p>Mobile no.: +91-9023987528</p>
                </div>
                <div className="mx-2 my-2 text-lg flex items-center justify-center  ">
                   <span className="mx-2 my-6"><CiLocationOn/></span> 
                   <p>Location: Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
                   Raisan, Gandhinagar, Gujarat, India.</p>

                </div>
                
            </div>

               

                
                

            
        </div>
        </>
    );
}