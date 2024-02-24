import Countrylookup from "./CountryLookup";

export default function Footer(){
    return(
       <footer className="absolute bottom-0 text-sm text-gray-500
       bg-[#f2f2f2] w-full">
           <div className=""><Countrylookup/></div>
           <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-8" >
            <ul flex items-center space-x-6>
                <li className="hover:underline cursor-pointer">
                    about
                </li>
                <li className="hover:underline cursor-pointer">
                   Advertising
                </li>
                <li className="hover:underline cursor-pointer">
                    Buisness
                </li>
                <li className="hover:underline cursor-pointer">
                    How search works
                </li>
            </ul >
            <ul className="flex items-center space-x-6" >
            <li className="hover:underline cursor-pointer">
                  Privacy
                </li>
                <li className="hover:underline cursor-pointer">
                   Terms
                </li>
                <li className="hover:underline cursor-pointer">
                Settings
                </li>
            </ul >

           </div>
           <div className=""></div>
           <div className=""></div>
       </footer>
    )
}