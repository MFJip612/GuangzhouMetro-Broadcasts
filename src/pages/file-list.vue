<template>
	<view>
        <uni-notice-bar show-icon scrollable single text="音频文件由 bilibili@红茶w 录制整理，未经许可严禁转载。" id="notice"></uni-notice-bar>
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
	</view>
</template>

<script>
import { ref, watch, onMounted } from 'vue';

export default {
    name: 'FileTree',
    props: {
        contents: {
            type: Array,
            default: () => []
        }
    },
    setup(props) {
        const accessToken = ref(null);
        const localContents = ref([]);
        const isViewName = ref(true);

        // 初始化文件夹的展开状态
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

        const change = () => {
            isViewName.value = !isViewName.value;
        };

        const getAccessToken = async () => {
            try {
                const response = await fetch('https://api.broadcast.mfjip.site/getAccessToken', {
                    method: 'POST'
                });
                const data = await response.json();
                return data.access_token;
            } catch (error) {
                console.error('获取访问令牌失败:', error);
                return null;
            }
        };

        const getFolderContents = async (folderPath) => {
            const url = `https://graph.microsoft.com/v1.0/users/0234abe4-65d4-4827-9625-bd8f7e26df03/drive/root:/${folderPath}:/children`;
            let contents = [];
            try {
                let nextLink = url;
                while (nextLink) {
                    const response = await fetch(nextLink, {
                        headers: {
                            Authorization: `Bearer ${accessToken.value}`
                        }
                    });
                    const data = await response.json();
                    for (const item of data.value) {
                        if (item.folder) {
                            item.children = await getFolderContents(`${folderPath}/${item.name}`);
                            item.isExpanded = false; // 默认文件夹是收起状态
                        }
                        contents.push(item);
                    }
                    nextLink = data['@odata.nextLink'];
                }
            } catch (error) {
                console.error('获取目录内容失败:', error);
            }
            return contents;
        };

        const init = async () => {
            if (props.contents.length === 0) {
                accessToken.value = await getAccessToken();
                if (accessToken.value) {
                    localContents.value = await getFolderContents('broadcast');
                    localContents.value = localContents.value.map((item) => ({
                        ...item,
                        isExpanded: false // 默认文件夹是收起状态
                    }));
                } else {
                    console.error('无法获取访问令牌');
                }
            } else {
                localContents.value = props.contents.map((item) => ({
                    ...item,
                    isExpanded: false // 默认文件夹是收起状态
                }));
            }
        };

        onMounted(init);

        return {
            localContents,
            isViewName,
            toggleFolder,
            change
        };
    }
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