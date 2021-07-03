import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next';
import { getSession } from "next-auth/client";

export const getServerSideProps: GetServerSideProps =  async (ctx) => {
    let session = await getSession({req: ctx.req})

  if(!session){
    return {
      redirect: "/about",
      permanent: false,
      props: {

      }
    }
  } else {
    return {
      redirect: "/",
      permanent: false,
      props: {
        
      }
    }
  }
}

export default function IndexPage(){
  return (
    <div>
      "Redirecting you to your home..."
    </div>
  )
}

