import useSWR from "swr"

export const fetcher = (path: string) => fetch(path).then((res) => res.json());

export function useCourse (id: number) {
  const { data, error, isLoading } = useSWR(`/api/course/courseID=${id}`, fetcher);

  return {
    user: data,
    isLoading,
    isError: error
  };
}