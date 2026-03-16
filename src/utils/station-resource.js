export const fetchStationResource = async (url, keywords) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    let data;
    try {
        data = await response.json();
    } catch (error) {
        throw new Error(`Invalid JSON response from ${url}: ${error.message}`);
    }

    const stationList = Array.isArray(data.stationRes) ? data.stationRes : [];

    // 仅保留终点标识命中关键词的站点资源。
    return stationList.filter((station) => {
        const destinations = Array.isArray(station.destination)
            ? station.destination
            : typeof station.destination === "string"
              ? [station.destination]
              : [];

        if (!destinations.length) {
            return false;
        }

        return keywords.some((keyword) =>
            destinations.some(
                (destination) =>
                    typeof destination === "string" &&
                    destination.includes(keyword)
            )
        );
    });
};
