export default function QRPage() {

  return (
    <div className="min-h-screen bg-[#3b1408] text-white p-10">

      <h1 className="text-5xl font-bold mb-10">
        QR Generator
      </h1>

      <div className="bg-[#5a2414] p-10 rounded-3xl max-w-3xl">

        <input
          placeholder="Enter Website URL"
          className="w-full p-5 rounded-xl text-black text-xl mb-6"
        />

        <button className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-xl">
          Generate QR
        </button>

        <div className="bg-white mt-10 p-10 rounded-2xl flex justify-center">
          <div className="w-72 h-72 bg-black"></div>
        </div>

      </div>

    </div>
  )
}
