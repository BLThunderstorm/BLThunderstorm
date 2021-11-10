import styles from "./Login.module.scss";
import { GetServerSideProps } from "next";
import { getSession, signIn } from "next-auth/client";
import { FunctionComponent } from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let session = await getSession({ req: ctx.req });

  if (!session) {
    return {
      redirect: "/about",

      props: {
        auth: true,
      },
    };
  } else {
    return {
      redirect: "/",

      props: {
        auth: false,
      },
    };
  }
};

const IndexPage: FunctionComponent<{ auth: boolean }> = (props) => {
  return (
    <div className={styles["login"]}>
      <button
        onClick={() => {
          signIn("github");
        }}
        className={styles["button"]}
      >
        Login with GitHub
      </button>
    </div>
  );
};

export default IndexPage;
