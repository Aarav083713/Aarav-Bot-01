if (global.__AARAV_BOT_RUNNING__) process.exit(0);
global.__AARAV_BOT_RUNNING__ = true;

setInterval(() => {
  console.log("AaravBot alive");
}, 60000);
