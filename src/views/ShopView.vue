<template>
  <div class="loading" v-show="loading">
    <div class="lds-default">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  <div v-show="!loading" class="shop">
    <div class="product_cart" v-for="(item, index) in apiData" :key="index">
      <img :src="item.image" alt="" />
      <p class="title">{{ item.title }}</p>
      <div class="ingredients">
        <ul>
          <li v-for="i in item.ingredients" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "shopView",
  data() {
    return {
      apiData: [],
      loading: true,
    };
  },
  async created() {
    const baseURL = "https://api.sampleapis.com/coffee/hot";

    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        this.apiData = data;
        this.loading = false;
        console.log(this.apiData);
      })
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
<style scoped>
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.shop {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  max-width: 1200px;
  margin: auto;
  padding: 10px 10px;
}
.product_cart {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0px 0px 25px 0px;
}
.title {
  margin: 15px 0px 10px 0px;
  font-size: 17px;
  font-weight: 700;
}
.ingredients ul {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  font-size: 12px;
  justify-content: space-around;
  color: #838383;
  padding: 0px;
}
.ingredients ul li {
  margin: 0px;
  list-style-type: none;
}
.product_cart img {
  width: 220px;
  height: 220px;
  object-fit: cover;
  object-position: center;
}

.lds-default {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-default div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: var(--primary);
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  animation-delay: 0s;
  top: 37px;
  left: 66px;
}
.lds-default div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}
.lds-default div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}
.lds-default div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}
.lds-default div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}
.lds-default div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}
.lds-default div:nth-child(7) {
  animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}
.lds-default div:nth-child(8) {
  animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}
.lds-default div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}
.lds-default div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}
.lds-default div:nth-child(11) {
  animation-delay: -1s;
  top: 62px;
  left: 52px;
}
.lds-default div:nth-child(12) {
  animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}
@keyframes lds-default {
  0%,
  20%,
  80%,
  100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.9);
  }
}
@media (max-width: 460px) {
  .shop {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 0px;
    max-width: 1200px;
    margin: auto;
    padding: 10px 20px;
  }
  .product_cart img {
    width: 160px;
    height: 160px;
  }
  .ingredients ul {
    font-size: 11px;
    gap: 7px;
    flex-wrap: nowrap;
  }
  .ingredients ul li {
    flex: 0 0 auto;
  }
}
</style>
