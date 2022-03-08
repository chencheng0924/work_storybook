<template>
  <div
    v-if="loading"
    class="lds-spinner"
    :style="{ width: `${size}px`, height: `${size}px` }"
  >
    <div
      v-for="i in 12"
      :key="`lds-spinner-${i}`"
      :style="[
        spinnerStyleDuration,
        { transformOrigin: `${size * 0.5}px ${size * 0.5}px` },
        divsStyles[i - 1],
      ]"
    >
      <div class="div-after" :style="[spinnerStyle]" />
    </div>
    <div v-if="text" class="text" :style="{ paddingTop: `${size + 10}px`, color:`${textColor}`, fontSize: `${textSize}px` }">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: true,
    },
    size: {
      type: Number,
      default: 100,
    },
    color: {
      type: String,
      default: "#7f58af",
    },
    duration: {
      type: Number,
      default: 1.2,
    },
    text: {
      type: String,
      default: "loading...",
    },
    textColor: {
      type: String,
      default: "#333",
    },
    textSize: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {
      spinnerStyleDuration: {
        animationDuration: `${this.duration}s`,
      },
      spinnerStyle: {
        top: `${this.size * 0.0375}px`,
        left: `${this.size * 0.4625}px`,
        width: `${this.size * 0.075}px`,
        height: `${this.size * 0.225}px`,
        background: this.color,
      },
    };
  },
  computed: {
    divsStyles() {
      const vm = this;
      const divsStyles = [];
      for (let i = 1; i <= 12; i++) {
        divsStyles.push(
          vm.calcPropertyValue("animationDelay", `${this.duration}s`, 0.083 * i - 1)
        );
      }
      return divsStyles;
    },
  },
  methods: {
    calcPropertyValue(propName, originalValue, modificator) {
      const computedStyle = {};
      const timeQuantityOuter = originalValue.match(/^\d*\.?\d+/)[0];
      const timeUnit = originalValue.match(/s|(ms)$/)[0];
      const timeQuantityInner =
        Math.round(timeQuantityOuter * 1000 * modificator) / 1000;

      computedStyle[propName] = timeQuantityInner + timeUnit;
      return computedStyle;
    },
  },
};
</script>

<style scoped>
.lds-spinner {
  margin: 20px;
  position: relative;
}
.lds-spinner div {
  animation-name: lds-spinner;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}
.lds-spinner div .div-after {
  content: " ";
  position: absolute;

  border-radius: 20%;
  background: #fff;
}
.text {
  display: flex;
  justify-content: center;
}
.lds-spinner div:nth-child(1) {
  transform: rotate(0deg);
}
.lds-spinner div:nth-child(2) {
  transform: rotate(30deg);
}
.lds-spinner div:nth-child(3) {
  transform: rotate(60deg);
}
.lds-spinner div:nth-child(4) {
  transform: rotate(90deg);
}
.lds-spinner div:nth-child(5) {
  transform: rotate(120deg);
}
.lds-spinner div:nth-child(6) {
  transform: rotate(150deg);
}
.lds-spinner div:nth-child(7) {
  transform: rotate(180deg);
}
.lds-spinner div:nth-child(8) {
  transform: rotate(210deg);
}
.lds-spinner div:nth-child(9) {
  transform: rotate(240deg);
}
.lds-spinner div:nth-child(10) {
  transform: rotate(270deg);
}
.lds-spinner div:nth-child(11) {
  transform: rotate(300deg);
}
.lds-spinner div:nth-child(12) {
  transform: rotate(330deg);
}
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>