import type {NextPage} from 'next'
import Head from 'next/head'
import {AppBar, Box, Container, CssBaseline, Grid, Link, Toolbar, Typography} from "@mui/material";
import React, {useState} from "react";
import {useFetch} from "../common/customHooks/useFetch";
import {getCharacterList} from "../common/apiUtils";
import Search from "../components/Search/Search";
import CharacterCard from "../components/CharacterCard/CharacterCard";
import NotFound from "../components/NotFound/NotFound";

function Copyright() {
    return (
        <Typography variant="body2" align="center">
            <Link href="https://www.marvel.com/" color="inherit" underline="none">
                Data provided by Marvel. © 2022 MARVEL
            </Link>
        </Typography>
    )
}
const Home: NextPage = () => {
    const [search, setSearch] = useState('')
    const {data: characterList} = useFetch(getCharacterList, [search], [], [search])
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh',}}>
            <CssBaseline/>
            <Head>
                <title>Marvel Character Finder</title>
                <meta name="description" content="Find your favourite Marvel character"/>
                <meta name="author" content="Aaron Guo <gjp77440169@gmail.com>"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <AppBar position="relative" style={{background: '#ED1D24'}}>
                <Toolbar>
                    <Typography variant="h6" color="inherit" noWrap>
                        Marvel Character Finder
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container component="main" sx={{mt: 8, mb: 2}} maxWidth="xl">
                <Grid container
                      direction="column"
                      justifyContent="center"
                      alignItems="center">
                        <Grid item>
                            <Typography variant="h6" noWrap>
                                Find your favourite Marvel Character
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Search handleChange={(val: string) => setSearch(val)}/>
                        </Grid>
                    <Grid container
                          direction="row"
                          justifyContent={characterList.length?"flex-start":"center"}
                          alignItems="center"
                          spacing={3}>
                        {characterList.length?(characterList.map(character => (
                            <Grid item sm={6} md={6} lg={3} key={character['id']}>
                                <CharacterCard name={character['name']}
                                               description={character['description']} modified={character['modified']}
                                               thumbnail={character['thumbnail']}/>
                            </Grid>
                        ))):null}
                    </Grid>
                    {!characterList.length?(
                        <NotFound name={search}/>
                    ):(
                        null
                    )}
                </Grid>
            </Container>
            <Box
                component="footer"
                sx={{
                    py: 3,
                    px: 2,
                    mt: 'auto',
                    backgroundColor: 'darkgray'
                }}
            >
                <Container maxWidth="sm">
                    <Copyright/>
                </Container>
            </Box>
        </Box>
    )
}

export default Home
