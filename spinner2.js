const progressIcon = [`\r| `, `\r/  `, `\r- `, `\r\\  `, `\r|  `, `\r/  `, `\r|  `, `\r/  `, `\r/  `, `\r-  `, `\r-  `, `\r\\  `]
// For each character in the progressIcon array, write to stdoubt at a scheduled interval
chars.forEach((progressIcon, i) => setTimeout(() => process.stdout.write(progressIcon), i * 200));