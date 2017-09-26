Moon.use(MoonRouter);

const router = new MoonRouter({
  default: '/',
  map: {
    '/': 'Home',
    '/contact': 'Contact'
  }
});

Moon.component('Home', {
  template: `<div>
    <h1>Home Component</h1>
    <router-link to="/contact">Go to Contact</router-link>
  </div>`
});

Moon.component('Contact', {
  template: `<div>
    <h1>Contact Component</h1>
    <router-link to="/">Go to Home</router-link>
  </div>`
});

const app = new Moon({
  el: '#app',
  router
})