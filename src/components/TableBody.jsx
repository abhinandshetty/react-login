import React from 'react';

const TableBody = ({ rows = [] }) => {

    const getRows = () => rows.map(row => (
        <tr>
            { row.map(value => <td>{value}</td> )}
        </tr>
    ));

    return (
        <tbody>
            { getRows() }
        </tbody>
    );
};

export default TableBody;
