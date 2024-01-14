<template>
  <div>
    <div class="flex w-full justify-between">
      <div class="relative pt-20">
        <span class="slide-enter-content">2024</span>
        <h1 class="font-medium text-4xl slide-enter-content">Hey, I am Qingyun119 (qìng yǔn).</h1>
        <p class="slide-enter-content"><a>Goodbye, 2023!</a> You have brought us countless memories and experiences,
          making us
          grow and become strong. Thank
          you for your company, and we will welcome the new year with hope and dreams.</p>
        <p class="slide-enter-content"><a>2024</a> is coming with new hopes and dreams. Let's leave behind the troubles
          and
          troubles of the past, greet the
          new year with a smile and courage, and believe that the future will be better!</p>
        <p class="slide-enter-content">This is my <a>OKR (Objectives and Key Results)</a> planning for <a>2024</a>, aiming
          to achieve
          personal growth and
          development.</p>
        <div class="slide-enter-content">
          <FlagList :data="workFlag" />
        </div>
        <div class="slide-enter-content">
          <FlagList :data="lifeFlag" />
        </div>
        <div class="slide-enter-content">
          <FlagList :data="personalFlag" />
        </div>
        <h3 class="slide-enter-content">End</h3>
      </div>
    </div>
    <img class="md:fixed bottom-0 right-0 m-auto w-2/6 animate__animated animate__fadeInUp"
      src="~/assets/img/flag-theme.png" />
  </div>
</template>

<script setup lang="ts">
import FlagList from './components/FlagList.vue';

const workFlag = {
  title: "💼 Work",
  flagList: [
    {
      value: "Participate in the code review of colleagues' pull requests as much as possible.",
      percentage: () => ((14/366)*100).toFixed(2)
    },
    {
      value: "Analyze the project design and considerations of the company's internal community.",
      percentage: () => ((14/366)*100).toFixed(2)
    },
    {
      value: "Spend over 50% of the time coding, over 20% of the time participating in business.",
      percentage: () => ((14/366)*100).toFixed(2)
    },
    {
      value: "Write documents in a timely manner to summarize and review every requirement.",
      percentage: () => ((14/366)*100).toFixed(2)
    },
    {
      value: 'At least promote one rank.',
      percentage: () => ((0/1)*100).toFixed(2)
    }
  ]
}

const lifeFlag = {
  title: "🏖️ Life",
  flagList: [
    {
      value: "Go back to your hometown several times and spend more time with your parents.",
      percentage: (0).toFixed(2)
    },
    {
      value: "Take a spontaneous trip in China and gain an in-depth understanding of the local customs and culture.",
      percentage: (0).toFixed(2)
    },
    {
      value: "Discard the previous lifestyle and pursue a comfortable and free attitude towards life.",
      percentage: () => ((14/366)*100).toFixed(2)
    },
    {
      value: "Organize several camping activities to relax the body and mind and get close to nature.",
      percentage: (0).toFixed(2)
    }
  ]
}

const personalFlag = {
  title: "👨🏻‍💻 Personal",
  flagList: [
    {
      value: "With health as the top priority, exercise to lose weight and restore previous weight.",
      percentage: () => ((20/86)* 100).toFixed(2)
    },
    {
      value: "Publish more than 50 articles externally, with no restrictions on topics, in order to acquire a small number of subscribers.",
      percentage: () => ((0/50)*100).toFixed(2)
    },
    {
      value: "Continue to delve into front-end technology and become proficient in nodejs, java, sql, nginx, and docker.",
      percentage: () => (1/6*100).toFixed(2)
    },
    {
      value: "Read 24 books with no limitations on the scope, and summarize the insights and experiences.",
      percentage: () => (0/24*100).toFixed(2)
    },
    {
      value: "Summarize the front-end resume design tutorial and summarize the negotiation话术of hard and soft skills in the interview.",
      percentage: () => (0/1).toFixed(2)
    },
    {
      value: "Improve the ability to write true and false codes, and reflect the data structure design and algorithmic capabilities in programming.",
      percentage: () => (0/366*100).toFixed(2)
    },
    {
      value: "On the LeetCode platform, strive to complete all algorithmic problems of easy and medium difficulty.",
      percentage: () => (0/366*100).toFixed(2)
    },
    {
      value: "Strive to submit code on GitHub every day and turn all contribution values in 2024 green.",
      percentage: () => ((14/366)*100).toFixed(2)
    },
    {
      value: "Finish learning the source code of Vue and React, and submit more than 10 technical PRs in the open source community, with no restrictions on projects.",
      percentage: () => (0/10*100).toFixed(2)
    },
    {
      value: "Try publishing works on media platforms, including but not limited to Douyin, Twitter, Xiaohongshu, YouTube, and Bilibili.",
      percentage: () => (0/1*100).toFixed(2)
    },
    {
      value: "Attempt to develop a side business and earn the first pot of gold. There are no restrictions on the direction or industry.",
      percentage: () => (0/1*100).toFixed(2)
    },
    {
      value: "Improve English proficiency to the level where I can directly read technical documents without frequently using translation tools.",
      percentage: () => (0/1*100).toFixed(2)
    }
  ]
}
</script>

<style scoped>
span {
  font-size: 8em;
  -webkit-text-stroke-color: rgb(170 170 170 / .2);
  -webkit-text-stroke-width: 2px;
  font-weight: 700;
  color: transparent;
  position: absolute;
  top: 0;
  user-select: none;
}

p {
  max-width: 28em;
  font-size: 1.6em;
  font-weight: 300;
  line-height: 1.4;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

a {
  text-decoration: none;
  white-space: nowrap;
  color: #141414;
  position: relative;
  cursor: pointer;
}

a:after {
  content: '';
  position: absolute;
  z-index: -1;
  top: 66%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  transition: top 200ms cubic-bezier(0, 0.8, 0.14, 1);
  background-color: var(--primary);
}

a:hover:after {
  top: 0%;
}

.animate__animated {
  --animate-duration: 1s;
  --animate-delay: 1s;
  --animate-repeat: 1;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-duration: var(--animate-duration);
  animation-duration: var(--animate-duration);
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.animate__fadeInUp {
  -webkit-animation-name: fadeInUp;
  animation-name: fadeInUp;
}

.pb-33vw {
  padding-bottom: 33.33vw;
}

h3 {
  font-size: 1.7em;
  font-weight: 400;
  line-height: 1.4;
}
</style>
