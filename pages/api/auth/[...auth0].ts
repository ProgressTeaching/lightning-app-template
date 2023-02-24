import { handleAuth, handleCallback, Session } from "@auth0/nextjs-auth0"
import jwt from "jsonwebtoken"
import { NextApiRequest, NextApiResponse } from "next"

interface JWTPayload {
  sessionId: string
  userId: string
  userEmail: string
  role: string
  exp: number
}

const afterCallback = async (
  req: NextApiRequest,
  res: NextApiResponse,
  session: Session,
) => {
  const payload: JWTPayload = {
    sessionId: session.user.sid,
    userId: session.user.sub,
    userEmail: session.user.email,
    role: process.env.PROGRESSTEACHING_DEFAULT_ROLE || "api_public",
    exp: Math.floor(Date.now() / 1000) + 60 * 60,
  }

  session.user.accessToken = jwt.sign(
    payload,
    process.env.PROGRESSTEACHING_POSTGREST_JWT_SECRET || "",
  )

  return session
}

export default handleAuth({
  async callback(req, res) {
    try {
      await handleCallback(req, res, { afterCallback })
    } catch (error: any) {
      res.status(error.status || 500).end(error.message)
    }
  },
})
