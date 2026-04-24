import os from "node:os";
import fs from "node:fs";
import chalk from "chalk";

console.log(chalk.blue("Log #1: OS Info"));
console.log("Platform:", os.platform());
console.log("CPU Cores:", os.cpus().length);

console.log(chalk.yellow("\nLog #2: Reading Settings"));

if (!fs.existsSync("./settings.json")) {
  console.log(chalk.red("settings.json not found"));
  process.exit(1);
}

const settingsData = fs.readFileSync("./settings.json", "utf-8");
const settings = JSON.parse(settingsData);

console.log("App Name:", settings.appName);
console.log("Version:", settings.version);

console.log(chalk.green("\nLog #3: Checking RAM (Async)"));

const checkRAM = new Promise((resolve) => {
  const freeMem = os.freemem();
  const totalMem = os.totalmem();

  resolve({
    free: (freeMem / 1024 / 1024).toFixed(2),
    total: (totalMem / 1024 / 1024).toFixed(2)
  });
});

checkRAM
  .then((ram) => {
    console.log(chalk.green("Free RAM:"), ram.free + " MB");
    console.log(chalk.green("Total RAM:"), ram.total + " MB");
  })
  .catch((err) => {
    console.log(chalk.red("Error:"), err);
  });

console.log(chalk.red("\nLog #4: This prints BEFORE Promise finishes"));