<template>
  <div id="app">
    <h1>Youtube Project</h1>
    <header>
      <the-search-bar @input-change="onInputChange"></the-search-bar>
    </header>
    <section>
      <video-detail :video="selectedVideo"></video-detail>
      <video-list :videos="videos" @select-video="onVideoSelect"></video-list>
    </section>
  </div>
</template>

<script>
import theSearchBar from "@/components/TheSearchBar";
import VideoDetail from "@/components/VideoDetail";
import VideoList from "@/components/VideoList";

const API_KEY = "AIzaSyDmYmivneDZCtDS5obqJTLwNeugwc2iTo4";
const API_URL = "https://www.googleapis.com/youtube/v3/search";

export default {
  name: "App",
  data: function () {
    return {
      inputValue: null,
      videos: [],
      selectedVideo: null,
    };
  },
  components: { theSearchBar, VideoDetail, VideoList },
  methods: {
    onInputChange: async function (inputText) {
      this.inputValue = inputText;
      const params = {
        key: API_KEY,
        part: "snippet",
        type: "video",
        q: this.inputValue,
      };

      const query = Object.keys(params)
        .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k]))
        .join("&");

      const response = await fetch(`${API_URL}?${query}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        this.videos = data.items;
      }
    },
    onVideoSelect: function (video) {
      //console.log(video)
      this.selectedVideo = video;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
