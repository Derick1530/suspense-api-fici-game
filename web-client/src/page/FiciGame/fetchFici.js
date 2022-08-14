const fetchFici = (search) => {
    return fetch(`http://localhost:7000/data?q=${search}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

const wrapPromise = (promise) => {
    let status = 'pending';
    let result = '';
    let suspender = promise.then(
        r => {
            status = 'success';
            result = r;
        },
        e => {
            status = 'error';
            result = e;
        }
    );
    return {
        read() {
            if (status === 'pending') {
                throw suspender;
            } else if (status === 'error') {
                throw result;
            }
            return result;
        }
    }
}

export const createResource = (search) => {
    return {
        data: wrapPromise(fetchFici(search))
    }
}
