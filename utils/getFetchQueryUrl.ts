import { API_KEY } from "@/constants/api";
import { IParam } from "@/types/IParam";

export function getFetchQueryUrl(
  baseUrl: string,
  params: IParam[],
  id?: string
) {
  let result = baseUrl;

  // If id exists pass as location parameter
  if (id && id.length > 0) {
    result += "/" + id;
  }

  result +=
    "?" +
    `api_key=${API_KEY}` +
    "&" +
    params.map((param) => `${param.key}=${param.value}`).join("&");

  return result;
}

export function getFetchRequestOptions(
  revalidateTime = 3600,
  tags: string[] = ["collection"]
) {
  const requestOptions = { next: { revalidate: revalidateTime, tags } };

  return requestOptions;
}
