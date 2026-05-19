export default function BarcodePage() {

  return (
    <div className="min-h-screen bg-[#3b1408] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        Barcode Studio
      </h1>

      <div className="bg-[#5a2414] p-10 rounded-3xl max-w-4xl">

        <input
          placeholder="Enter Barcode Number"
          className="w-full p-5 rounded-xl text-black text-xl mb-6"
        />

        <select className="w-full p-5 rounded-xl text-black text-xl mb-6">

          <option>
            HALDI POWDER
          </option>

          <option>
            LAL MIRCH
          </option>

        </select>

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-xl">
          Generate Barcode
        </button>

        <div className="bg-white mt-10 p-10 rounded-2xl">

          <div className="h-40 bg-black"></div>

        </div>

      </div>

    </div>
  )
}
