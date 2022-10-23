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
    <div class="product_cart" v-for="(item, index) in filterData" :key="index">
      <v-lazy-image :src="item.image" />
      <p class="title">{{ item.title }}</p>
      <div class="ingredients">
        <ul>
          <li v-for="i in item.ingredients" :key="i">{{ i }}</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- search input -->
  <div class="search_modal" v-show="opensearch">
    <form autocomplete="off">
      <input
        type="text"
        v-model="searchVal"
        @change="filterData"
        @submit.prevent=""
      />
      <button class="mobile_search_button" @click="filterData = false">
        Search
      </button>
      <span class="close" @click="opensearch = false">&times;</span>
    </form>
  </div>
  <!-- serach icon -->
  <font-awesome-icon
    v-show="!loading && !opensearch"
    class="search"
    icon="fa-solid fa-magnifying-glass"
    @click="opensearch = !opensearch"
  />
</template>
<script>
import VLazyImage from "v-lazy-image";
export default {
  name: "shopView",
  data() {
    return {
      apiData: [],
      loading: true,
      opensearch: false,
      searchVal: "",
    };
  },
  components: {
    VLazyImage,
  },
  async created() {
    const baseURL = "https://api.sampleapis.com/coffee/hot";
    // fitching data
    await fetch(baseURL)
      .then((resp) => resp.json())
      .then((data) => {
        this.apiData = data;
        this.loading = false;
      })
      .catch((error) => {
        console.error(error);
      });
  },
  computed: {
    filterData: function () {
      // search data for name or ingredient and make new array
      return this.apiData.filter((item) => {
        return (
          item.title.toLowerCase().match(this.searchVal.toLowerCase()) ||
          item.ingredients
            .toString()
            .toLowerCase()
            .match(this.searchVal.toLowerCase())
        );
      });
    },
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 250px));
  grid-gap: 20px;
  max-width: 1200px;
  margin: auto;
  padding: 10px 10px;
  justify-content: center;
  height: 100%;
}
.product_cart {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  margin: 0px 0px 25px 0px;
  background: #fff;
  box-shadow: 3px 4px 12px 0px #e4e4e4;
  height: fit-content;
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
  padding-top: 10px;
}
.search {
  position: sticky;
  bottom: 20px;
  left: 95vw;
  margin: 20px;
  background-color: var(--primary);
  padding: 10px;
  font-size: 25px;
  color: #fff;
  width: fit-content;
  border-radius: 50%;
}
button.mobile_search_button {
  border: none;
  width: fit-content;
  padding: 5px 10px;
  background-color: var(--primary);
  color: #fff;
  border-radius: 3px;
  position: absolute;
  right: 57px;
  top: 27px;
}
.search_modal {
  position: fixed;
  bottom: 0px;
  left: 0;
  right: 0;
  box-shadow: rgb(177 177 177 / 32%) 0px -7px 13px -5px;
  padding: 20px 50px;
  background-color: #fff;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  text-align: start;
}
input {
  border: 1px solid #d1d1d173;
  height: 33px;
  border-radius: 5px;
  font-size: 15px;
}
input:focus {
  height: 33px;
  border-radius: 5px;
  box-shadow: rgb(163 163 163 / 12%) 13px 15px 14px 0px,
    rgb(138 138 138 / 12%) 7px 15px 6px 0px;
  animation: iconUp 0.2s ease-in;
}
input:focus-visible {
  outline: none;
}
.close {
  color: #aaaaaa;
  position: absolute;
  right: 15px;
  top: 5px;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
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
    grid-gap: 10px;
    max-width: 1200px;
    margin: auto;
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
  .search {
    left: 100% !important;
  }
}
</style>
