<template>
  <h1>FormTodo</h1>
  <form action="">
    <section v-if="step == 1">
      <h3>Steps 1</h3>
      <input v-model="form.name" type="text" placeholder="Nhap name..." />
    </section>

    <section v-if="step == 2">
      <h3>Steps 2</h3>
      <input v-model="form.email" type="tel" placeholder="Nhap email..." />
      <input v-model="form.phone" type="email" placeholder="Nhap phone..." />
    </section>

    <section v-if="step == 3">
      <h3>Steps 3</h3>
      <textarea
        v-model="form.message"
        placeholder="Ghi chu..."
        id=""
        cols="30"
        rows="10"
      ></textarea>
    </section>
    <div class="">
      <span style="color: red" v-for="(e, index) in errors" :key="index">{{
        e
      }}</span>
    </div>

    <button v-if="step != 1" @click.prevent="prevStep">Prev Step</button>

    <button v-if="step != totalsteps" @click.prevent="nextStep">
      Next Step
    </button>

    <button v-if="step == 3" @click.prevent="sendRequired">Send</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      step: 1,
      totalsteps: 3,
      errors: [],
      form: {
        name: null,
        email: null,
        phone: null,
        message: null,
      },
    };
  },
  methods: {
    nextStep() {
      if (this.step == 1) {
        if (!this.form.name) {
          this.errors = "Vui long nhap name";
          return false;
        }
        this.errors = null;
      }
      if (this.step == 2) {
        if (!this.form.email) {
          this.errors = "Vui long nhap email";
          return false;
        }
        this.errors = null;
      }
      if (this.step == 2) {
        if (!this.form.phone) {
          this.errors = "Vui long nhap phone";
          return false;
        }
        this.errors = null;
      }

      this.step++;
    },
    prevStep() {
      this.step = 1;
    },
    sendRequired() {
      if (this.step == 3) {
        if (!this.form.message) {
          this.errors = "Vui long nhap message";
          return false;
        }
      }
      this.errors = null;
      alert("thanh cong");
    },
  },
  mounted() {},
};
</script>

<style scoped></style>
