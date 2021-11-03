const args = process.argv.slice(2);

// console.log(args);

if (args.length !== 0) {
  const sortedConvertedFilteredNums = args.filter(x => x > -1).map(x => Number(x)).sort((a, b) => a - b).map(x => x * 1000);
  // console.log(sortedConvertedFilteredNums);
  for (let num of sortedConvertedFilteredNums) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, num);
  }
}