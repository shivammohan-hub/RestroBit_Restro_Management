export const Header = () => {
  return (
    <div className="flex justify-between items-center pt-4 px-5">
        <div className="flex flex-col">
            <h1 className="font-bold text-lg">Point of Sale (POS)</h1>
            <p className="text-xs">Dashboard <span className="px-2">•</span>Pos</p>
        </div>
        <div className="flex gap-4 items-center text-sm ">
            <button className="border rounded-md text-xs font-semibold px-3 py-1 bg-orange-600 text-white">+ New</button>
            <button className="border rounded-md text-gray-500 text-xs font-semibold px-3 py-1">QR Menu Orders</button>
            <button className="border rounded-md text-gray-500 text-xs font-semibold px-3 py-1">Draft list</button>
            <button className="border rounded-md text-gray-500 text-xs font-semibold px-3 py-1">Table Order</button>
        </div>

    </div>
  )
}
