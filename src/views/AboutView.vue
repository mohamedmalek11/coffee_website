<template>
  <div class="about">
    <img class="beans bean1" src="../assets/bean.png" alt="coffee bean" />
    <img class="beans bean2" src="../assets/bean2.png" alt="coffee bean" />
    <img class="beans bean3" src="../assets/bean3.png" alt="coffee bean" />
    <img class="beans bean4" src="../assets/bean.png" alt="coffee bean" />
    <img class="beans bean5" src="../assets/bean2.png" alt="coffee bean" />
    <img class="beans bean6" src="../assets/bean3.png" alt="coffee bean" />
    <div class="container">
      <img style="max-width: 800px" src="../assets/bannerAboutUs.png" alt="" />
      <h2>THE COFFEE BEAN SHOP JOURNEY</h2>
      <p>
        Not supermarket coffee, not coffee roasted months ago but really fresh
        roasted coffee beans that tastes so different from “old” roasted coffee.
        I purchased a Gaggia beans to cup machine for my home but noticed the
        coffee beans I bought were often black and oily with a bitter
        aftertaste. This changed when I had freshly roasted coffee beans from a
        coffee shop in Covent Garden. It was a revelation! Like no other coffee
        I had ever tasted! I wanted to share this experience, so the Coffee Bean
        Shop was founded in 2008. Since then, so much has happened to the
        business and I. Looking back, it's been hard work, fulfilling, enjoyable
        and sometimes daunting.
      </p>
      <h2>WHAT MAKES US DIFFERENT?</h2>
      <p>
        We have been selecting the finest green (raw) coffee beans from around
        the world, bringing them home and then freshly roasting them to order
        using our traditional flame-powered roasting equipment. This produces
        exceptional coffee which is a vastly superior product than those
        available in supermarkets. Customers repeatedly return to us for our
        excellent coffee beans and blends, the great customer service and the
        appreciation of our love of everything coffee. They also appreciate the
        fact that each bag we sell is freshly roasted to order. This means that
        we can usually roast and dispatch coffee beans to you within 24 hours of
        your order being placed online. Few other roasteries and coffee roasters
        can commit to this level of product quality and we are confident that
        you will not find a better service anywhere else. Indeed, many
        prestigious commercial clients have taken advantage of our competitive
        prices and exceptional tasting coffees - and we even supply our
        outstanding coffee products to countries across Europe. We use the best
        equipment, employ the best staff that have the best training in
        everything coffee and we love to blend unique coffees that you will not
        find anywhere else. Try some - we promise you will not be disappointed.
      </p>
    </div>
  </div>
</template>
<style scoped>
.about {
  margin-top: 20px;
  max-width: 1200px;
  margin: auto;
  position: relative;
}
.container {
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container h2 {
  text-align: start;
  width: 100%;
  margin: 33px 0px 0px 0px;
}
.container p {
  text-align: start;
  font-size: 17px;
  line-height: 1.7;
  margin-top: 10px;
}
.beans {
  position: absolute;
  animation: slideDown-4cebd208 3s cubic-bezier(0.4, 0, 0.2, 1);
}
.bean1 {
  opacity: 0.5;
  width: 70px;
  height: 70px;
  top: 450px;
  left: 100px;
  z-index: -1;
  animation-delay: -1.5s;
}
.bean2 {
  opacity: 1;
  width: 100px;
  height: 100px;
  top: 200px;
  left: 130px;
  animation-delay: -0.8s;
}
.bean3 {
  opacity: 1;
  width: 80px;
  height: 80px;
  top: 60px;
  left: 20px;
  animation-delay: -0.5s;
}
.bean4 {
  opacity: 0.5;
  width: 70px;
  height: 70px;
  top: 85px;
  right: 20px;
  z-index: -1;
  animation-delay: -0.6s;
}
.bean5 {
  opacity: 1;
  width: 100px;
  height: 100px;
  top: 430px;
  right: 100px;
  animation-delay: -1.7s;
}
.bean6 {
  opacity: 1;
  width: 80px;
  height: 80px;
  top: 250px;
  right: 150px;
  animation-delay: -0.8s;
}
@media (max-width: 1190px) {
  .container img {
    width: 100%;
  }
  .bean2 {
    opacity: 0.1;
    width: 150px;
    height: 150px;
    z-index: -1;
    top: 204px !important;
    left: -44px !important;
  }
  .bean3 {
    opacity: 0.3;
    width: 100px;
    height: 100px;
    z-index: -1;
    right: 29px !important;
  }
  .bean6 {
    opacity: 0.4;
    width: 80px;
    height: 80px;
    top: 250px;
    right: 0px;
    animation-delay: -0.8s;
  }
  .bean5 {
    opacity: 0.2;
    top: 530px;
    right: 20px;
    z-index: -1;
  }
}
@media (max-width: 800px) {
  .container h2 {
    margin: 20px 0px 0px 25px;
  }
  .container p {
    padding: 0px 15px;
  }
}
@keyframes slideDown {
  from {
    top: 0px;
    z-index: -10;
  }
  to {
  }
}
</style>
