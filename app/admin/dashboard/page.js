export default function Dashboard() {
  return (
    <div className="p-10 text-white min-h-screen bg-[#3b1408]">
      <h1 className="text-6xl font-bold mb-3">
        Welcome Back
      </h1>

      <p className="text-xl text-orange-100 mb-10">
        Here's what's happening with Nimad ZAYKA today.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#5a2414] rounded-3xl p-8 shadow-xl">
          <h2 className="text-5xl font-bold">120</h2>
          <p className="mt-4 text-xl">Total Products</p>
        </div>

        <div className="bg-[#5a2414] rounded-3xl p-8 shadow-xl">
          <h2 className="text-5xl font-bold">25</h2>
          <p className="mt-4 text-xl">Distributor Enquiries</p>
        </div>

        <div className="bg-[#5a2414] rounded-3xl p-8 shadow-xl">
          <h2 className="text-5xl font-bold">850</h2>
          <p className="mt-4 text-xl">Total Page Views</p>
        </div>

        <div className="bg-[#5a2414] rounded-3xl p-8 shadow-xl">
          <h2 className="text-5xl font-bold">312</h2>
          <p className="mt-4 text-xl">WhatsApp Clicks</p>
        </div>

      </div>
    </div>
  )
}
