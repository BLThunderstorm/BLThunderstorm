import { GetServerSideProps } from 'next';
import { getSession } from "next-auth/client";
import { FunctionComponent } from 'react';

export const getServerSideProps: GetServerSideProps =  async (ctx) => {
    let session = await getSession({req: ctx.req})

  if(!session){
    return {
      redirect: "/about",
   
      props: {
          auth: true
      }
    }
  } else {
    return {
      redirect: "/",
 
      props: {
       auth: false
      }
    }
  }
}

const IndexPage: FunctionComponent<{auth: boolean}> = (props) => {
  return (
    <div>
      `Redirecting you to your home... ${props.auth ?  "You are loggen in." : "You are not logged in." }`
    </div>
  )
}

export default IndexPage;
