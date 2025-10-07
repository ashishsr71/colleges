import {auth,currentUser} from "@clerk/nextjs/server"
import { redirect } from "next/navigation"



export default async function DashboardPage(){
    const {userId}=auth();
    if(!userId) redirect("/sign-in");
    const user=await currentUser();

    return (
          <div className="p-10">
      <h1 className="text-2xl font-semibold">Welcome, {user?.firstName}</h1>
      <p>Your email: {user?.emailAddresses[0].emailAddress}</p>
    </div>
    )
}