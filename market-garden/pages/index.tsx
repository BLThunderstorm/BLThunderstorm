import { GetServerSideProps } from "next";
import { getSession } from "next-auth/client";
import { FunctionComponent, Props, useEffect } from "react";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let session = await getSession({ req: ctx.req });

  if (!session) {
    return {
      redirect: "/about",

      props: {
        auth: false,
      },
    };
  } else {
    return {
      redirect: "/home",

      props: {
        auth: true,
      },
    };
  }
};

const IndexPage: FunctionComponent<{ auth: boolean }> = (props) => {
  return (
    <div>
      Redirecting you to your home...
      {props.auth ? "You are logged in." : "You are not logged in."}
    </div>
  );
};

export default IndexPage;
