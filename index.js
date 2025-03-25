import chalk from "chalk";
import lolcatjs from "lolcatjs";
import cowsay from "cowsay";

const Nicolas = chalk.blue("Nicolas");
const Vianel = chalk.green("Vianel");
const Hans = chalk.red("Hans");
const David = chalk.yellow("David");

lolcatjs.fromString(`Coucou les loulous :`);
console.log(cowsay.say({ text: Nicolas + Vianel + Hans + David }));
