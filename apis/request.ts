import querystring from "querystring";

export type ApiOptions = {
  method: "GET" | "POST" | "DELETE" | "PUT" | "PATCH";
  body?: Record<string, unknown>;
  query?: querystring.ParsedUrlQueryInput;
};

const request = async <T>(url: string, options: ApiOptions): Promise<T> => {
  try {
    const parseBody = () => {
      if (!options.body) return undefined;
      return JSON.stringify(options.body);
    };

    const config: RequestInit = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: parseBody(),
      method: options.method,
      mode: "cors",
    };

    const requestUrl =
      options.query && typeof options.query === "object"
        ? `${url}?${querystring.stringify(options.query)}`
        : url;

    const res = await fetch(requestUrl, config);
    const data = await res.text();

    const parsedData = data === "" ? undefined : JSON.parse(data);
    if (res.ok) return parsedData;

    throw Error();
  } catch (err) {
    throw err;
  }
};

export default request;
