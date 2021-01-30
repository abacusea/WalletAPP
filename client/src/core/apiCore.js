export const enableWallet = (userId, token, enableData) => {
    return fetch(`${API}/v1/wallet/enable/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ wallet: enableData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const disableWallet = (userId, token, disableData) => {
    return fetch(`${API}/v1/wallet/disable/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ wallet: disableData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const readWallet = () => {
    return fetch(`${API}//v1/wallet/:userId`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const addToWallet = (userId, token, depositData) => {
    return fetch(`${API}/v1/wallet/deposits/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ deposit: depositData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const withdrawFrom = (userId, token, withdrawData) => {
    return fetch(`${API}/v1/wallet/withdrawals/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ withdraw: withdrawData })
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

