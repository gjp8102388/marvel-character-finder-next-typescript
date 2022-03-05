import type { NextPage } from 'next'
import Head from 'next/head'
import Search from "../components/Search/Search";
import styles from '../styles/Home.module.css'
import React, {createContext, useState} from "react";
import {useFetch} from "../common/customHooks/useFetch";
import {getCharacterList} from "../common/apiUtils";
import CharacterList from "../components/CharacterList/CharacterList";

const Home: NextPage = () => {
    const [search, setSearch] = useState('')
    const {data: characterList } = useFetch(getCharacterList,[search? search:'spider-man'],[],[search])
    return (
    <div className={styles.container}>
      <Head>
        <title>Marvel Character Finder</title>
        <meta name="description" content="Find your favourite Marvel character"/>
        <meta name="author" content="Aaron Guo <gjp77440169@gmail.com>"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main className={styles.main}>
        <Search handleChange={(val: string)=>setSearch(val)}/>

              <CharacterList characterList ={characterList}/>
      </main>

      <footer className={styles.footer}>
        <a
            href="https://www.marvel.com/"
            target="_blank"
            rel="noopener noreferrer"
        >
          Data provided by Marvel. © 2020 MARVEL
        </a>
      </footer>
    </div>
  )
}

export default Home
