import CryptoJS from "crypto-js";

const SECRET_KEY = import.meta.env.VITE_STORAGE_KEY || "your-fallback-key";

export const encrypt = (data: any): string => {
  const jsonString = JSON.stringify(data);
  const iv = CryptoJS.lib.WordArray.random(16);

  const encrypted = CryptoJS.AES.encrypt(jsonString, SECRET_KEY, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7,
  });

  let combined = iv.toString() + ":" + encrypted.toString();

  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Hex.parse(combined));
};

export const decrypt = (encrypted: string): any => {
  try {
    const decoded = CryptoJS.enc.Base64.parse(encrypted).toString(
      CryptoJS.enc.Hex,
    );

    const [ivString, ciphertext] = decoded.split(":");
    const iv = CryptoJS.enc.Hex.parse(ivString);

    const bytes = CryptoJS.AES.decrypt(ciphertext, SECRET_KEY, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  } catch (error) {
    console.error("Decryption failed:", error);
    return null;
  }
};
