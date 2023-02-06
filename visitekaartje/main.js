fetch('https://cors-anywhere.herokuapp.com/https://whois.fdnd.nl/api/v1/member?id=cldepc8ku3x1b0av0dgvl1pmw')
    .then((response) => response.json())
    .then((data) => console.log(data));