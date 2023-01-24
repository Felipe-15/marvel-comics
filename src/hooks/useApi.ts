import { useEffect, useState } from "react";
import { api } from "../config/api";

export function useApi<T = unknown>(
  url: string,
  method: "get" | "post" | "delete" = "get"
) {
  const [data, setData] = useState<T | null>();

  const controller = new AbortController();
  let isRequesting = false;

  useEffect(() => {
    isRequesting = true;
    api[method](url, { signal: controller.signal }).then((result) =>
      setData(result.data)
    );

    isRequesting = false;

    return () => {
      if (isRequesting) {
        controller.abort();
        isRequesting = false;
      }
    };
  }, []);

  return { data };
}
