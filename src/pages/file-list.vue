<template>
    <view>
        <uni-notice-bar show-icon scrollable single text="音频文件由 bilibili@红茶w 录制整理，未经许可严禁转载。" id="notice"></uni-notice-bar>
        <FileTree :contents="contents" />
    </view>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import FileTree from '@/components/FileTree.vue';

const contents = ref([]);

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

const getFolderContents = async (folderPath, accessToken) => {
    const url = `https://graph.microsoft.com/v1.0/users/0234abe4-65d4-4827-9625-bd8f7e26df03/drive/root:/${folderPath}:/children`;
    let contents = [];
    try {
        let nextLink = url;
        while (nextLink) {
            const response = await fetch(nextLink, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            const data = await response.json();
            for (const item of data.value) {
                if (item.folder) {
                    item.children = await getFolderContents(`${folderPath}/${item.name}`, accessToken);
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
    const accessToken = await getAccessToken();
    if (accessToken) {
        contents.value = await getFolderContents('broadcast', accessToken);
    } else {
        console.error('无法获取访问令牌');
    }
};

onMounted(init);
</script>