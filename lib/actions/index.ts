'use server';

import { scrapeAmazonProduct } from '../scraper';

export async function scrapeAndStoreProduct(productUrl: string): Promise<void> {
  if (!productUrl) return;

  const scrappedProduct = await scrapeAmazonProduct(productUrl);

  try {
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
