/**
 * number()
 * @returns {string}
 */
const number = () => {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
};

/**
 * character()
 * @param length
 * @returns {string}
 */
const character = length => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

const uuid = () => {
  // http://www.ietf.org/rfc/rfc4122.txt
  let s = [];
  let hexDigits = '0123456789abcdef';
  for (let i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  // s[14] = '4';  // bits 12-15 of the time_hi_and_version field to 0010
  // s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  // s[8] = s[13] = s[18] = s[23] = '-';

  let uuid = s.join('');
  uuid = uuid.replace('-', '');
  return uuid;
}

/**
 * Guid
 */
export class Guid {

  static NEW() {
    return (number() + number() + '-' + number() + '-' + number() + '-' + number() + '-' + number() + number() + number());
  }

  static CHAR(length = 8) {
    return (character(length));
  }

  static UUID() {
    return (uuid());
  }
}
