const BASE_URL = process.env.BASE_URL!;

export const fetcher = (path: string) => fetch(path).then((res) => res.json());

export const fetchInitialData = async (path: string): Promise<unknown> => {
  const res = await fetch(`${BASE_URL}/${path}`, { next: { revalidate: 300 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch data from ${path}`);
  } 

  return res.json();
};

// export const useCourse = (id: number) => {
//   const { data, error, isLoading } = useSWR<Course>(`/api/course/courseID=${id}`, fetcher);

//   return {
//     user: data,
//     isLoading,
//     isError: error
//   };
// };