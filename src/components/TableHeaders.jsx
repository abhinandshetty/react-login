import React from 'react';

const TableHeaders = ({ headers = [] }) => {
    
    const getHeader = () => (
        <tr>
            { headers.map(header => <th scope="col">{ header }</th>) }
        </tr>
    );

    return (
        <thead>
            { getHeader() }
        </thead>
    )
};

export default TableHeaders;
