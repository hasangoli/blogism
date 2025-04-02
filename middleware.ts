// import { auth } from "@/auth";
export { auth as middleware } from "@/auth";

// export default auth((req, ctx) => {
// 	console.log("middleware req:", req);
// 	console.log("middleware ctx", ctx);

// 	if (!req.auth && req.nextUrl.pathname !== "/auth") {
// 		const newUrl = new URL("/auth", req.nextUrl.origin);
// 		return Response.redirect(newUrl);
// 	}
// });
