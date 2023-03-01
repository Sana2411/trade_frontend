async function Connect() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("wallet is connected with address: ", accounts);
        } catch (error) {
            console.log("user denied account access", error);
        }
    } else {
        console.error('No Ethereum provider detected');
    }
}

async function Buy() {
    const url = "http://localhost:5000/buy";
    const data = {
        address: "0x7c7b19Acf9a9EDb79Ead43b8EFd6829617291FB0",
        walletKey: "8cfe57ad8305b1f7b074ca5412cc1da63f3e916543b7d3ed41e0b060bad269d0",
        token: $('#token').val(),
        eth: $('#eth').val()
    };
    $.post(url, data).done(function (result) {
        console.log('result', result);
        alert('done');
    }).fail(function (xhr) {
        console.log('error', xhr.responseText);
    })
}

function getID() {
    const API_URL = "http://localhost:5000/getID";
    const data = {
        user: "0x7c7b19Acf9a9EDb79Ead43b8EFd6829617291FB0"
    }
    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            // Do something with the data
            console.log(data);
        })
        .catch(error => {
            // Handle error
            console.error(error);
        });
}


$(document).ready(function () {
    // call your method 
    if (true) {
        $('#connect').text('Connected').attr('disabled', 'disabled');
    }
});