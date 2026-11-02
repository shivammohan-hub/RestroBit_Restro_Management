export const Billings = () => {
  return (
    <div className="w-4/12 bg-gray-50 rounded-lg border mr-5 py-5 flex flex-col gap-4">
        <div className="px-5">
            <input type="text" className="w-full py-2 text-sm px-4 rounded-lg font-medium outline-none" placeholder="Search in Existing" name="" id="" />
        </div>
        <div className="flex gap-5 px-5">
            <select className="flex-1 bg-white py-2 text-sm px-4 rounded-lg font-semibold text-slate-700" name="" id="">
                <option value="">Select Dining</option>
            </select>
            <select className="flex-1 bg-white py-2 text-sm px-4 rounded-lg font-semibold text-slate-700" name="" id="">
                <option value="">Select Table</option>
            </select>
        </div>
        <span className="text-md font-bold px-8 text-slate-900">Order #20</span>
        <div className="px-6 py-3 bg-white rounded-lg flex gap-1 flex-col mx-5">
            <div className="flex items-center justify-between">
                <h5 className="w-full font-medium">Fresh Salad</h5>
                <button className="w-fit flex justify-end items-center">
                    <svg className="bg-red-500 p-2 text-white rounded-full h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <p className="text-rose-500 font-semibold text-md">$10 * 2 = $20.00</p>
            <div className="flex justify-between items-center">
                <span className="flex gap-6 items-center font-semibold">
                    <button className="bg-gray-100 text-black rounded-full h-7 w-7">-</button>
                    <h5>2</h5>
                    <button className="bg-orange-500 text-white rounded-full h-7 w-7">+</button>
                </span>
                <button className="text-xs border py-2 px-2 rounded-lg">Add Notes</button>
            </div>
        </div>

        <div className="px-6 py-3 bg-white rounded-lg flex gap-1 flex-col mx-5">
            <div className="flex items-center justify-between">
                <h5 className="w-full font-medium">Fresh Salad</h5>
                <button className="w-fit flex justify-end items-center">
                    <svg className="bg-red-500 p-2 text-white rounded-full h-7 w-7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </button>
            </div>
            <p className="text-rose-500 font-semibold text-md">$10 * 2 = $20.00</p>
            <div className="flex justify-between items-center">
                <span className="flex gap-6 items-center font-semibold">
                    <button className="bg-gray-100 text-black rounded-full h-7 w-7">-</button>
                    <h5>2</h5>
                    <button className="bg-orange-500 text-white rounded-full h-7 w-7">+</button>
                </span>
                <button className="text-xs border py-2 px-2 rounded-lg">Add Notes</button>
            </div>
        </div>

        <ol className="px-5 flex flex-col gap-2">
            <ul className="flex items-center justify-between font-medium text-slate-800">
                <li>Sub total :</li>
                <li>1250$</li>
            </ul>
            <ul className="flex items-center justify-between font-medium text-slate-800">
                <li>Product Discount :</li>
                <li>150$</li>
            </ul>
            <ul className="flex items-center justify-between font-medium text-slate-800">
                <li>Extra Discount :</li>
                <li>0.00$</li>
            </ul>
            <ul className="flex items-center justify-between font-black">
                <li>Total :</li>
                <li>1100$</li>
            </ul>
        </ol>

        <div className="pt-6 pb-2 px-5 flex flex-col gap-2 border-t">
            <span className="flex gap-3 text-xs">
                <button className="flex-1 border rounded-lg bg-slate-800 py-2.5 text-white font-semibold">KOT & Print</button>
                <button className="w-20 border rounded-lg bg-green-600 py-2.5 text-white font-semibold">Draft</button>
            </span>
            <span className="flex gap-3 text-xs">
                <button className="flex-1 border rounded-lg bg-orange-500 py-2 text-white font-semibold">Bill & Payment</button>
                <button className="flex-1 border rounded-lg bg-green-600 py-2 text-white font-semibold">Bill & Print</button>
            </span>
        </div>
         
    </div>
  )
}
