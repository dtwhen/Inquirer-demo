const figlet = require('figlet');
const inquirer = require('./lib/inquirer');
const fs = require('fs');

console.log(figlet.textSync('Agen Pulsa CLI', {
    font: 'Speed',
    horizontalLayout: 'default',
    verticalLayout: 'default',
    width: '100',
    whitespaceBreak: true
}));

setTimeout(function(){
    console.log('Login dibutuhkan ...\n');
}, 1000);


setTimeout(function() {
    const run = async () => {
        const credentials = await inquirer.askLoginAcc();
        fs.writeFile('./lib/hasil-input.json',
         JSON.stringify(credentials, null, ' '), (err) => {
            
            setTimeout(function() {
                console.log('\nHarap tunggu ...');
            }, 1000);

            setTimeout(function() {
                console.log('Data telah ditulis kedalam file \'JSON\'')
            }, 3000)
        });
    };

    run();
},2000);