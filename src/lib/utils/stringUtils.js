const formatForDomId = stringArray => {
    let processedStringArray = stringArray.map(s => {
        return s.toLowerCase().replaceAll('.','').replaceAll(' ','');
    })
    return processedStringArray.join('-')
}

export {
    formatForDomId
}