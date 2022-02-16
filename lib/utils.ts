import CryptoJS from "crypto-js";

export function encodeBase64(s: string) {
  const words = CryptoJS.enc.Utf8.parse(s);
  const base64 = CryptoJS.enc.Base64.stringify(words);
  return base64;
}

export function decodeBase64(s: string) {
  const words = CryptoJS.enc.Base64.parse(s);
  const textString = CryptoJS.enc.Utf8.stringify(words);
  return textString;
}

export function getHash(s: string) {
  const hash = CryptoJS.SHA256(s).toString(CryptoJS.enc.Hex);
  return hash;
}
