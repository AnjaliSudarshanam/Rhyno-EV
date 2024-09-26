export default function ColorSelectionButtons()
{
    return(
        <>
        <div className="bg-[#131313] text-white py-8 font-poppins">
  <div className="container mx-auto px-4">
    <h2 className="text-xl text-center mb-4">Color selection buttons</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex justify-center">
        <button className="bg-white text-black px-4 py-2 w-full sm:w-auto rounded-full text-center text-sm hover:bg-gray-300 hover:text-gray-800 transition duration-300 ease-in-out">
          White
        </button>
      </div>
      <div className="flex justify-center">
        <button className="bg-green-600 text-black px-4 py-2 w-full sm:w-auto rounded-full text-center text-sm hover:bg-green-700 hover:text-white transition duration-300 ease-in-out">
          Green
        </button>
      </div>
      <div className="flex justify-center">
        <button className="bg-red-600 text-black px-4 py-2 w-full sm:w-auto rounded-full text-center text-sm hover:bg-red-700 hover:text-white transition duration-300 ease-in-out">
          Red
        </button>
      </div>
      <div className="flex justify-center">
        <button className="bg-blue-600 text-black px-4 py-2 w-full sm:w-auto rounded-full text-center text-sm hover:bg-blue-700 hover:text-white transition duration-300 ease-in-out">
          Blue
        </button>
      </div>
    </div>
  </div>
</div>
        </>
    )
}