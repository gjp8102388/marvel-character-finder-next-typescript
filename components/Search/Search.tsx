import styles from './Search.module.css'
import React, {useEffect, useState} from "react";

interface Props {
    handleChange: Function;
}

const Search = ({handleChange}: Props) => {
    const [value, setValue] = useState('Spider-man');
    useEffect(() => {
        handleChange(value);
    }, [value])
    return (
        <input type="text" name="search" className={styles.input} placeholder={`Spider-man`}
               onChange={({target: {value}}) => setValue(value)}/>
    )
}
export default Search;
