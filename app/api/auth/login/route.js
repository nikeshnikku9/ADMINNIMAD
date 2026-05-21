import { AUTH_COOKIE, createSessionPayload, encodeSession, findUserByCredentials } from "@/lib/auth";

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const user = findUserByCredentials(email, password);

    if (!user) {
      return Response.json({ error: "Invalid email or password." }, { status: 401 });
    }

    const session = createSessionPayload(user);
    const response = Response.json({ user: session });

    response.headers.append(
      "Set-Cookie",
      `${AUTH_COOKIE}=${encodeSession(session)}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60 * 60 * 12}`
    );

    return response;
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
