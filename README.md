# Next.js Routing Comparison

This repo compares four different approaches to setting up a simple website using the various routing and data fetching approaches available in Next.js.

The website has a nav menu on the left and main content on the right. There are three pages: Home, About, and Contact. The nav menu content and the page content all take time to load, simulated using a `delay` function.

## Approaches Evaluateed

## Approach 1: Client-side data fetching for both slots

This is the approach in the `main` branch. It puts `use client` at the top of every `page.tsx` file, and then loads all page content client-side on page load.

This approach gives us parallelised loading, independent loading states for each slot, and no render blocking. on A notable downside is that the page navigation triggered by clicking one of the nav menu items causes the nav menu to reload and lose its UI state.

## Approach 2: Nav menu in layout.tsx, client-side fetching for main content

This builds on approach 1 by moving the nav menu into the layout. It's in the `layout-and-children-client-components` branch.

This fixes the issue of the UI state being lost on every navigation: the nav menu is now preserved intact across each page. But the layout is a server component, and uses async/await to fetch the nav menu data. As a result of this, rendering is blocked by that fetch. This sequentialises the data fetching, because the client-side fetch of the main content cannot begin until the page loads, which does not happen until the nav menu finishes rendering.

## Approach 3: Nav menu in layout.tsx, server-side fetching for main content

This builds on approach 2 by converting the main content to a server component. It's in the `layout-and-children-server-components` branch.

Thanks to `loading.tsx`, placeholder content can be displayed in the main slot while the main content is loading. However, no such loading state is possible for the nav menu when it's rendering server-side in `layout.tsx`. And the data fetching is still sequential.

## Approach 4: Nav menu as parallel route

Finally, the nav menu moves into `app/@nav` as a parallel route. This is in the `parallel-routes` branch.

This approach parallelises the server-side data fetching, with no render blocking, with loading states possible for both slots, and with nav menu UI state preserved during navigation.
