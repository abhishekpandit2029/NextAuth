export const isAuthenticate = typeof window !== 'undefined' ? localStorage?.getItem("isAuth")?.includes("true") : null
