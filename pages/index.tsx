import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { PassportReader } from "@gitcoinco/passport-sdk-reader";

const reader = new PassportReader("https://ceramic-clay.3boxlabs.com", "1");

const Home: NextPage = () => {

  const { data } = useAccount(); // loads account data like data.address

  useEffect(() => {
    async function getData() {
      const passport = await reader.getPassport(data!.address!);
      console.log(passport);
    }
    getData();
  }, [data]);


  return (
    <div className={styles.container}>
      <Head>
        <title>Passport Checher</title>
      </Head>

      <main className={styles.main}>
        <ConnectButton />
      </main>
    </div>
  );
};

export default Home;
