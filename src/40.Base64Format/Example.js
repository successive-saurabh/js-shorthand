function base64Convertor(file) {
  const binaryData = fs.readFileSync(file);
  const base64 = new Buffer(binaryData).toString('base64');
  return base64;
}
