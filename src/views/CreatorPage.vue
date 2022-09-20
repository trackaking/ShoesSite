<template>
  <body>
  <div class="container is-max-widescreen has-background-dark">
    <div class="section is-mobile">
      <img
        src="/images/homePage.png"
        alt="logo CRTP"
      />
    </div>
    <footer class="footer has-background-lightgrey">
      <div class="content has-text-centered">
        <p>
          <strong>Code By </strong> by <a href="https://www.mercurynews.com/wp-content/uploads/2017/03/warriors-hawks-basketball5.jpg?w=1437">
          Stephane Andre</a>.
        </p>
      </div>
    </footer>
  </div>
  </body>
</template>

<script>
export default {
    name: 'CreatorView',
    data() {
    // les données de la vue
        return { message: 'Welcome!' };
    },
    methods: {
        connexion() {
            console.log('test');
        },
    },
};
</script>

<style scoped>
body{
  background-color: lightgrey;
}
h1 {
  text-align: center;
}
.footer {
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: white;

}
.section {
  background-image: url(https://www.abcworldwidestone.com/wp-content/uploads/2018/03/Austral-White.jpg) ;
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;

}
.container{
  background-color : paleturquoise;
}
</style>
