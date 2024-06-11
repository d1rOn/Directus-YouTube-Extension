<template>
  <div class="container">
    <div v-if="videoInfo" class="video-info">
      <img :src="videoInfo.thumbnailUrl" alt="Video Preview" class="thumbnail" />
      <span class="video-title">{{ videoInfo.title }}</span>
    </div>
    <div v-else class="invalid-url">
      <p>Invalid video URL</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import getYoutubeInfo from '../utils/getYoutubeInfo';

export default {
  props: ['value'],
  setup(props) {
    const videoInfo = ref(null);

    watch(
      () => props.value,
      async (newVal) => {
        if (!newVal) return;

        const { success, title, thumbnailUrl } = await getYoutubeInfo(newVal);
        if (success) {
          videoInfo.value = {
            title,
            thumbnailUrl,
          };
        } else {
          videoInfo.value = null;
        }
      },
      { immediate: true },
    );

    return {
      videoInfo,
    };
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 27px;
}
.video-info {
  display: flex;
  align-items: center;
}
.thumbnail {
  height: 27px;
  margin-right: 10px;
}
.video-title {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.invalid-url {
  font-size: 14px;
  color: red;
}
</style>
