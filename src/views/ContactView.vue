<template>
  <div class="about">
    <h1>Contact Us</h1>
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
        @change="valid"
        required
      ></textarea>
      <input
        type="submit"
        @click="active = true"
        value="Send"
        :disabled="validated == false"
      />
    </form>
    <div id="myModal" class="modal" v-show="active">
      <!-- Modal content -->
      <div class="modal-content">
        <span class="close" @click="active = false">&times;</span>
        <p>Thanks for contacting us</p>
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
      console.log(this.userName.length);
      console.log(this.validated);
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
<style>
.about {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  width: 500px;
  text-align: start;
}
input {
  margin-bottom: 20px;
}
textarea {
  margin-bottom: 20px;
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
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaaaaa;
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
