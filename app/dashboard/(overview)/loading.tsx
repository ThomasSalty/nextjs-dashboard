/*
  https://nextjs.org/learn/dashboard-app/streaming#streaming-a-whole-page-with-loadingtsx
    loading.tsx is a special Next.js file built on top of React Suspense.
    It allows you to create fallback UI to show as a replacement while page content loads.

  https://react.dev/reference/react/Suspense
    <Suspense> lets you display a fallback until its children have finished loading.

      <Suspense fallback={<Loading />}>
        <SomeComponent />
      </Suspense>

    Only Suspense-enabled data sources will activate the Suspense component. They include:
      - Data fetching with Suspense-enabled frameworks like Relay and Next.js
      - Lazy-loading component code with lazy
      - Reading the value of a cached Promise with use

    Suspense does not detect when data is fetched inside an Effect or event handler.
    Suspense-enabled data fetching without the use of an opinionated framework is not yet supported.
*/
import DashboardSkeleton from "@/app/ui/skeletons";

export default function Loading() {
  // return <div>Loading...</div>;
  return <DashboardSkeleton />;
}