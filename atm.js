let accounts = [
    {
        id: 1,
        username: 'leo',
        password: '8369',
        name: 'Leonardo Zapata',
        balance: 100.0
    },
    {
        id: 2,
        username: 'fer',
        password: '1497',
        name: 'Fernanda Fernández',
        balance: 500.0
    },
    {
        id: 3,
        username: 'lau',
        password: '6823',
        name: 'Laura López',
        balance: 80.0
    },
    {
        id: 4,
        username: 'fran',
        password: '5296',
        name: 'Francisco Rivera',
        balance: 200.0
    },
    {
        id: 5,
        username: 'bren',
        password: '9182',
        name: 'Brenda Luna',
        balance: 10.0
    }
];
let maximumBalance = 990.00;
let minumumBalance = 10.00;
var selectedAccount = undefined;


function deposit() {

    let amount = parseInt(prompt('Ingresa el monto a depositar'));
    if (selectedAccount !== undefined) {
        if (selectedAccount.balance + amount > maximumBalance) {
            alert('NO SE PUEDE DEPOSITAR, SE ALCANZÓ EL MONTO MÁXIMO');
        } else {
            selectedAccount.balance += amount;
            alert('Depósito existoso $' + selectedAccount.balance);
        }
    }
}

function withdraw() {
    let amount = parseInt(prompt('Ingresa el monto a retirar'));
    if (selectedAccount.balance - amount < minumumBalance) {
        alert('NO SE PUEDE RETIRAR, SE ALCANZO EL MONTO MÍNIMO');
    } else {
        selectedAccount.balance -= amount;
        alert('Retiro exitoso $' + selectedAccount.balance);
    }

}

function checkBalance() {
    alert('El saldo de tu cuenta es: $' + selectedAccount.balance);
}

function main() {

    let username = prompt('Ingresa tu usuario');
    let password = prompt('Ingresa tu password');

    selectedAccount = accounts.find(function (account) {
        return account.username === username;
    });

    if (selectedAccount && password === selectedAccount.password) {
        document.getElementById('balance').style.display = 'block';
        document.getElementById('deposit').style.display = 'block';
        document.getElementById('withdraw').style.display = 'block';
    } else {
        alert('Credenciales incorrectas');
    }
}

main();