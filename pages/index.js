import React from "react";
import nextjs from "nextjs";
import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import Sidebarright from "../components/SidebarRight";
import Feed from "../components/Feed";
import { FcGoogle } from "react-icons/fc";
import {getSession, signIn, signOut, useSession} from "next-auth/react";

const Home = () => {
  
  const {data : session} = useSession()
  console.log(session)
  
return (
<div>
  <div>
      <Head>
        <title>Pokesale</title>
      </Head>
  </div>

    <div className="sticky top-0 z-50 bg-white flex p-2 lg:px-5 shadow-md">
    <Header />
    </div>


<main className="flex">
    
      <Sidebar />
      <Feed />
      <Sidebarright/>
</main>
    
    
  </div>
    
  )
}
export default Home
