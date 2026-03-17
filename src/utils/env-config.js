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