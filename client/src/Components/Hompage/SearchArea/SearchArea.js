import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';
import './SearchArea.css'

const SearchArea = () => {
    return (
        <div className="search-area-full d-flex align-items-center justify-content-center" style={{height: '550px'}}>
            <InputGroup size="lg" className="mb-3 w-50 rounded shadow border border-dark">
                <FormControl placeholder="Search Dream Hospital" />
                <InputGroup.Append>
                    <InputGroup.Text  className="bg-dark py-2 px-3 "><FontAwesomeIcon className="text-white" icon={faSearch}></FontAwesomeIcon></InputGroup.Text>
                </InputGroup.Append>
            </InputGroup>
        </div>
    );
};

export default SearchArea;