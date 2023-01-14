import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useEffect } from 'react';
import get_summary from Newsapi.py 

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        const searchbar = inputRef.current;
        searchbar.addEventListener("click", function() {
            console.log("Searchbar clicked");
        });
    }, [])
    
    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const callSearch = (e) => {
        e.preventDefault();
        get_summary(searchValue);
        resetInputField();
    }

    const Form = styled.form`
        display: flex;
        flex-direction: column;
        align-items: left;
        width: 622px; 
    `;

    const Label = styled.div`
        font-size: 1.2em;
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
        font-size: 48px;
        font-family: Source Serif 4 !important;
        background-color: #F2F2F2; 
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
        display: none; 
    `;

    return (
        <Form>
            <Label>
                What's going on</Label>
                <Input 
                    type="text" 
                    value={searchValue} 
                    onChange={handleSearchInputChanges} 
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
