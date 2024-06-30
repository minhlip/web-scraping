import { validAmazonURL } from "@/const/regex"

export const isValidAmazonProductURL = (url: string): boolean => {
  const parsedURL = new URL(url)
  const hostname = parsedURL.hostname
  console.log(parsedURL)
  try{
    if(validAmazonURL.test(hostname)){
      return true
    }
  } catch(error){
    return false
  }
  
  return false
}