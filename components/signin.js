import react from "react";
import { getProviders, signIn } from "next-auth/react"
import { async } from "@firebase/util";

export default function SignIn({ providers }) {
  return (
    
    <div className="flex items-center justify-center w-screen h-screen relative">
        <img 
        className="w-full h-full object-cover"
        src="https://cdn.pixabay.com/photo/2016/08/07/08/35/pokemon-1575830_960_720.jpg" 
        alt="Pokémon loginpage image">
        </img>
    </div>,
    <div className="absolute w-full h-full inset-0 bg-transparent lfec items-center justify-center">
        {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
        ))}
    </div>
  )
}

export async function getServerSideProps(context){
    const {req, res} = context;
    const providers = await getProviders();

    return{
        props : {
            providers,
        }
    }
}