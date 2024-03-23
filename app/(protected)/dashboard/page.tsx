"use client";

import { logout } from "@/actions/logout";
import { Button } from "@/components/ui/button";
import { useCurrentUser } from "@/hooks/use-current-user";
// import {auth, signOut} from "@/auth"


const Dashboard = () => {
    const user = useCurrentUser();

    const onClick = () => {
        logout();
    }
    return ( 
        <>
        <div className="bg-secondary ">
            
                <div className="flex justify-between items-center container py-4">
                <h3 className="text-2xl font-bold">DIVIC</h3>

                <Button onClick={onClick} className="text-md font-semibold" type="submit">
                    Sign Out
                </Button>
                </div>
        </div>

        <div className=" container space-y-6 text-center">
            <div className="flex justify-center ">
            <h3 className="text-white p-2 bg-black/10  w-[250px] rounded-3xl shadow-inner">Softeware Solution House</h3>
            </div>

            <h1 className=" text-6xl p-2 font-bold bg-gradient-to-l from-[#3742e0] via-[#7bf143] to-[#e07832] bg-clip-text text-transparent">Unlike any company you hired before</h1>

            <p className="text-gray-300">Streamline your software development process with Divic</p>

        </div>


        <div className=" container text-center mt-20">
            <div className="flex justify-center mb-4">
            <h3 className="text-white p-2 bg-black/10  w-[250px] rounded-3xl shadow-inner">Our Customers</h3>
            </div>

            

            <p className="text-gray-300">Streamline your software development process with Divic</p>
            <p className="text-white">We take pride in our strong client relationships and our commitment to delivering exceptional services</p>
        </div>

        </>
        
     );
}
 
export default Dashboard;