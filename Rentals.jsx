import { FaAndroid } from "react-icons/fa";
// import AndroidIcon from '@mui/icons-material/Android';
// import AppleIcon from '@mui/icons-material/Apple';
import { FaApple } from "react-icons/fa";



export default function Rentals()
{
    return(
        <>
        <div className="bg-[#131313] min-h-screen text-white font-poppins">
            <br /> <br /><br /><br /><br />
            <div className="text-3xl text-center  px-2 py-2">Rentals</div>
            <p className="mx-2 my-2 px-2 py-2 text-lg">Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply visit our authorized dealerships to unlock this opportunity.
            </p>
            <p className="mx-2 my-2 px-2 py-2 text-lg">Additionally, we&apos;re redefining campus commuting with our rental fleet tailored for college students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app. Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
            </p>
          
            <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-4">
  <p className="inline-block mx-2 my-2 px-2 py-2 text-center md:text-left">
    Download our rental app:
  </p>
  <button className="bg-green-400 px-2 py-2 mx-2 my-2 h-14 w-40 rounded-md flex items-center justify-center space-x-2">
    <FaAndroid />
    <span>Android</span>
  </button>
  <button className="bg-red-400 px-2 py-2 mx-2 my-2 h-14 w-40 rounded-md flex items-center justify-center space-x-2">
    {<FaApple/>}
    <span>Apple</span>
  </button>
</div>


           
           
        </div>
        </>
    )
}