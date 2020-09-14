<template>
  <div class="wrap" :style="getWrapStyle()">
    <svg :width="size" :height="size">
      <g v-for="(component, index) in loaderAmount" :key="index">
        <g :transform="getTransform(getAngle(index))">
          <rect
            :style="rectStyle(index)"
            :width="rectWidth"
            :height="rectHeight"
            :x="getRectX()"
            y="0"
          />
          <rect
            style="fill:none;stroke:none"
            :width="rectWidth"
            :height="size"
            :x="getRectX()"
            y="0"
          />
        </g>
      </g>
    </svg>
    <div class="innerWrap">
      <h2 class="label">{{ currentValue }} / {{ maxValue }}</h2>
      <h4 v-if="Boolean(label)" class="label">{{ label }}</h4>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { getPercentage, getPercentageFromAmount, isUnderAmount } from "@/utils";

export default Vue.extend({
  name: "Loader",
  data: () => ({
    defaultSize: 200,
    compactSize: 100,
    defaultRectWidth: 5,
    defaultRectHeight: 30,
    compactRectWidth: 4,
    compactRectHeight: 5,
    defaultLoaderAmount: 50,
    compactLoaderAmount: 100,
    activeColor: "#df29e6",
    color: "#cccccc"
  }),
  props: {
    currentValue: {
      required: true,
      type: Number
    },
    maxValue: {
      required: true,
      type: Number
    },
    label: {
      type: String
    },
    compact: {
      type: Boolean
    }
  },
  methods: {
    getAngle(index: number) {
      return (360 / this.loaderAmount) * index;
    },
    getTransform(angle: number) {
      return `rotate(${angle},${this.size / 2},${this.size / 2})`;
    },
    getActivePercentage() {
      return getPercentage(this.currentValue, this.maxValue);
    },
    rectStyle(index: number) {
      return `fill:${
        isUnderAmount(
          index,
          getPercentageFromAmount(this.getActivePercentage(), this.loaderAmount)
        )
          ? this.activeColor
          : this.color
      };fill-opacity:1;`;
    },
    getRectX() {
      return this.size / 2 - this.rectWidth / 2;
    },
    getWrapStyle() {
      return `width: ${this.size}px; height: ${this.size}px`;
    }
  },
  computed: {
    size() {
      return this.compact ? this.compactSize : this.defaultSize;
    },
    rectWidth() {
      return this.compact ? this.compactRectWidth : this.defaultRectWidth;
    },
    rectHeight() {
      return this.compact ? this.compactRectHeight : this.defaultRectHeight;
    },
    loaderAmount() {
      return this.compact ? this.compactLoaderAmount : this.defaultLoaderAmount;
    }
  }
});
</script>

<style scoped>
.wrap {
  margin: 32px;
  position: relative;
}

.innerWrap {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
  height: auto;
}

.label {
  margin: 0;
  white-space: nowrap;
  text-align: center;
}
</style>
