export const formatDate = (value) => {
    try {
        const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const date = new Date(value);
        return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    } catch(e) {
        console.warn(e)
        return "";
    }
}

export const ascOrder = (field, type) => (a,b) => {
    if (type === 'date') {
        return new Date(a[field]) > new Date(b[field]) ? 1 : -1
    }
    return a[field] > b[field] ? 1 : -1
}


export const descOrder = (field, type) => (a,b) => {
    if (type === 'date') {
        return new Date(a[field]) > new Date(b[field]) ? -1 : 1
    }
    return a[field] > b[field] ? -1 : 1
}

/**
 * order: asc | desc
 * fields: Array of field names in the order of sort precedence
 * colDefsByField: column definitions keyed by field name
 */
export const sortFunc = (a, b, order, fields, colDefsByField) => {
    for (let i=0; i<fields.length; i++) {
        const field = fields[i]
        if (a[field] !== b[field] || i+1 === fields.length) {
            const action = order === 'asc' ?
                ascOrder(field, colDefsByField[field].type) :
                descOrder(field, colDefsByField[field].type)
            return action(a, b)
        }
    }
}

export const sortData = (data, field, order, defaultFields, colDefs) => {
    let sortFields = []
    const fieldIndex = defaultFields.indexOf(field);
    if (fieldIndex === -1) {
        sortFields = [field, ...defaultFields]
    } else {
        const otherFields = defaultFields.filter(value => field !== value)
        sortFields = [field, ...otherFields]
    }

    const colDefsByField = {}
    colDefs.forEach(def => {
        colDefsByField[def.field] = def
    })

    return data.sort((a, b) => sortFunc(a, b, order, sortFields, colDefsByField))
}
