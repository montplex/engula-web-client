import { http } from "@/plugins/axios";
import type { FeeRes, FeeListOrg, ChartParams, ChartRes, FeeByDayRes, FeeByDayParams } from "#/cache";

/**
 * query metrics
 */
export const getChart = (params: ChartParams) => {
	return http.get<ChartRes>({
		url: `/metric/query`,
		params
	});
};

/**
 * Get Fee list
 */
export const getFeeList = (cacheServiceId: number) => {
	return http.get<FeeRes>({
		url: "/fee/list",
		showLoading: false,
		params: { cacheServiceId }
	});
};

/**
 * Get Fee Org list
 */
export const getFeeOrgList = () => {
	return http.get<FeeListOrg>({
		url: "/fee/org/list",
		showLoading: false
	});
};

/**
 * Get Fee list by day
 */

export const getFeeListByDay = (params: FeeByDayParams) => {
	return http.get<FeeByDayRes[]>({
		url: "/fee/org/detail-list-by-day",
		showLoading: false,
		params
	});
};
