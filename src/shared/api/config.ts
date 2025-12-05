export function getBaseUrl() {
  const isAzure =
    process.env.WEBSITE_SITE_NAME ||
    process.env.WEBSITE_HOSTNAME ||
    process.env.AZURE_HTTP_LOGGING_ENABLED;

  if (isAzure) {
    return process.env.NEXT_PUBLIC_API_URL!;
  }

  return "http://localhost:3000";
}
