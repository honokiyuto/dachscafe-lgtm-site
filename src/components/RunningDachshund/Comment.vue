<template>
  <div class="container">
    <div class="comment">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 0.5;
}

.comment {
  position: relative;
  top: 10px;
  display: inline-block;
  margin: 1.5em 0;
  padding: 15px 15px;
  min-width: 120px;
  max-width: 100%;
  color: #ffffff;
  background: #a74724;
  box-sizing: border-box;
  text-align: center;
  border-radius: 10px;
}

.comment:before {
  content: '';
  position: absolute;
  bottom: -24px;
  left: 50%;
  margin-left: -15px;
  border: 12px solid transparent;
  border-top: 12px solid #a74724;
  z-index: 2;
}

.comment:after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 50%;
  margin-left: -17px;
  z-index: 1;
}

.comment p {
  align-items: center;
  margin: 0;
  padding: 0;
  font-size: 1rem;
}

@media (max-width: 768px) {
  .comment p {
    font-size: 0.7rem;
  }
}
</style>
