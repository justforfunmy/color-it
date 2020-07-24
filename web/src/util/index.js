const formatColorCode = (code) => {
  const result = [];
  for (let i = 0; i < 4; i += 1) {
    const str = code.substring(i * 6, i * 6 + 6);
    result.push(str);
  }
  return result;
};

const hex2rgb = (hex) => {
  let sColor = hex.toLowerCase();
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是16进制颜色
  if (sColor && reg.test(sColor)) {
    if (sColor.length === 4) {
      let sColorNew = '#';
      for (let i = 1; i < 4; i += 1) {
        sColorNew += sColor.slice(i, i + 1).concat(sColor.slice(i, i + 1));
      }
      sColor = sColorNew;
    }
    // 处理六位的颜色值
    const sColorChange = [];
    for (let i = 1; i < 7; i += 2) {
      // eslint-disable-next-line radix
      sColorChange.push(parseInt(`0x${sColor.slice(i, i + 2)}`));
    }
    return `${sColorChange.join(',')}`;
  }
  return sColor;
};

const rgb2hex = (rgb) => {
  const that = rgb;
  // 十六进制颜色值的正则表达式
  const reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
  // 如果是rgb颜色表示
  if (/^(rgb|RGB)/.test(that)) {
    const aColor = that.replace(/(?:\(|\)|rgb|RGB)*/g, '').split(',');
    let strHex = '#';
    for (let i = 0; i < aColor.length; i += 1) {
      let hex = Number(aColor[i]).toString(16);
      if (hex.length < 2) {
        hex = `0${hex}`;
      }
      strHex += hex;
    }
    if (strHex.length !== 7) {
      strHex = that;
    }
    return strHex;
  }
  if (reg.test(that)) {
    const aNum = that.replace(/#/, '').split('');
    if (aNum.length === 6) {
      return that;
    }
    if (aNum.length === 3) {
      let numHex = '#';
      for (let i = 0; i < aNum.length; i += 1) {
        numHex += aNum[i] + aNum[i];
      }
      return numHex;
    }
  }
  return that;
};

const isLight = (rgb) => {
  const arr = rgb.split(',');
  return arr[0] * 0.299 + arr[1] * 0.578 + arr[2] * 0.114 > 192;
};

// eslint-disable-next-line object-curly-newline
export { formatColorCode, hex2rgb, rgb2hex, isLight };
