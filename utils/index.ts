import { validAmazonURL } from "@/const/regex"

export const isValidAmazonProductURL = (url: string): boolean => {
  const parsedURL = new URL(url)
  const hostname = parsedURL.hostname

  try{
    if(validAmazonURL.test(hostname)){
      return true
    }
  } catch(error){
    return false
  }
  
  return false
}

export const extractPrice = (...elements: any)=>  {

  for(const element of elements){
    const priceText = element.text().trim()

    if(priceText) return priceText.replace(/\D/g, '')
  }
  return ''
}

