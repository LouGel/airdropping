const keccak256 = require('keccak256');
function reverseBytes(str) {
  const chunks = [];
  const hexString = str.replace('0x', '');

  for (let i = 0; i < 5; i++) {
    chunks.push(hexString.substr(i * 8, 8));
  }

  const invertedChunks = chunks.map(chunk => {
    const intChunk = parseInt(chunk, 16);
    return ~intChunk >>> 0; // Use unsigned right shift to ensure 32-bit inversion
  });

  return invertedChunks.map(chunk => chunk.toString(16).padStart(8, '0')).join('');
}
const format = ethers.utils.formatEther;
const parse = ethers.utils.parseEther;
function to8BitHex(nb) {
  return nb.toString(16).substring(0, 2).padStart(2, '0');
}

function sharesToHexString(shares) {
  return '0x' + shares.map(x => to8BitHex((~x & 0xFF) >>> 0)).join('');
}

function getArrayReversed(strs) {
  return "0x" + strs.map(reverseBytes).join('');
}
const p = await ethers.getDefaultProvider();
// const one = (new ethers.Wallet(keccak256('1'))).connect(p)
// const two = (new ethers.Wallet(keccak256('2'))).connect(p)
// const three = (new ethers.Wallet(keccak256('3'))).connect(p)
// const four = (new ethers.Wallet(keccak256('4'))).connect(p)
// const five = (new ethers.Wallet(keccak256('5'))).connect(p)
  const [dev, one, two, three, four ,five] = await ethers.getSigners();
  const addressList = [one.address, two.address, three.address, four.address, five.address];
  const shares = [20, 20, 15, 15, 30];
  const DB = await ethers.getContractFactory('DataBase');
  const SL = await ethers.getContractFactory('SpreadLove');
  const db = await DB.deploy(dev.address);
  const sl = await SL.deploy(db.address);
  // const DSD = await ethers.getContractFactory("DSD")
  // const dsd = await DSD.deploy()

  await db.setArrays(
    getArrayReversed(addressList),
    sharesToHexString(shares)
  );

