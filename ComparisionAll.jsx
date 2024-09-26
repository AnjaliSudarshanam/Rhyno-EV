// import React from "react";
import ComparisionAllTable from "./ComparisionAllTable";
import VehicleImage from "./VehicleImage";

export default function ComparisionAll() {
  return (
    <div className="bg-[#131313] min-h-screen text-white font-poppins">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mx-6 mb-4">Comparison All</h1>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">SE03 Lite</h1>
            <VehicleImage image="./assets/blue.png" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">SE03</h1>
            <VehicleImage image="./assets/bike.png" />
          </div>
          <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mb-4">SE03 Max</h1>
            <VehicleImage image="./assets/black.png" />
          </div>
        </div>
      </div>
      <ComparisionAllTable />
    </div>
  );
}
