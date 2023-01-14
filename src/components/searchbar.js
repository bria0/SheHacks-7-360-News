import React, { useState } from 'react';
import styled from 'styled-components';

const SearchInput = () => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("")
    }

    const search = (e) => {
        e.preventDefault();
        search(searchValue);
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
                />
                <Submit 
                    type="submit" 
                    value="SEARCH" 
                    onClick={search} 
                />
        </Form>
    );
}

export default SearchInput;