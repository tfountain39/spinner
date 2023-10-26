// Sources: GPT3, MDN

const progressIcons = [
  `\r| `,
  `\r/  `,
  `\r- `,
  `\r\\  `,
  `\r|  `,
  `\r/  `,
  `\r-  `,
  `\r\\  `]
// For each character in the progressIcon array, write to stdoubt at a scheduled interval
progressIcons.forEach((icon, i) => 
setTimeout(() => 
process.stdout.write(icon), i * 500));

setTimeout(() => process.stdout.write('\n'), progressIcons.length * 500);
