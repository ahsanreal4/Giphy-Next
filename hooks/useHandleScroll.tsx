import { useEffect } from "react";

/**
 * useInfiniteScroll - Hook to automatically hit your function on page scroll
 * @param {function} func - The function to hit
 * @param {boolean} loading - The loading state of api
 * @return {null}
 */

function useScrollbarAtTop(
  func: Function | null = null,
  loading: boolean | null = null
) {
  // Adding event listener for scroll
  const handleScroll = () => {
    // Current height of our scroll bar
    const currScrollHeight =
      Math.round(window.scrollY + window.innerHeight) + 1;

    // Total height of page
    const pageHeight = document.documentElement.scrollHeight;

    // If current height is greater than scroll bar height
    if (currScrollHeight >= pageHeight && !loading) {
      func && func();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [loading]);

  return null;
}

export default useScrollbarAtTop;
