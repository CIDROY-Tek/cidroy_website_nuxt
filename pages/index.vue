<template>
  <div>
    <h1>CIDROY LANDING PAGE</h1>
    <div>
      <h1>
        <span class="text_1">Understanding the problem</span
        ><span class="text_2"
          >Refining your doubts</span
        >
      </h1>
    </div>
  </div>
</template>

<style scoped>
.text_1 {
  animation: text1;
}

.text_2 {
  animation: text2;
}

.text_1,
.text_2 {
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  position: relative;
  animation-duration: 15s;
  animation-timing-function: steps(25, end);
  animation-iteration-count: infinite;
}

.text_1::after,
.text_2::after {
  content: "|";
  position: absolute;
  right: 0;
  animation: caret infinite;
  animation-duration: 1s;
  animation-timing-function: steps(1, end);
}

@keyframes text2 {
  0%,
  50%,
  100% {
    width: 0;
  }

  60%,
  90% {
    width: 30%;
  }
}

@keyframes text1 {
  0%,
  50%,
  100% {
    width: 0;
  }
  10%,
  40% {
    width: 30%;
  }
}

@keyframes caret {
  0%,
  100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}
</style>


<script>
export default {
  middleware: "switch",
  data: () => ({}),
};
</script>

