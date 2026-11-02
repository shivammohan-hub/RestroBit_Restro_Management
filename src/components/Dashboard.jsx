import { Billings } from "./Billings"
import { Header } from "./Header"
import { Products } from "./Products"

export const Dashboard = () => {
  return (
    <div className="flex">
        <div className="w-2/12 flex flex-col border gap-5">

            <div className="h-16 w-full flex items-center justify-center border-b">
                <img className="h-12 w-36" src="Logo.png" alt="" />
            </div>
            <div className="px-6 flex flex-col gap-5 text-md">

                <div className="flex items-center gap-4 pb-3">
                    <img className="rounded-full h-10" src="shivam.jpeg" alt="" />
                    <span>
                        <h3 className="font-semibold">Shivam Mohan</h3>
                        <h4 className="text-gray-500 font-medium">Web Designer</h4>
                    </span>
                </div>

                <nav className="flex flex-col gap-3 text-slate-500 text-sm font-semibold">
                    <a className="px-3" href="">Dashboard</a>
                    <a className="border rounded px-3 py-1.5 text-gray-800 font-black bg-gray-50" href="">Pos</a>
                    <a className="px-3" href="">Table</a>
                    <a className="px-3" href="">Reservation</a>
                </nav>

                <span className="text-slate-500 text-xs font-semibold">Offering</span>

                <nav className="flex flex-col px-3 gap-3 text-gray-500 text-sm font-semibold">
                    <a href="">Delivery Executive</a>
                    <a href="">Payment</a>
                    <a href="">Customer</a>
                    <a href="">Invoice</a>
                </nav>

                <span className="text-slate-500 text-xs font-semibold">Bank Office</span>

                <nav className="flex flex-col px-3 gap-3 text-slate-500 text-sm font-semibold">
                    <a href="">Testimonial</a>
                    <a href="">User</a>
                    <a href="">Report</a>
                    <a href="">Setting</a>
                </nav>
            </div>

        </div>

        <div className="w-10/12">
            <div className="bg-gray-100 px-8 py-2 flex items-center justify-between">
                <input className="px-4 w-72 py-2 rounded border outline-none text-xs" type="text" placeholder="Search (Ctrl+l)"/>
                <div className="flex gap-6 items-center">
                    <svg className="h-8 w-8 pt-2 text-slate-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V4M12 20V22M4 12H2M6.31412 6.31412L4.8999 4.8999M17.6859 6.31412L19.1001 4.8999M6.31412 17.69L4.8999 19.1042M17.6859 17.69L19.1001 19.1042M22 12H20M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                
                    <div className="flex items-end ">
                        <img className="h-9 w-9 rounded-full " src="shivam.jpeg" alt="" />
                        <span className="text-5xl text-green-700 -mx-1.5">.</span>
                    </div>
                </div>
            </div>
            <Header />
            <div className="flex gap-3 my-5">
                <Products />
                <Billings />
            </div>
        </div>
    </div>
  )
}
