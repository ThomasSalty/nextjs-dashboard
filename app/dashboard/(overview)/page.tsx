/*
  https://nextjs.org/learn/dashboard-app/streaming#fixing-the-loading-skeleton-bug-with-route-groups
  https://nextjs.org/docs/app/api-reference/file-conventions/route-groups

    Route groups allow you to organize files into logical groups without affecting
    the URL path structure. When you create a new folder using parentheses (), the name
    won't be included in the URL path. So /dashboard/(overview)/page.tsx becomes /dashboard.

    Here, you're using a route group to ensure loading.tsx only applies to your dashboard overview page.
*/

import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "@/app/ui/dashboard/revenue-chart";
import LatestInvoices from "@/app/ui/dashboard/latest-invoices";
import { lusitana } from "@/app/ui/fonts";
import { Suspense } from "react";
import {
  CardsSkeleton,
  LatestInvoicesSkeleton,
	RevenueChartSkeleton
} from "@/app/ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Dashboard"
};

export default function Page() {
	return (
		<main>
			<h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
				Dashboard
			</h1>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				<Suspense fallback={<CardsSkeleton />}>
					<CardWrapper />
				</Suspense>
			</div>
			<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
				<Suspense fallback={<RevenueChartSkeleton />}>
					<RevenueChart />
				</Suspense>
				<Suspense fallback={<LatestInvoicesSkeleton />}>
					<LatestInvoices />
				</Suspense>
			</div>
		</main>
	);
}
