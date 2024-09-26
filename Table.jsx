export default function Table()
{
    return(
        <>
         <div className="flex justify-center items-center  bg-[#131313] font-poppins">
  <div className="w-full max-w-4xl p-4">
    <table className="w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th className="py-2 px-4 text-left text-white">Specifications</th>
          <th className="py-2 px-4 text-left text-white">Rhyno SE03</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="py-2 px-4 text-white">Battery</td>
          <td className="py-2 px-4 text-white">2.7Kwh</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Battery features</td>
          <td className="py-2 px-4 text-white">
            <ul className="list-disc list-inside">
              <li>LFP with 1500 cycles</li>
              <li>Active Balancing</li>
              <li>Waterproof (IP67)</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Battery warranty</td>
          <td className="py-2 px-4 text-white">3 Years</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Charging time</td>
          <td className="py-2 px-4 text-white">4 hours (12A)</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Motor</td>
          <td className="py-2 px-4 text-white">1500W</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Max speed</td>
          <td className="py-2 px-4 text-white">55 km/h</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Warranty on electronics</td>
          <td className="py-2 px-4 text-white">1 year</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Max range (@30km/h)</td>
          <td className="py-2 px-4 text-white">150 km</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Max range (@45km/h)</td>
          <td className="py-2 px-4 text-white">110 km</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Max range (@full speed)</td>
          <td className="py-2 px-4 text-white">90 km</td>
        </tr>
        <tr>
          <td className="py-2 px-4 text-white">Other key benefits</td>
          <td className="py-2 px-4 text-white">
            <ul className="list-disc list-inside">
              <li>Fire-safe battery</li>
              <li>Range prediction</li>
              <li>Comfortable ride</li>
              <li>Stable and safe</li>
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


        </>
    )
}