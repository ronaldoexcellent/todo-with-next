"use client";

import { NextPage } from "next";
import Link from "next/link";
import Head from "next/head";
import Bubbles from "@/components/svg/Bubbles";

const Register: NextPage = () => {
    const handleSubmit = (e: React.FormEvent) => e.preventDefault();

    return (
      <>
        <Head>
          <title>Register</title>
          <meta name="description" content="Registration screen for this app" />
        </Head>

        <div className="main">
            <Bubbles />
          <h1 className="h1"> Welcome to Onboard! </h1>
          <p className="para-less-padding"> Let&apos;s help to meet up your tasks. </p>

          <form className="form" onSubmit={handleSubmit}>
              <input
                type="text"
                className="formInput"
                placeholder="Enter your full name"
                required
              />

              <input
                type="text"
                className="formInput"
                placeholder="Enter your Email"
                required
              />

              <input
                type="password"
                className="formInput"
                placeholder="Enter Password"
                required
              />

              <input
                type="password"
                className="formInput"
                placeholder="Confirm password"
                required
              />

              <input
                type="submit"
                className="mainButton mt-5"
                value="Register"
              />
          </form>

          <p className="mt-4 font-medium text-sm"> Already have an account ? <Link href="/auth/login" className="text-[#50C2C9]"> Sign In </Link> </p>
        </div>
      </>
    )
}

export default Register;
