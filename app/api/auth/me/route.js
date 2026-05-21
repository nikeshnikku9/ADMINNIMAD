import { getCurrentUser } from "@/lib/auth";

export async function GET() {
  const user = getCurrentUser();

  if (!user) {
    return Response.json({ user: null }, { status: 401 });
  }

  return Response.json({ user });
}
