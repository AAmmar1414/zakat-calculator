import inquirer from "inquirer";
let zakat = 2.5;
let goldvalueintola = 234500;
let goldminweighttotalreq = 7.5;
const answer = await inquirer.prompt([
    {
        name: "goldweight",
        message: "Enter Gold weight: ",
        type: "number"
    }
]);
let goldweight = answer.goldweight;
if (goldweight >= goldminweighttotalreq) {
    let calculatorzakat = (goldweight * goldvalueintola) * (zakat / 100);
    console.log(`The calculated value OF ZAKAT weight in ${goldweight} tola is ${calculatorzakat}`);
}
else {
    console.log("zakat is not applicable");
}
;
