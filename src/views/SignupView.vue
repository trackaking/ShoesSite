<template>
  <body>
  <div class="container has-background-dark">
  <div class="columns is-tablet is-mobile">
    <div class="column is-one-quarter "></div>
    <div class="column ">
      <div class="field">
        <label for="email" class="label">Email</label>
        <div class="control ">
          <input class="input " type="email" id="email" placeholder="Email"
                 v-model="email" aria-required="true">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
      </div>
      <div class="field">
        <label for="password" class="label">Password</label>
        <div class="control ">
          <input class="input " type="password" id="password" placeholder="Password"
                 v-model="password" required>
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
          <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
      </div>
      <div class="field is-grouped pt-5">
        <div class="control">
          <button class="button submit" v-on:click="register()">Register</button>
        </div>
      </div>
    </div>
    <div class="column is-one-quarter"></div>
  </div>
  </div>
  </body>
</template>

<script>
// import { svrURL } from '@/constant';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default {
    name: 'SignupView',
    data() {
        return {
            displayName: '',
            email: '',
            password: '',
        };
    },
    methods: {
        async register() {
            await createUserWithEmailAndPassword(getAuth(), this.email, this.password);
            try {
                console.log('Successfully registered');
                this.$router.push('/');
            } catch (error) {
                console.log(error);
            }
        },
    },
};
</script>

<style scoped>
.body{
  margin: 0;
  font-family: 'Nunito Sans';
  background-color: #2c2c54;
}
.field:not(:last-child){
  margin-bottom: 0px;
}
.columns{
  margin: 20px !important;
}
.custom-color{
  background: linear-gradient(25deg,  #786fa6 70%, #2c2c54 60%);
  padding: 35px;
  border-radius: 4px;
}
label,a{
  color: #fff !important;
}
a{
  text-decoration:underline;
  font-size: 14px;
}
.submit{
  background-color: #574b90;
  color: #fff;
  border:0px;
}
.submit:hover{
  background-color: #303952;
  color: #fff;
}
</style>
