import { validAmazonURL } from '@/const/regex';

export const isValidAmazonProductURL = (url: string): boolean => {
  const parsedURL = new URL(url);
  const hostname = parsedURL.hostname;

  try {
    if (validAmazonURL.test(hostname)) {
      return true;
    }
  } catch (error) {
    return false;
  }

  return false;
};

export const extractPrice = (...elements: any) => {
  for (const element of elements) {
    const priceText = element.text().trim();

    if (priceText) {
      const cleanPrice = priceText.replace(/[^\d.]/g, '');

      if (cleanPrice) {
        const price = cleanPrice.match(/\d+(?:,\d{3})*\.\d{2}/g)?.[0];
        return price;
      }
    }
  }
  return '';
};

export const extractCurrency = (element: any) => {
  const currency = element.text().trim().slice(0, 1);
  return currency ? currency : '';
};

export const extractDescription = ($: any) => {
  const selectors = ['a-unordered-list a-vertical'];

  for (const selector of selectors) {
    const elements = $(selector);
    if (elements.length > 0) {
      return elements
        .map((_: any, element: any) => $(element).text().trim())
        .get()
        .join('\n');
    }
  }
  return ''
};
