<template>
    <view id="fileTree">
        <ul v-if="localContents.length">
            <li v-for="item in localContents" :key="item.id">
                <template v-if="item.folder">
                    <text @click="toggleFolder(item)" class="folder-toggle">
                        {{ item.isExpanded ? '▼' : '▶' }} 📁 {{ item.name }}
                    </text>
                    <transition name="folder">
                        <view v-show="item.isExpanded" class="sub-folder">
                            <FileTree :contents="item.children" />
                        </view>
                    </transition>
                </template>
                <template v-else>
                    <text v-show="isViewName">
                        <uni-link class="file-link" :href="item['@microsoft.graph.downloadUrl']" target="_blank">
                            📄 {{ item.name }}
                        </uni-link>
                    </text>
                </template>
            </li>
        </ul>
        <view v-else>
            <text>加载中...</text>
        </view>
    </view>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
    contents: {
        type: Array,
        default: () => []
    }
});

const localContents = ref([]);
const isViewName = ref(true);

watch(
    () => props.contents,
    (newVal) => {
        localContents.value = newVal.map((item) => ({
            ...item,
            isExpanded: false // 默认文件夹是收起状态
        }));
    },
    { immediate: true }
);

const toggleFolder = (item) => {
    item.isExpanded = !item.isExpanded;
};
</script>

<style lang="scss" scoped>
.file-link {
    color: blue;
    text-decoration: underline;
    cursor: pointer;
}

ul {
    list-style-type: none;
    padding-left: 20px;
}

li {
    margin: 5px 0;
}

.folder-toggle {
    cursor: pointer;
    user-select: none;
}

.sub-folder {
    padding-left: 20px;
}

.folder-enter-active, .folder-leave-active {
    transition: all 0.3s ease;
}

.folder-enter-from, .folder-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>