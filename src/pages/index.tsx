import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";
import React, { useState, ChangeEvent } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <Head>
        <title>Lendsqr - Login</title>
        <meta name="description" content="The Login Page of Lendsqr" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.left}>
          <Image
            className={styles.logo}
            src="/images/lendsqr.svg"
            height={36}
            width={138.44}
            alt="lendsqr logo"
          />
          <Image
            className={styles.sign_in_image}
            src="/images/pablo-sign-in.svg"
            height={36}
            width={138.44}
            alt="lendsqr logo"
          />
        </div>
        <div className={styles.right}>
          <div>
            <h1>Welcome!</h1>
            <h6>Enter details to login.</h6>
            <form action="">
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleEmailChange}
              />
              <div className={styles.input_container}>
                <input
                  type={passwordVisible ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                <button type="button" onClick={togglePasswordVisibility}>
                  {passwordVisible ? "Hide" : "Show"}
                </button>
              </div>
              <p>FORGOT PASSWORD?</p>
              <button>LOG IN</button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
