import React from 'react';
import TableHeaders from './TableHeaders';
import TableBody from './TableBody';

const Table = ({headers, rows}) => (   
    <table className="table box-shadow">
        <TableHeaders headers={headers} />
        <TableBody rows={rows} />
    </table>
);

export default Table;
