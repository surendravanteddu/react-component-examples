import React from "react";
import 'bulma/css/bulma.min.css';

export const TableHeader = ({colDefs, sortOrder, sortBy, handleClick}) => {
    return (
        <thead>
        <tr>
            {colDefs.map((def, i) => {
                return <th key={i} onClick={() => handleClick(def.field)}>
                    <div className="cellHeader">
                        <span>{def.header}</span>
                        {def.field === sortBy && (
                            <span className="material-icons">
                                { sortOrder === "asc" ? "expand_more": "expand_less" }
                            </span>)
                        }
                    </div>
                </th>
            })}
        </tr>
        </thead>
    )
}
