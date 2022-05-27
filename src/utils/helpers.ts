export const siteTitle = (title?: string) => {
  const { NEXT_PUBLIC_APP_NAME } = process.env;
  return `${title ?? ""} ${title && NEXT_PUBLIC_APP_NAME ? "-" : ""} ${NEXT_PUBLIC_APP_NAME ?? ""}`;
};
