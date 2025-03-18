import { QueryClient } from "@tanstack/react-query";

const globalForQueryClient = global as unknown as { queryClient?: QueryClient };

export  function getQueryClient() {
  if (!globalForQueryClient.queryClient) {
    globalForQueryClient.queryClient = new QueryClient();
  }
  return globalForQueryClient.queryClient;
}
