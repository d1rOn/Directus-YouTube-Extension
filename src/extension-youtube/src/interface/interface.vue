<template>
  <div>
    <input class="custom-input" :value="value" @input="handleChange($event.target.value)" />
    <div v-if="videoInfo">
      <img :src="videoInfo.thumbnailUrl" alt="Thumbnail" class="thumbnail" />
    </div>
    <div v-else-if="invalidUrl" class="invalid-url">
      <p>Invalid video URL or video doesn't exist</p>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import getYoutubeInfo from '../utils/getYoutubeInfo';

export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  emits: ['input'],
  setup(props, { emit }) {
    const videoInfo = ref(null);
    const invalidUrl = ref(false);

    const fetchVideoInfo = async (url) => {
      const { success, title, thumbnailUrl } = await getYoutubeInfo(url);

      if (!success) {
        videoInfo.value = null;
        invalidUrl.value = true;
        return;
      }

      videoInfo.value = {
        title,
        thumbnailUrl,
      };
      invalidUrl.value = false;
    };

    const handleChange = (value) => {
      emit('input', value);
      fetchVideoInfo(value);
    };

    watch(
      () => props.value,
      async (newVal) => {
        if (newVal) {
          await fetchVideoInfo(newVal);
        }
      },
      { immediate: true },
    );

    return {
      videoInfo,
      invalidUrl,
      handleChange,
    };
  },
};
</script>

<style scoped>
.custom-input {
  width: 100%;
  padding: 15px;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 20px;
}

.thumbnail {
  width: 100%;
}

.invalid-url {
  font-size: 14px;
  color: red;
}
</style>
