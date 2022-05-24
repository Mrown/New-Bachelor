import Image from "next/image";
import { signInWithGoogle, signInWithFacebook } from "../pages/firebase.config";
//import { useSession, signIn, getSession } from "next-auth/react";

function Login() {
    return (
        <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
            <div className="flex ml-2 items-center">
                <Image src="/images/Unlisted Leaf.jpg" 
                width={40}
                height={40}
                layout="fixed"
                alt="website logo"
                />
            </div>
            <div className='App'>
      <button onClick={signInWithGoogle}> Sign in with Google</button>
      <button onClick={signInWithFacebook}> Sign in with Facebook</button>
    </div>
        </div>
    );
};

export default Login;

//const headerLogin = () => {
//    const {data: session, status} = useSession();
//    const loading = status === "loading"

//    return(
//        <div className="container mx-auto px-4 sm:px-6 py4 flex justify-between items-center">
//            {!loading ? (
//                <div>
//                    {!session ? (
//                        <button type="button" onClick={signIn}>Sign in with Google</button>
//                    ) : (
//                        <div>
//                            <img src="{session.user.image} alt={session.user.name}"></img>
//                        <p>Hello, {session.user.name}</p>
//                        </div>
//                    )}
//                </div>
//            ) : null}
//        </div>
//    );
//};