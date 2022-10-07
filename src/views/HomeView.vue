<template>
  <div class="home">
    <video autoplay muted loop id="myVideo">
      <source src="../assets/background.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div class="content_wrapper"></div>
    <div class="content">
      <div style="max-width: 611px">
        <h1>Best coffee ever</h1>
        <p>
          There’s nothing wrong with a quick fix when it comes to coffee. But
          sometimes, instant mixes and single-serve designer pods just won’t do
          the trick when you’re craving high-quality beans, rich, subtle flavors
          and a true gourmet experience.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
video#myVideo {
  object-fit: cover;
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
}
.content_wrapper {
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.content {
  color: #fff;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: start;
  padding: 0px 30px;
  justify-content: end;
  width: 100%;
  height: 417px;
  max-width: 999px;
  margin: auto;
  line-height: 1.5;
}
.content h1 {
  font-size: 50px;
  text-transform: uppercase;
  margin: 0px;
}
.content p {
  font-size: 21px;
}
</style>
