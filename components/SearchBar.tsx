'use client';
import { isValidAmazonProductURL } from '@/utils';
import React, { FormEvent, useState } from 'react';
import toast from 'react-hot-toast';
import { scrapeAndStoreProduct } from '@/lib/actions';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const isValidLink = isValidAmazonProductURL(search);
    if (!isValidLink) return toast.error('Please provide a valid Amazon link');
    try {
      setIsLoading(true);
      const product = await scrapeAndStoreProduct(search);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter product link"
        className="searchbar-input"
      />
      <button type="submit" className="searchbar-btn" disabled={search === ''}>
        {isLoading ? 'Seaching...' : 'Search'}
      </button>
    </form>
  );
}

export default SearchBar;
