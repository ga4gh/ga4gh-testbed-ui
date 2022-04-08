import axios from 'axios';

const simpleApiCall = (url, dataSetter, errorSetter) => {
    axios.get(url)
        .then(response => {
            dataSetter(response.data)
        }, error => {
            errorSetter(error)
        })
}

export {
    simpleApiCall
}
