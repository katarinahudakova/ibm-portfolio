<template>

    <div id="hero-section-header">

        <div style="height:100vh; min-height:100vh;">
            <div class="hero-background"></div>

            <div class="hero-text-header">
                <h3>
                    <span class="typed-text">{{ typeValue }}</span> 
                    <span class="cursor" :class="{'typing': typeStatus}">&nbsp;</span>
                </h3>
            </div>
        </div>

    </div>

</template>



<script>

  export default {
    name: "Header",
    data: () => {
      return {
        typeValue: '',
        typeStatus: false,
        typeArray: ["Automation team", "Portfolio"],
        typingSpeed: 100,
        erasingSpeed: 100,
        newTextDelay: 500,
        typeArrayIndex: 0,
        charIndex: 0
      }
    },
    methods: {
      typeText() {
        if(this.charIndex < this.typeArray[this.typeArrayIndex].length) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue += this.typeArray[this.typeArrayIndex].charAt(this.charIndex);
          this.charIndex += 1;
          setTimeout(this.typeText, this.typingSpeed);
        }
        else {
          this.typeStatus = false;
          setTimeout(this.eraseText, this.newTextDelay);
        }
      },
      eraseText() {
        if(this.charIndex > 0) {
          if(!this.typeStatus)
            this.typeStatus = true;
          this.typeValue = this.typeArray[this.typeArrayIndex].substring(0, this.charIndex - 1);
          this.charIndex -= 1;
          setTimeout(this.eraseText, this.erasingSpeed);
        }
        else {
          this.typeStatus = false;
          this.typeArrayIndex += 1;
          if(this.typeArrayIndex >= this.typeArray.length)
            this.typeArrayIndex = 0;
          setTimeout(this.typeText, this.typingSpeed + 1000);
        }
      }
    },
    created() {
      setTimeout(this.typeText, this.newTextDelay + 200);
    }
  }
</script>
