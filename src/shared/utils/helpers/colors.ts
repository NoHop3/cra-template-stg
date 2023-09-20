/**
 * Hex color string
 * @param input
 *
 * number 0-100
 * @param alpha
 *
 */
export const hexWithAlpha = (input: string, alpha: number) => {
  let num = input.replace('#', '');
  if (num.length === 8) {
    num = num.slice(0, -2);
  }
  num = num.length === 3 ? num + num : num;

  const a = Math.round(alpha * 2.55).toString(16);
  return '#' + num + (a.length === 1 ? '0' + a : a);
};

export const alterColor = function (color: string, percent: number) {
  const num = parseInt(color.replace('#', ''), 16);
  const R = (num >> 16) + percent;
  const B = ((num >> 8) & 0x00ff) + percent;
  const G = (num & 0x0000ff) + percent;

  return (
    '#' +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
};

export const getContrastingTextColor = (color: string | undefined) => {
  if (color) {
    let normalizedColorHex = color.replace('#', '');
    if (normalizedColorHex.length === 3) {
      normalizedColorHex = normalizedColorHex + normalizedColorHex;
    } else if (normalizedColorHex.length > 6) {
      normalizedColorHex = normalizedColorHex.slice(0, 6);
    }
    normalizedColorHex = '#' + normalizedColorHex;

    const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(normalizedColorHex);
    if (res) {
      const r = parseInt(res[1], 16) / 255;
      const g = parseInt(res[2], 16) / 255;
      const b = parseInt(res[3], 16) / 255;
      const max = Math.max(r, g, b);
      const min = Math.min(r, g, b);
      return (max + min) / 2 > 0.49 ? '#111111ee' : '#ffffffee';
    }
  }
  return '#fff';
};

/** @returns [red: number, green: number, blue: number, alpha: number] */
export const hex2rgba = (hex: string): number[] => {
  const num = parseInt(hex.slice(1), 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255, (num >> 24) & 255];
};

/**  @returns [hue: number, saturation: number, lightness: number] */
export const hexToHSL = (hex: string): number[] => {
  let [r, g, b] = hex2rgba(hex);

  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number;
  let s: number;
  let l = (max + min) / 2;
  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    if (h) {
      h /= 6;
    } else {
      h = 0;
    }
  }

  s = s * 100;
  s = Math.round(s) as number;
  l = l * 100;
  l = Math.round(l);
  h = Math.round(360 * h);

  return [h, s, l];
};
