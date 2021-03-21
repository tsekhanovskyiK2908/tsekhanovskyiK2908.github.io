<template>
  <div>
    <Header/>
    <About/>
    <Features/>
    <Tours/>
    <Stories/>
    <Footer/>
  </div>
  <!-- <router-view> -->
</template>

<script>
import Header from '@/components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';
import About from '@/components/about/About.vue';
import Features from '@/components/features/Features.vue';
import Tours from '@/components/tours/Tours.vue';
import Stories from '@/components/stories/Stories.vue';
import Vue from 'vue';
import Component from 'vue-class-component'
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)

// export default class App extends Vue ({
//   name: 'App',
//   components: {
//     Header,
//     Footer,
//     About,
//     Features
//   }
// })
@Component({
  components: {
    Header, 
    About, 
    Features,
    Tours,
    Stories,
    Footer
  }
})
export default class App extends Vue {
  
}
</script>
