"use client"
import {FcGoogle} from "react-icons/fc"
import {FaGithub} from "react-icons/fa"
import { Button } from "../ui/button";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";


const Social = () => {
    const onClick = (provider: "google" | "github") => {
        signIn(
            provider, {
                callbackUrl: DEFAULT_LOGIN_REDIRECT,
            }
        )
    }
    return ( 
        <div className="flex items-center w-full gap-x-2">
            <Button 
            variant={'outline'}
            className="w-full"
            size={'lg'}
            onClick={()=> onClick("google")}
            >
                <FcGoogle />
            </Button>
            <Button 
            variant={'outline'}
            className="w-full"
            size={'lg'}
            onClick={()=> onClick("github")}
            >
                <FaGithub />
            </Button>
        </div>
     );
}
 
export default Social;