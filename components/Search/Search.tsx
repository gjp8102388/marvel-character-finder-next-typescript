import styles from './Search.module.css'
import React, {useEffect, useState} from "react";

interface Props {
    handleChange: Function;
}

const Search = ({handleChange}: Props) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        handleChange(value);
    }, [value])
    return (
        <input type="text" name="search" className={styles.input} placeholder={"SEARCH THE CHARACTER..."}
               onChange={({target: {value}}) => setValue(value)}/>
    )
}
export default Search;
