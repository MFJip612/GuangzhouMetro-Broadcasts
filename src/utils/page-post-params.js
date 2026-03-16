const STORAGE_KEY_PREFIX = "__page_post_params__:";
const DEFAULT_EXPIRE_MS = 5 * 60 * 1000;

const normalizePagePath = (pagePath) =>
    pagePath.startsWith("/") ? pagePath : `/${pagePath}`;

const getStorageKey = (pagePath) =>
    `${STORAGE_KEY_PREFIX}${normalizePagePath(pagePath)}`;

export const setPagePostParams = (pagePath, params) => {
    const storageKey = getStorageKey(pagePath);
    // 通过本地存储暂存一次性参数，模拟页面间 POST 传参。
    uni.setStorageSync(storageKey, {
        params,
        createdAt: Date.now(),
    });
};

export const consumePagePostParams = (
    pagePath,
    fallbackParams,
    expireMs = DEFAULT_EXPIRE_MS
) => {
    const storageKey = getStorageKey(pagePath);
    const cached = uni.getStorageSync(storageKey);
    // 读取后立即清理，避免参数在后续页面复用。
    uni.removeStorageSync(storageKey);

    if (!cached || typeof cached !== "object") {
        return { ...fallbackParams };
    }

    if (Date.now() - cached.createdAt > expireMs) {
        return { ...fallbackParams };
    }

    if (!cached.params || typeof cached.params !== "object") {
        return { ...fallbackParams };
    }

    return {
        ...fallbackParams,
        ...cached.params,
    };
};
