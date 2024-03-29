import React, {useState, useMemo, useEffect} from 'react'
import {sortData, formatDate} from './utils'
import {TableHeader} from './TableHeader'

/**
 * colDefs: Array of column definitions.
 * data: data to display in the table.
 */
export const DataTable = ({colDefs, data = [] }) => {
    const [sortBy, setSortBy] = useState("");
    const [sortOrder, setSortOrder] = useState("");

    useEffect(() => {
        const column = colDefs.find(col => !!col.sort)
        if (column) {
            setSortBy(column.field)
            setSortOrder(column.sort)
        }
    }, [])

    const sortedData = useMemo(() => {
        /**
         * default fields can act as secondary sort on fields in that array in that particular order
         * currently not being used
         */
        if (sortBy && sortOrder ) {
            return sortData(data, sortBy, sortOrder, [], colDefs)
        } else {
            return  data
        }
    }, [data, sortBy, sortOrder, colDefs])

    const handleHeaderClick = (field) => {
        if (sortBy === field) {
            if (sortOrder === 'asc') {
                setSortOrder('desc')
            } else {
                setSortOrder('asc')
            }
        }  else {
            setSortBy(field)
            setSortOrder('asc')
        }
    }

    const renderCell = (def, row) => {
        let value = row[def['field']]

        /**
         * evaluting value to use based on the type of the column
         */
        if (value === undefined || value === null) {
            value = ""
        } else if (def.type === 'date') {
            value = formatDate(value)
        } else if (def.type === 'bool') {
            value = !!value
        }

        /**
         * checking for custom cell renderer.
         */
        if (def.renderCell) {
            const cellProps = {
                value: value
            }
            return def.renderCell(cellProps)
        } else if (def.type === 'bool') {
            return <BoolIcon value={value}/>
        }
        return value
    }

    return (
        <div>
            <table className="table">
                <TableHeader
                    colDefs={colDefs}
                    sortOrder={sortOrder}
                    sortBy={sortBy}
                    handleClick={handleHeaderClick}
                />
                <tbody>
                {sortedData.map((row, rowIndex) => {
                    return <tr key={rowIndex}>
                        {colDefs.map((def, i) => {
                            return <td key={i}>{renderCell(def, row)}</td>
                        })}
                    </tr>
                })}
                </tbody>
            </table>
        </div>
    )
}

const BoolIcon = ({value}) => {
    return (
        <span className="material-icons">
      { value === true ? "done": "close" }
    </span>
    )
}
