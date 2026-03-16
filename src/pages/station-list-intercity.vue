<template>
    <view>
        <uni-group
            v-for="(item, index) in stationRes"
            :key="item.title"
            :title="`${item.title} ${item.subtitle}`"
            class="station"
            mode="card">
            <view class="station-content">
                <!-- 判断是否需要添加“站” -->
                <view>{{ formatZhTitle(item.title) }}</view>
                <!-- 判断是否需要添加“Station” -->
                <view>{{ formatEnSubtitle(item.subtitle) }}</view>
                <view class="btnGroup">
                    <button @click="playSound(item.src.approach)">报站</button>
                    <button @click="playSound(item.src.arrived)">到站</button>
                    <button class="stop-play" @click="stopPlay()">
                        停止播放
                    </button>
                </view>
            </view>
        </uni-group>
    </view>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
import { consumePagePostParams } from "@/utils/page-post-params";
import { fetchStationResource } from "@/utils/station-resource";

const PAGE_PATH = "/pages/station-list-intercity";
const DEFAULT_PARAMS = Object.freeze({
    line: "72",
    key1: "ZhaoqingToXiaojinkou",
    key2: "ZhaoqingStart",
    towards: "2xjk",
    isexpress: "local",
});

// 页面参数通过入口页写入的“POST”缓存读取，缺失时回退默认值。
const pageParams = ref(consumePagePostParams(PAGE_PATH, DEFAULT_PARAMS));
const innerAudioContext = ref(null);
const stationRes = ref([]);

// 70 以下按地铁文案规则显示，其余按城际文案规则显示。
const useMetroStyleText = computed(() => Number(pageParams.value.line) < 70);

const formatZhTitle = (title) =>
    useMetroStyleText.value && title.endsWith("站") ? title : `${title} 站`;

const formatEnSubtitle = (subtitle) => {
    if (useMetroStyleText.value) {
        return subtitle.endsWith("Railway Station")
            ? subtitle
            : `${subtitle} Station`;
    }

    return `${subtitle} Railway Station`;
};

// 获取站点资源
const getStationRes = async () => {
    try {
        const { line, key1, key2, towards, isexpress } = pageParams.value;
        stationRes.value = await fetchStationResource(
            `https://bcd.waterspo.top/intercity/${line}-${towards}-${isexpress}.json`,
            [key1, key2]
        );
    } catch (error) {
        console.error("Error fetching station resources:", error);
    }
};

// 播放音频
const playSound = (src) => {
    if (innerAudioContext.value) {
        innerAudioContext.value.pause();
        innerAudioContext.value.src = src;
        innerAudioContext.value.play();
    }
};

// 停止播放
const stopPlay = () => {
    if (innerAudioContext.value) {
        innerAudioContext.value.pause();
    }
};

// 初始化音频上下文
onMounted(() => {
    innerAudioContext.value = uni.createInnerAudioContext();
    getStationRes();
});

// 销毁音频上下文
onUnmounted(() => {
    if (innerAudioContext.value) {
        innerAudioContext.value.pause();
        innerAudioContext.value.destroy();
    }
});
</script>

<style>
.station-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
}

.btnGroup {
    display: flex;
    justify-content: center;
    gap: 20rpx;
    margin-top: 20rpx;
}

button {
    width: 200rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}

.station {
    width: auto;
}
</style>
