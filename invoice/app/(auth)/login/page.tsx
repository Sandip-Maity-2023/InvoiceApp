import SubmitButton from "@/components/ui/SubmitButton";
import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import {Input} from "@/components/ui/input";
import { Label } from "@/components/ui/label"; 
import {auth,signIn} from "@/lib/auth"; 

export default async function LoginPage() {

    const session=await auth()

    return(
<Card className="max-w-sm min-w-xs lg:min-w-sm">
    
<CardHeader>
<CardTitle className="text-xl w-full">Login</CardTitle>
<CardDescription>Enter your email below to log in your account.</CardDescription>
</CardHeader>

<CardContent>
    <form className="grid gap-6" action={async (formData) => {
        "use server"
        await signIn("resend",formData)
    }}>
        <div className="grid gap-2">
            <Label>Email</Label>
            <Input name="email" required type="email" placeholder="hello@example.com" />
        </div>
        <SubmitButton title="Login"/>
    </form>
</CardContent>
</Card>     
    )
}
