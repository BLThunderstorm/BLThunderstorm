import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';

export const getServerSideProps = async function getServerSideProps(){
  const [ session, loading ] = useSession();

  if(!session){
    return {
      redirect: "/about",
      permanent: false
    }
  } else {
    return {
      redirect: "/",
      permanent: false
    }
  }
}

