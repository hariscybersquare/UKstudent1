const API_URL = 'http://localhost:5000/personal'

fetch(API_URL)
    .then(response => response.json())
    .then(json => {
        console.log("json is ", json);
        document.getElementById("result").innerHTML = json.firstName+ ' ' + json.lastName;
    })
    .catch(error => this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
}));