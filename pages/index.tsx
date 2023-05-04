// import useCurrentUser from '@/hooks/useCurrentUser';
import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Navbar from '@/components/Navbar';
import Billboard from '@/components/Billboard';
import MovieList from '@/components/MovieList';
import useMovieList from '@/hooks/useMovieList';
import useFavorites from '@/hooks/useFavorites';

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
  const { data: movies = [] } = useMovieList();

  const { data: favorites = []} = useFavorites();
  //fetch user
  // const { data: user } = useCurrentUser();
  return (
    <>
    <Navbar />
    <Billboard />
    <div className='pg-40'>
      <MovieList title="Trending Now" data={movies} />
      <MovieList title="My List" data={favorites} />          
      </div> 
    </>

  )
}
