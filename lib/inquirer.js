const inquirer = require('inquirer');

module.exports = {
    askLoginAcc: () => {
        const loginAcc = [
            {
                name: 'password',
                type: 'password',
                mask: '*',
                message: 'Password: ',
                validate: function(pass) {
                    if (pass == 'qq') {
                        return true;
                    } else {
                        return 'Password salah! Sepertinya anda bukan admin(?)'
                    }
                },
            },
            {
                name: 'Nomor Telepon',
                type: 'input',
                message: 'Masukan Nomor: ',
                validate: function(pass1) {
                    if (pass1) {
                        return true;
                    } else {
                        return 'Masukan nomor terlebih dahulu!'
                    }
                }
            },
            {
                name: 'Provider',
                type: 'rawlist',
                message: 'Pilih Provider: ',
                choices: ['Tri', 'Telkomsel', 'Axis', 'Indosat', 'By.U', 'XL'],
                filter(val) {
                    return val.toLowerCase();
                }
            }
        ];

        
        return inquirer.prompt(loginAcc);
    },
};