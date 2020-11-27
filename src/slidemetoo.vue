<template>
<div class="bigdiv">
    <transition-group name='fade' tag='div'>
      <div class="myclass" v-for="i in [currentIndex]" :key='i'>
        <img :src="currentImg" />
        <br>
        <botton v-on:click="myfun" class="mybutton"> {{ checkdemo}} </botton>
      </div>
    </transition-group>
    <a class="prev" @click="prev" href='#'>&#10094;</a>
  <a class="next" @click="next" href='#'>&#10095;</a>
  </div>
</template>

<script>

export default {
  name: 'Slider',
  data() {
    return {
      images: [
        './src\\assets\\monkey.gif',
        './src\\assets\\theme1.jpg',
        './src\\assets\\achievements.jpg',
        ],
        checkdemo: 'try demo',
      timer: null,
      currentIndex: 0,

    }
  },

    mounted: function() {
      this.startSlide();
    },

    methods: {
      startSlide: function() {

         this.checkdemo="try demo";
        this.timer = setInterval(this.next, 5000);
      },
      next: function() {
        this.currentIndex += 1
        this.checkdemo="try demo";
      },
      prev: function() {
        this.currentIndex -= 1
        this.checkdemo="try demo";
      },
      myfun: function(){

        this.checkdemo="will open link to the project";
      },
    },

    computed: {
      currentImg: function() {
        return this.images[Math.abs(this.currentIndex) % this.images.length];
      }
    }

}
</script>

<style>
.bigdiv {
    background-image:url("D:\\Programming\\vue-webpack\\src\\assets\\experience.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
     opacity:.7 ;
    height: 100%;
    width:100%;
    position:fixed;

}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width:0%;
  opacity: 1;

}
.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width:80%;
  opacity: 0;
}
img {
height:400px;
width:50%
  }
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 40%;
  width: auto;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.7s ease;
  border-radius: 0 4px 4px 0;
  text-decoration: none;
  user-select: none;
}
/* Position the "next button" to the right */
.next {
  right: 0;
}
.prev {
  left: 0;
}
/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.9);
}
.myclass{
 margin-top:5%;

}
.mybutton{
  background:white;
  color:green;
  width:10%;
  font-size: 30px;
}
.mybutton:hover{
  background:violet;
}
.myclass:hover{
  box-shadow: 30px 30px 30px black;
}

</style>
