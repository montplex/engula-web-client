export const CachestatusTo = {
	"0": "created",
	"1": "running",
	"20": "limited",
	"200": "reject",
	"-1": "stopped",
	"-10": "terminated"
} as const;

export const Cachestatus = {
	created: "0",
	running: "1",
	limited: "20",
	reject: "200",
	stopped: "-1",
	terminated: "-10"
} as const;

/* 不同用户可以创建的 Cache 数量 */
export const hasCross = {
	lv1: 5
};

export enum CacheEnum {
	COOKIE = "Auth-Token",
	REDIRECT_ROUTE_NAME = "redirect_router_name"
}
