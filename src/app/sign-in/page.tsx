import { SignIn } from "@clerk/nextjs";

export default function SignInPage(){
<div className="flex justify-center items-center min-h-screen">
<SignIn path="/sign-in" routing="path"/>
</div>
};