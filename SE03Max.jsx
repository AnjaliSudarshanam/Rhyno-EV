import VehicleImage from "./VehicleImage"
import ColorSelectionButtons from "./ColorSelectionButtons"
import Description from "./Description"
import BuyNowButton from "./BuyNowButton"
import TableSe03max from "./TableSe03Max"


export default function SE03Max()
{
    let sentence = "This Rhyno is tuned for long drives and no thrills. Like all other variants, this machine comes with a fire-safe advanced LFP battery and all the other benefits of owning a Rhyno, along with a perfect blend of battery capacity and motor power to provide up to 150 km range on a single charge. While it may not provide a thrilling ride, it promises a dependable and unwavering presence on the long stretches."
    return(
        
        

        <div className="bg-[#131313] min-h-screen text-white font-poppins ">
            <br /> <br /><br /><br /><br />
            
            <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mx-6">
  SEO3 Max
</h1>


            <VehicleImage image = "./assets/black.png"/>
            <br />
            <div >
            <ColorSelectionButtons />
            </div>
            <br />
            <Description des={sentence}/>
            <TableSe03max/>
            <BuyNowButton/>
        </div>
        
    )
}