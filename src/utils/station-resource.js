export const fetchStationResource = async (url, keywords) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    const stationList = Array.isArray(data.stationRes) ? data.stationRes : [];

    // 仅保留终点标识命中关键词的站点资源。
    return stationList.filter((station) => {
        if (!Array.isArray(station.destination)) {
            return false;
        }

        return keywords.some((keyword) =>
            station.destination.includes(keyword)
        );
    });
};
