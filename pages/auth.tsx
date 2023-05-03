import Input from "@/components/Input";
import { useState } from "react";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        //styling with tailwindcss
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full bg-opacity-50">
                {/* padding in x and y axis */}
                <nav className="px-12 py-5">
                    <picture>
                        <img src="/images/logo.png" alt="Logo" className="h-12" />
                    </picture>
                </nav>
                {/* container with the inputs, buttons and other types of logins */}
                <div className="flex justify-center">
                    {/* black background w/ opacity of 70. 16px padding all around. centered along the center of container's axis.
                    margin-top of 2. On large screens, have a width of 2/5ths and a max-width of medium, rounded corners-medium 
                    and full width of element. */}
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                    {/* margin-bottom (mb) with semi-bold font */}
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            Sign in
                        </h2>
                        {/* hold our inputs */}
                        <div className="flex flex-col gap-4">
                            <Input
                                label="Username"
                                onChange={(ev: any) => setName(ev.target.value)}
                                id="name"
                                value={name}
                            />
                            <Input
                                label="Email"
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                id="email"
                                type="email"
                                value={email}
                            />
                            <Input
                                label="Password"
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                id="password"
                                type="password"
                                value={password}
                            />

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Auth;