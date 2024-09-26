import VehicleImage from "./VehicleImage"
import ColorSelectionButtons from "./ColorSelectionButtons"
import Description from "./Description"
import Table from "./Table"
import BuyNowButton from "./BuyNowButton"

export default function SE03()
{
    let sentence = "Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!"
    return(
        
        

        <div className="bg-[#131313] min-h-screen text-white font-poppins ">
            <br /> <br /><br /><br /><br />
            
          <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mx-6">
  SEO3
</h1>


            <VehicleImage image = "./assets/bike.png"/>
            <br />
            <div >
            <ColorSelectionButtons />
            </div>
            <br />
            <Description des={sentence}/>
            <Table/>
            <BuyNowButton/>
        </div>
        
    )
}