<template>
  <div v-if="video">
    <iframe
      type="text/html"
      width="640"
      height="360"
      :src="videoURL"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    video: {
      type: Object,
    },
  },
  computed: {
    videoURL: function () {
      const videoId = this.video.id.videoId;
      return `https://www.youtube.com/embed/${videoId}`;
    },
  },
};
</script>

<style></style>
