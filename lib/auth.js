import { cookies } from "next/headers";
import { demoUsers } from "@/lib/inventory-defaults";

export const AUTH_COOKIE = "nimad_admin_session";

export const roleLabels = {
  "super-admin": "Super Admin",
  "inventory-staff": "Inventory Staff",
  "billing-staff": "Billing Staff",
};

export const rolePermissions = {
  "super-admin": ["dashboard", "inventory", "billing", "products", "users", "exports"],
  "inventory-staff": ["dashboard", "inventory", "products", "exports"],
  "billing-staff": ["dashboard", "billing", "inventory"],
};

function getEnvUsers() {
  if (!process.env.ADMIN_USERS_JSON) {
    return demoUsers;
  }

  try {
    const users = JSON.parse(process.env.ADMIN_USERS_JSON);
    return Array.isArray(users) && users.length > 0 ? users : demoUsers;
  } catch {
    return demoUsers;
  }
}

export function findUserByCredentials(email, password) {
  const users = getEnvUsers();

  return users.find(
    (user) =>
      String(user.email).toLowerCase() === String(email).toLowerCase() &&
      String(user.password) === String(password)
  );
}

export function createSessionPayload(user) {
  return {
    name: user.name,
    email: user.email,
    role: user.role,
    permissions: rolePermissions[user.role] || [],
    loggedInAt: new Date().toISOString(),
  };
}

export function encodeSession(payload) {
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

export function decodeSession(value) {
  if (!value) {
    return null;
  }

  try {
    return JSON.parse(Buffer.from(value, "base64url").toString("utf8"));
  } catch {
    return null;
  }
}

export function getCurrentUser() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE);
  return decodeSession(cookie?.value);
}

export function hasPermission(user, permission) {
  return Boolean(user?.permissions?.includes(permission));
}
