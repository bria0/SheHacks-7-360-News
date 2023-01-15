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
        let res = await axios.post('/summary', payload)
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
        border-radius: 8px;
        display: flex;
        justify-content: flex-end;
        text-align: end; 
        max-width: fit-content; 
        padding: 8px 16px;
        gap: 8px;
        background-color: #ffffff;
        color: black;
        border: none;
        cursor: pointer;
        font-size: 15px;
        font-family: 'Source Code Pro'; 
        &:hover{
            box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.08), 0px 9px 28px rgba(0, 0, 0, 0.05), 0px 12px 48px rgba(0, 0, 0, 0.03);
        }
    `;

    const RightDiv = styled.div`
        display: flex;
        justify-content: flex-end;
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
                /><RightDiv>
                <Submit 
                    type="submit" 
                    value="ENTER" 
                    onClick={callSearch} 
                /></RightDiv>
        </Form>
    );
}

export default SearchInput;
