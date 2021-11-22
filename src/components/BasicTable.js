import React, {useMemo} from 'react';
import {useTable} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns';
import './table.css'

const BasicTable = () => {
    const columns =useMemo(()=>COLUMNS,[])   //ensures data is not re-created each time there is a re-render
    const data = useMemo(()=>MOCK_DATA, [])

    useTable({
        columns: COLUMNS,
        data: MOCK_DATA
    })

    const tableInstance = useTable({
        columns,
        data,
    })

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = tableInstance


    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                 <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column)=>(

                     <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                     ))}
                    
                </tr>

                ))}
               
            </thead>

            <tbody {...getTableBodyProps()}>
                {rows.map((row)=>{
                    prepareRow(row)
                    return(
                        <tr {...row.getRowProps()}>
                            {row.cells.map((cell)=>{
                            return <td{...cell.getCellProps()}>{cell.render('Cell')}</td>
                      
                })}
                </tr>
                    )
            })}
            </tbody>
        </table>
    )
}

export default BasicTable
