import useBaseName from 'history/lib/useBasename';

/**
 * Adds support for using base hrefs
 * @param browserHistory
 * @param baseName
 */
export function addBaseName(browserHistory, baseName) {
  return useBaseName(() => browserHistory)({ basename: `/${baseName}` });
}

/**
 * Fix to scroll the window to top when react router transitions to next page
 * @param browserHistory
 */
export function scrollOnRouteChange(browserHistory) {
  let lastLocationPath;

  browserHistory.listen(location => {
    // Use setTimeout to make sure this runs after React Router's own listener
    setTimeout(() => {
      // Keep default behavior of restoring scroll position when user:
      // - clicked back button
      // - is in the same path with changed query param
      // - clicked on a link that programmatically calls `history.goBack()`
      // - manually changed the URL in the address bar (here we might want
      // to scroll to top, but we can't differentiate it from the others)
      if (location.action === 'POP' || location.pathname === lastLocationPath) {
        return;
      }

      // Keep track of the last location path
      lastLocationPath = location.pathname;

      // In all other cases, scroll to top
      window.scrollTo(0, 0);
    }, 0);
  });
}
