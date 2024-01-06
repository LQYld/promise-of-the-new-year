<template>
  <div v-if="data">
    <h3 class="slide-enter-content">{{ data?.title }}</h3>
    <div>
      <svg viewBox="0 0 0 0" class="absolute opacity-0 z-0">
        <defs>
          <linearGradient id="boxGradient" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="25" y2="25">
            <stop offset="0%" :stop-color="stopColor" />
            <stop offset="100%" :stop-color="stopColor" />
          </linearGradient>

          <linearGradient id="lineGradient">
            <stop offset="0%" :stop-color="stopColor" />
            <stop offset="100%" :stop-color="stopColor" />
          </linearGradient>

          <path id="todo__line" stroke="url(#lineGradient)" d="M33 12.3h610v0.1z"></path>
          <path id="todo__box" stroke="url(#boxGradient)"
            d="M21 12.7v5c0 1.3-1 2.3-2.3 2.3H8.3C7 20 6 19 6 17.7V7.3C6 6 7 5 8.3 5h10.4C20 5 21 6 21 7.3v5.4"></path>
          <path id="todo__check" stroke="url(#boxGradient)" d="M10 13l2 2 5-5"></path>
          <circle id="todo__circle" cx="13.5" cy="12.5" r="10"></circle>
        </defs>
      </svg>
      <div class="todo-list">
        <label class="todo" v-for="(node, nodeIndex) in data?.flagList" :key="`todo_component_${nodeIndex}`">
          <input class="todo-state" type="checkbox" :checked="node.checked"/>

          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 25"
            class="todo-icon">
            <use xlink:href="#todo__line" class="todo-line"></use>
            <use xlink:href="#todo__box" class="todo-box"></use>
            <use xlink:href="#todo__check" class="todo-check"></use>
            <use xlink:href="#todo__circle" class="todo-circle"></use>
          </svg>

          <p class="todo-text">{{ node.value }}</p>
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    title: String,
    flagList: Array<{
      checked: false,
      value: string,
    }>
  },
})

const stopColor = 'rgba(133, 170, 185, 1)'
</script>

<style scoped>

h3 {
  font-size: 1.7em;
  font-weight: 400;
  line-height: 1.4;
}

.todo-list {
  /* padding: 0 10px; */
  margin: auto;
}

.todo {
  position: relative;
  display: block;
  padding: 10px 10px 10px 10%;
  margin: 0 auto;
  cursor: pointer;
  border-bottom: solid 1px #ddd;
}

.todo:last-child {
  border-bottom: none;
}

.todo-state {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.todo-text {
  max-width: 28em;
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.4;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  transition: all var(--duration)/2 linear var(--duration)/2;
}

.todo-icon {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: auto;
  fill: none;
  stroke: rgba(133, 170, 185, 1);
  stroke-width: 2;
  stroke-linejoin: round;
  stroke-linecap: round;
}


.todo-line,
.todo-box,
.todo-check {
  transition: stroke-dashoffset var(--duration) cubic-bezier(.9, .0, .5, 1);
}


.todo-circle {
  stroke: rgba(133, 170, 185, 1);
  stroke-dasharray: 1 6;
  stroke-width: 0;
  transform-origin: 13.5px 12.5px;
  transform: scale(0.4) rotate(0deg);
  animation: none var(--duration) linear;
  /* //cubic-bezier(.08,.56,.04,.98); */

}

@keyframes explode {

  /* //0% { stroke-width: 0; transform: scale(0.5) rotate(0deg); } */
  30% {
    stroke-width: 3;
    stroke-opacity: 1;
    transform: scale(0.8) rotate(40deg);

    /* //animation-timing-function: cubic-bezier(.89,.01,.95,.51); */
  }

  100% {
    stroke-width: 0;
    stroke-opacity: 0;
    transform: scale(1.1) rotate(60deg);

    /* //animation-timing-function: cubic-bezier(.08,.56,.04,.98); */
  }
}

.todo-box {
  stroke-dasharray: 56.1053, 56.1053;
  stroke-dashoffset: 0;
  transition-delay: var(--duration) * 0.2;
}

.todo-check {
  stroke: rgba(133, 170, 185, 1);
  stroke-dasharray: 9.8995, 9.8995;
  stroke-dashoffset: 9.8995;
  transition-duration: var(--duration) * 0.4;
}

.todo-line {
  stroke-dasharray: 610, 1684;
  stroke-dashoffset: 610;
}

.todo-circle {
  animation-delay: var(--duration) * 0.7;
  animation-duration: var(--duration) * 0.7;
}


.todo-state:checked~.todo-text {
  transition-delay: 0s;
  color: rgba(133, 170, 185, 1);
  opacity: 0.6;
}

.todo-state:checked~.todo-icon .todo-box {
  stroke-dashoffset: 56.1053;
  transition-delay: 0s;
}

.todo-state:checked~.todo-icon .todo-line {
  stroke-dashoffset: -8;
}

.todo-state:checked~.todo-icon .todo-check {
  stroke-dashoffset: 0;
  transition-delay: var(--duration) * 0.6;
}

.todo-state:checked~.todo-icon .todo-circle {
  animation-name: explode;
}
</style>
