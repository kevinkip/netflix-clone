// import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';

//checking if available session exists. If not, redirect us to /auth.
export async function getServerSideProps(context: NextPageContext){
  const session = await getSession(context);

  if(!session){
    return {
      redirect: {
        destination: '/auth',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function Home() {
  //fetch user
  // const { data: user } = useCurrentUser();
  return (
    <>
    <Navbar />

      {/* <h1 className="text-4xl text-green-500">Netflix Clone</h1>
      <p className='text-white'>Logged in as: {user?.email}</p>
      <button className='h-10 w-full bg-white' onClick={() => signOut()}>Logout!</button> */}
    <Billboard />      
    </>

  )
}
