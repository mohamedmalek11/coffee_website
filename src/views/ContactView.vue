<template>
  <div class="contact">
    <h2>Contact Us</h2>
    <div class="card_container">
      <div class="contact_form">
        <form ref="form" @submit.prevent="sendEmail">
          <label>Name</label>
          <input
            type="text"
            v-model="userName"
            @change="valid"
            name="user_name"
            required
          />
          <label>Email</label>
          <input
            type="email"
            v-model="userEmail"
            @change="valid"
            name="user_email"
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            v-model="usermessage"
            @keypress="valid"
            required
          ></textarea>
          <input
            type="submit"
            @click="active = true"
            value="Send"
            :disabled="validated == false"
          />
        </form>
      </div>

      <div class="social_container">
        <font-awesome-icon icon="fa-brands fa-facebook-f" />
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <font-awesome-icon icon="fa-brands fa-whatsapp" />
        <font-awesome-icon icon="fa-brands fa-linkedin-in" />
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </div>
    </div>

    <div id="myModal" class="modal" v-show="active">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="active = false">&times;</span>
        <p>Thank you for contacting us, we will respond as soon as possible</p>
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "ContactView",
  data() {
    return {
      active: false,
      validated: false,
      userName: "",
      userEmail: "",
      usermessage: "",
    };
  },

  methods: {
    valid() {
      this.userName.length > 1 &&
      this.userEmail.toLowerCase().match(/\S+@\S+\.\S+/) &&
      this.usermessage.length > 5
        ? (this.validated = true)
        : (this.validated = false);
    },
    sendEmail() {
      emailjs
        .sendForm(
          "service_nzswaap",
          "template_9mu3lan",
          this.$refs.form,
          "UiELprFBY7EewgVVH"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>
<style scoped>
@keyframes slideUp {
  0% {
    transform: translateY(100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0px);
    opacity: 1;
  }
}
@keyframes iconUp {
  0% {
    box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px,
      rgb(0 0 0 / 12%) 0px 3px 6px 0px;
  }
  100% {
    box-shadow: rgb(163 163 163 / 12%) 13px 15px 14px 0px,
      rgb(138 138 138 / 12%) 7px 15px 6px 0px;
  }
}
@media (max-width: 750px) {
  .card_container {
    max-width: 260px;
  }
  svg:not(:root).svg-inline--fa,
  svg:not(:host).svg-inline--fa {
    margin: 10px 8px !important;
  }
  .svg-inline--fa {
    height: 16px !important;
    width: 16px !important;
  }
}
.card_container {
  width: 400px;
  min-width: 200px;
}
input {
  box-shadow: rgb(177 177 177 / 32%) -4px 6px 13px -5px;
  border: 1px solid #ededed73;
  height: 33px;
  border-radius: 5px;
  font-size: 15px;
  margin-bottom: 20px;
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
label {
  font-size: 14px;
  margin-bottom: 8px;
}
.contact {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.contact_form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 30px;
  box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px,
    rgb(0 0 0 / 12%) 0px 3px 6px 0px;
  animation: slideUp 0.4s ease-in;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 100%;
  text-align: start;
}
textarea {
  margin-bottom: 20px;
  box-shadow: rgb(177 177 177 / 32%) -4px 6px 13px -5px;
  border: 1px solid #ededed73;
  height: 33px;
  border-radius: 5px;
  font-size: 15px;
  resize: none;
  height: 100px;
  padding: 10px;
  overflow: hidden;
}
textarea:focus {
  outline: none;
  box-shadow: rgb(163 163 163 / 12%) 13px 15px 14px 0px,
    rgb(138 138 138 / 12%) 7px 15px 6px 0px;
  animation: iconUp 0.2s ease-in;
}
input[type="submit"] {
  background-color: var(--primary);
  color: #fff;
}
input[type="submit"]:disabled {
  background-color: var(--grey);
  color: #fff;
}
input[type="submit"]:focus {
  background-color: var(--primaryDarcker);
  color: #fff;
}
.social_container {
  margin: 20px 0;
}
svg:not(:root).svg-inline--fa,
svg:not(:host).svg-inline--fa {
  margin: 10px 20px;
  padding: 10px;
  background-color: #fff;
  box-shadow: rgb(60 66 87 / 12%) 0px 7px 14px 0px,
    rgb(0 0 0 / 12%) 0px 3px 6px 0px;
  border-radius: 50%;
  color: var(--grey);
}
svg:not(:root).svg-inline--fa:hover,
svg:not(:host).svg-inline--fa:hover {
  box-shadow: rgb(163 163 163 / 12%) 13px 15px 14px 0px,
    rgb(138 138 138 / 12%) 7px 15px 6px 0px;
  color: var(--primary);
  animation: iconUp 0.2s ease-in;
}
.svg-inline--fa {
  height: 20px;
  width: 20px;
}
.modal {
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 40px 20px;
  width: 70%;
  border-radius: 5px;
  box-shadow: 12px 12px 12px #86868621;
  position: relative;
}
.close {
  color: #aaaaaa;
  position: absolute;
  right: 15px;
  top: 9px;
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
</style>
