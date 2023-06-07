"use client"
import React, { useEffect, useRef } from 'react';

import ListSkeleton from '../ListSkeleton';

interface LoadMoreButtonProps {
  totalResults: number;
  resultsLength: number;
  loadingMore: boolean;
  onLoadMore: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({
  totalResults,
  resultsLength,
  loadingMore,
  onLoadMore,
}) => {
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0];
      if (target.isIntersecting && !loadingMore) {
        onLoadMore();
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [loadingMore, onLoadMore]);

  if (totalResults !== undefined && totalResults !== resultsLength) {
    if (loadingMore) {
      return <ListSkeleton />;
    } else {
      return (
        <div ref={observerRef} className="flex justify-center mt-4">
          <button
            type="button"
            className="h-12 w-56 uppercase py-2.5 px-5 mr-2 text-sm font-medium text-gray-900-white rounded border border-gray-200 hover:bg-gray-100 hover:text-blue-700   dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Load More
          </button>
        </div>
      );
    }
  }

  return null;
};

export default LoadMoreButton;
