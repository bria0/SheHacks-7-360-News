import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import axios from 'axios'

const SearchInput = ({setSummary}) => {
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef(null);

    async function request(){
        console.log('started')
        let payload = {text: inputRef.current.value}
        console.log("about to run the post request")

        let res = await axios.post('/summary', payload)
        console.log("post request done")
        setSummary(res.data)
        console.log(res.data)
    }

    // useEffect(() => {
    //     const searchbar = inputRef.current;
    //     searchbar.addEventListener("click", function() {
    //         console.log("Searchbar clicked");
    //     });
    //     searchbar.addEventListener("keypress", function(event) {
    //         if (event.key === "Enter") {
    //         console.log("Enter pressed in searchbar");
    //         callSearch();
    //         }
    //     });
    // }, [])

    // const handleSearchInputChanges = (e) => {
    //     setSearchValue(e.target.value);
    // }

    const callSearch = (e) => {
        e.preventDefault();
        request()
    }

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 622px; 
    `;

    const Label = styled.div`
        font-size: 0.8em;
        margin-bottom: 10px;
        text-align: left; 
        padding-top: 40px; 
        color: #000000; 
    `;
    const Input = styled.input`
            padding: 12px 0px;
            margin: 8px 0;
            box-sizing: border-box;
            border-top-style: hidden;
            border-right-style: hidden;
            border-left-style: hidden;
            border-bottom-style: groove;
            border-color: #DCDCDC;
            font-size: 64px;
            font-family: 'Source Serif 4';
            background-color: transparent; 
            &:focus{
                outline: none; 
            }
        `;

    const Submit = styled.input`
        background-color: #4CAF50;
        color: white;
        padding: 14px 20px;
        margin: 8px 0;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 1em;
    `;








    return (
        <Form>
            <Label>
                What's going on</Label>
                <Input 
                    type="text" 
                    // value={searchValue} 
                    // onChange={(e)=>{
                    //     setSearchValue(e.target.value)
                    // }} 
                    placeholder="Search"
                    ref={inputRef}
                />
                <Submit 
                    type="submit" 
                    value="SEARCH" 
                    onClick={callSearch} 
                />
        </Form>
    );
}

export default SearchInput;
