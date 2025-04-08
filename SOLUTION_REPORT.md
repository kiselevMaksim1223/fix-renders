# Project Changes

## Component Breakdown

The `ListPages` component was broken down into smaller components:
- `FilterAndSort`
- `List`
- `ListItem`

## Hooks

Logging for sorting, pagination, and filtering was moved to separate hooks:
- `useFilter`
- `usePagination`
- `useSort`

## Server Request Hook

A hook for server requests was implemented:
- `useFetchData`

## Data Fetching Services

Services for data fetching were added:
- `fetchItem`
- `fetchItems`

## Optimization

Render optimization was performed.

## Prettier

`Prettier` was added for code formatting.

## Styles

Styles were moved to modular SCSS files.

## Recommendations

Implementing sorting, pagination, and filtering on the frontend is not recommended. It would be better to collaborate with the backend developer to implement these functions on the backend. This would remove unnecessary logic from the frontend.

For requests, I would use `tanstack query` for data caching. Additionally, I would add a state manager (e.g., `Redux` or `Zustand`) for better data control.