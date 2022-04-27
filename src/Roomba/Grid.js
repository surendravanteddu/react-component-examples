export const Grid = ({x = 0, y = 0, direction, size = 10}) => {
    const renderColumns = () => {
        const columns = []
        for (let i=0; i< size; i++) {
            columns.push(<div className="Column" key={i}>
                {renderRow(i)}
            </div>)
        }
        return columns
    }

    const renderRow = (column) => {
        const rows = []
        for (let i=0; i< size; i++) {
            rows.push(<div className="Cell" key={i} >
                {x === i && y === column && <span>{direction}</span>}
            </div>)
        }
        return rows
    }

    return (<div className="Grid">
        {renderColumns()}
    </div>)

}
