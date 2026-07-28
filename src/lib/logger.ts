export function logInfo(message: string, context?: string) {
  if (process.env.NODE_ENV !== "production") {
    console.info(`[${context ?? "app"}] ${message}`);
  }
}

export function logError(message: string, error?: unknown, context?: string) {
  console.error(`[${context ?? "app"}] ${message}`, error);
}
