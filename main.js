import crypto, { randomBytes } from "crypto";
import { v4 as uuidv4 } from "uuid";

function generateRandomUniqueHash() {
  const rawBytes = new randomBytes(16);
  const hash = rawBytes.toString("hex");
  return hash;
}

function generateUniqueHashFromData(data) {
  //specific to data
  const hash = crypto.createHash("sha256");
  hash.update(data);
  return hash.digest("hex");
}

function generateUUID() {
  //Universal Unique Identifier
  const uniqueId = uuidv4();
  return uniqueId;
}

const uniqueHash0 = generateUniqueHashFromData("put-data-here");
const uniqueHash1 = generateRandomUniqueHash();
const uniqueHash2 = generateUUID();

console.log(uniqueHash0);
console.log(uniqueHash1);
console.log(uniqueHash2);
