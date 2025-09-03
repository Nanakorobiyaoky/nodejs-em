function getKeysOrValues(obj, param = 'keys') {
    if (!obj || typeof obj !== 'object') return false
    return param === 'keys' ? Object.keys(obj) : Object.values(obj)
}


const getKeysOrValuesArray = (obj, param = 'keys') => {
    if (!obj || typeof obj !== 'object') return false
    return param === 'keys' ? Object.keys(obj) : Object.values(obj)
}