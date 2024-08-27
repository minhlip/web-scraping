'use server';

import Product from '../models/product.mongoose';
import { connectDB } from '../mongoose';
import { scrapeAmazonProduct } from '../scraper';

export async function scrapeAndStoreProduct(productUrl: string): Promise<void> {
  if (!productUrl) return;

  try {
    connectDB();
    const scrappedProduct = await scrapeAmazonProduct(productUrl);

    let product = scrappedProduct;

    const existingProduct = await Product.findOne({
      url: scrappedProduct?.url,
    });

    if(existingProduct){
      
    }

    if (!scrappedProduct) return;
  } catch (error: any) {
    throw new Error(`Failed to create/update product: ${error.message}`);
  }
}
