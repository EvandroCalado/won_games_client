import { InMemoryCache } from '@apollo/experimental-nextjs-app-support';

export const apolloCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        games: {
          keyArgs: false,
          merge(existing, incoming) {
            if (!existing) return incoming;
            return {
              ...incoming,
              data: [...existing.data, ...incoming.data],
            };
          },
        },
      },
    },
  },
});
