<template>
        <!-- Slideshow container -->
        <div>
        <!--<button v-on:click="testsay('hi')">Say hi</button>-->
        <div class="slideshow-container">
        
          <!-- Full-width images with number and caption text -->
          <div class="mySlides">
            <div class="numbertext">1 / 3</div>
            <img src="https://cdn.pixabay.com/photo/2019/03/10/19/25/sunset-4047037_960_720.jpg" style="width:100%">
            <div class="text">Caption Text</div>
          </div>
        
          <div class="mySlides">
            <div class="numbertext">2 / 3</div>
            <img src="https://cdn.pixabay.com/photo/2019/03/11/15/05/landscape-4048720_960_720.jpg" style="width:100%">
            <div class="text">Caption Two</div>
          </div>
        
          <div class="mySlides">
            <div class="numbertext">3 / 3</div>
            <img src="https://cdn.pixabay.com/photo/2019/03/08/15/05/landscape-4042502_960_720.jpg" style="width:100%">
            <div class="text">Caption Three</div>
          </div>
        
          <!-- Next and previous buttons -->
          <a class="prev" v-on:click="plusSlides(-1)">&#10094;</a>
          <a class="next" v-on:click="plusSlides(1)">&#10095;</a>
         <!-- <button class="prev" v-on:click="plusSlides(-1)">&#10094;</button>
          <button class="next" v-on:click="plusSlides(1)">&#10095;</button>-->
        <div style="text-align:center">
          <span class="dot" v-on:click="currentSlide(1)"></span> 
          <span class="dot" v-on:click="currentSlide(2)"></span> 
          <span class="dot" v-on:click="currentSlide(3)"></span> 
        </div>
      </div>
      </br>
      <!-- The dots/circles -->
        <div style="text-align:center">
          <span class="dot" v-on:click="currentSlide(1)"></span> 
          <span class="dot" v-on:click="currentSlide(2)"></span> 
          <span class="dot" v-on:click="currentSlide(3)"></span> 
        </div>
    </div>
</template>
<script>


export default {
  name: 'MyCarousel',
  components:{
  },
  data () {
    return {
        _slideIndex:null,
    }
  },
  mounted(){
    this._slideIndex = 1;
    this._showSlides(this.slideIndex);
  },
  methods:{
    testsay: function (message) {
      alert(message)
    },
    // Next/previous controls
    plusSlides(n) {
        console.log(this._slidesIndex, n);
        this._showSlides(this._slideIndex += n);
      },
    // Thumbnail image controls
    currentSlide(n) {
        console.log(this._slidesIndex, n);
        this._showSlides(this._slideIndex = n);
      },
    _showSlides(n) {
        console.log(this._slideIndex);
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {this._slideIndex = 1} 
        if (n < 1) {this._slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none"; 
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[this._slideIndex-1].style.display = "block"; 
        dots[this._slideIndex-1].className += " active";
      },
    
  }
}
</script>
<style scoped>

/* Slideshow container */
.slideshow-container {
  position: relative;
  margin: auto;
}

/* Hide the images by default */
.mySlides {
  display: none;
  vertical-align: middle;
  height: 50vh;
}

img {
    vertical-align: bottom;
    max-height:90%;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 30%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}


/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 100px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  bottom: 20px;
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation*/ 
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4} 
  to {opacity: 1}
}
</style>