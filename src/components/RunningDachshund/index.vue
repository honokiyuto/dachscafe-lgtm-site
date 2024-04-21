<template>
  <div class="container">
    <div
      v-bind:class="{ fadeInUp: isShowComment, fadeOutDown: !isShowComment }"
    >
      <Comment :text="comment" />
    </div>
    <img :src="src" @click="handleDachshundClick" alt="Running Dachshund" />
  </div>
</template>

<script setup lang="ts">
import Comment from './Comment.vue';
import { ref } from 'vue';
import {
  DACHSHUND_GIF,
  DACHSHUND_TALK_LIST,
  GOD_IS_DEAD,
  DROPBOX_URL_LIST,
} from '../../logics/constants';
import {
  convertDropboxUrlToSrc,
  shuffleArray,
  createLGTMMd,
} from '../../logics/utils';

const comment = ref(DACHSHUND_TALK_LIST[0]);
const isShowComment = ref(false);
const isFirstDachshundClick = ref(true);

const src = convertDropboxUrlToSrc(DACHSHUND_GIF);

const closeCommentSeconds = async (msec: number = 3000) => {
  setTimeout(() => {
    isShowComment.value = false;
  }, msec);
};

const handleDachshundClick = () => {
  isShowComment.value = false;
  const randomUrl = shuffleArray(DROPBOX_URL_LIST)[0];
  const randomLGTMMd = createLGTMMd(convertDropboxUrlToSrc(randomUrl));
  const randomDachshundTalk = shuffleArray(
    isFirstDachshundClick.value
      ? DACHSHUND_TALK_LIST
      : [...DACHSHUND_TALK_LIST, GOD_IS_DEAD],
  )[0];
  comment.value = randomDachshundTalk;
  isShowComment.value = true;
  navigator.clipboard.writeText(randomLGTMMd);
  isFirstDachshundClick.value = false;
  closeCommentSeconds(1000);
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

img {
  width: 100px;
  height: 30px;
  filter: opacity(50%);
  object-fit: cover;
  object-position: bottom;
}

.fadeInUp {
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

.fadeOutDown {
  animation-name: fadeDownAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes fadeDownAnime {
  from {
    opacity: 1;
    transform: translateY(0px);
  }

  to {
    opacity: 0;
    transform: translateY(100px);
  }
}
</style>
