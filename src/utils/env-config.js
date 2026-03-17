const trimTrailingSlash = (url = "") => url.replace(/\/+$/, "");

export const joinUrl = (baseUrl, path) => {
    const normalizedBaseUrl = trimTrailingSlash(baseUrl || "");
    const normalizedPath = String(path || "").replace(/^\/+/, "");

    if (!normalizedBaseUrl) {
        return normalizedPath;
    }

    return `${normalizedBaseUrl}/${normalizedPath}`;
};

export const RESOURCE_BASE_URL = trimTrailingSlash(
    import.meta.env.VITE_RESOURCE_BASE_URL || ""
);

export const RESOURCE_INTERCITY_BASE_URL = trimTrailingSlash(
    import.meta.env.VITE_RESOURCE_INTERCITY_BASE_URL || ""
);

export const APN2HB_RESOURCE_URL =
    import.meta.env.VITE_APN2HB_RESOURCE_URL || "";

export const INDEX_AUTHOR_LINK =
    import.meta.env.VITE_INDEX_AUTHOR_LINK || "#";

export const INDEX_FORM_LINK = import.meta.env.VITE_INDEX_FORM_LINK || "#";

export const INDEX_BLOG_LINK = import.meta.env.VITE_INDEX_BLOG_LINK || "#";

export const ONEDRIVE_CONFIG = Object.freeze({
    clientId: import.meta.env.VITE_ONEDRIVE_CLIENT_ID || "",
    redirectUri: import.meta.env.VITE_ONEDRIVE_REDIRECT_URI || "",
    scope: import.meta.env.VITE_ONEDRIVE_SCOPE || "Files.Read.All",
    folderPath: import.meta.env.VITE_ONEDRIVE_FOLDER_PATH || "broadcast",
    authBaseUrl: trimTrailingSlash(import.meta.env.VITE_ONEDRIVE_AUTH_BASE_URL || ""),
    graphBaseUrl: trimTrailingSlash(import.meta.env.VITE_ONEDRIVE_GRAPH_BASE_URL || ""),
});