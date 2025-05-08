"use client";

import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Illustration2 from "@/components/svg/Illustration2";
import Bubbles from "@/components/svg/Bubbles";

const Login: NextPage = () => {
    const [email, setEmail] = useState<string>('');
    const [pass, setPass] = useState<string>("");
    const [err, setErr] = useState<string>("");
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email === "u@u.com" && pass === "user") {
            setErr("");
            router.push('/home');
        }
        else {
          setErr("** Invalid Credentials! **");
        }
    };

    return (
      <>
        <Head>
          <title>Login</title>
          <meta name="description" content="Login screen for this app" />
        </Head>

        <div className="main">
            <Bubbles />
          <h1 className="h1"> Welcome back </h1>
          <div className="illustration">
            <Illustration2 />
          </div>

          <p className="error"> { err } </p>

          <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="formInput"
                placeholder="Enter your Email"
                required
              />

              <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                className="formInput"
                placeholder="Enter Password"
                required
              />

              <p className="text-center mb-4 font-medium text-[#50c2c9]"> Forgotten password ? </p>

              <input
                type="submit"
                className="mainButton"
                value="Login"
              />
          </form>

          <p className="mt-4 font-medium text-sm">
            Don&apos; have an account ? <Link href="/auth/register" className="text-[#50C2C9]"> Sign Up </Link>
          </p>
        </div>
      </>
    )
}

export default Login;
