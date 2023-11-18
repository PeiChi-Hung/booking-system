import { withAuth, NextRequestWithAuth } from "next-auth/middleware"

export default withAuth(function middleware(request: NextRequestWithAuth) {
  // "withAuth" augments "Request" with the user's token
  // console.log(request.nextUrl.pathname)
  // console.log(request.nextauth.token)
})
