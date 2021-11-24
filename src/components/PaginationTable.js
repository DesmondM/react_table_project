import React, {useMemo} from 'react';
import {useTable, useGlobalFilter, useFilters, usePagination} from 'react-table';
import MOCK_DATA from './MOCK_DATA.json';
import {COLUMNS} from './columns';
import './table.css'
import GlobalFilter from './GlobalFilter';


const PaginationTable = () => {
    const columns =useMemo(()=>COLUMNS,[])   //ensures data is not re-created each time there is a re-render
    const data = useMemo(()=>MOCK_DATA, [])
  
    useTable({
        columns: COLUMNS,
        data: MOCK_DATA
    })

    const tableInstance = useTable({
        columns,
        data,
    }, useFilters, useGlobalFilter, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
       
       // rows,
        prepareRow,

        state,
        setGlobalFilter,
    } = tableInstance

    const {globalFilter, pageIndex} = state;
    
    return (
        <>
        <GlobalFilter filter ={globalFilter} setFilter={setGlobalFilter}/>
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map((headerGroup)=>(
                 <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column)=>(

                     <th {...column.getHeaderProps()}>{column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                     </th>
                     ))}
                    
                </tr>

                ))}
               
            </thead>

            <tbody {...getTableBodyProps()}>
                {page.map((row)=>{
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
            <div>
                <button onClick={()=>previousPage()}> Back </button>
                 <button onClick={()=>nextPage()}> Next </button>
            </div>
        </>
    )
}

export default PaginationTable
