<template>
  <div class="lg:hidden">
    <header class="fixed w-full" style="z-index:999999999;">
      <div class="pl-5 flex justify-between">
        <div class="py-3">
          <a href="#" class=""
            ><img
              src="../../assets/images/tokyu-logo.png"
              alt="東急百貨店"
              width="120"
          /></a>
        </div>
        <div v-on:click="menuOpenOrClose" class="menu p-5">
          <img :src="src" alt="" srcset="" />
        </div>
      </div>
    </header>

    <section class="pt-20 pb-16">
      <modal
        name="hello-world-sp"
        height="100%"
        @opened="opend"
        @before-close="beforeClose"
      >
        <div class="menu-context">
          <div class="each-menu">
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-vision.png" />
                </p>
                <ul class="menu-bottom-line">
                  <li class="menu-list">> トップインタビュー</li>
                  <li class="menu-list">> 融合型リテーラーとして</li>
                  <li class="menu-list">> 店舗と共に</li>
                  <li class="menu-list">> グループと共に</li>
                  <li class="menu-list">> キーワードで知る</li>
                </ul>
              </div>
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-project.png" />
                </p>
                <ul class="menu-bottom-line">
                  <li class="menu-list">> 地域と共に</li>
                  <li class="menu-list">> 新規事業と共に</li>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-people.png" />
                </p>
                <ul class="menu-bottom-line">
                  <li class="menu-list">> キャリアフィールド</li>
                  <p
                    class="mt-8"
                    style="background:#333333; color:white; padding:5px;"
                  >
                    社員紹介
                  </p>
                  <ul>
                    <li class="menu-list"><a href="/people/1">> 社員A</a></li>
                    <li class="menu-list"><a href="/people/2">> 社員B</a></li>
                    <li class="menu-list"><a href="/people/3">> 社員C</a></li>
                    <li class="menu-list"><a href="/people/4">> 社員D</a></li>
                    <li class="menu-list"><a href="/people/5">> 社員E</a></li>
                    <li class="menu-list"><a href="/people/6">> 社員F</a></li>
                  </ul>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-culture.png" />
                </p>
                <ul class="menu-bottom-line">
                  <li class="menu-list">> 若手座談会</li>
                  <li class="menu-list">> 男性社員座談会</li>
                  <li class="menu-list">> 上司×部下対談</li>
                  <li class="menu-list">> メールアンケート</li>
                </ul>
              </div>
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-system.png" />
                </p>
                <ul class="menu-bottom-line">
                  <li class="menu-list">> 研修制度</li>
                  <li class="menu-list">> 福利厚生</li>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="../../assets/images/menu-recruit.png" />
                </p>
                <ul class="menu-bottom-line">
                  <li>
                    <router-link to="/greeting" class="menu-list"
                      >> 人事部長メッセージ</router-link
                    >
                  </li>
                  <li class="menu-list">> FAQ</li>
                  <li class="menu-list">> 会社概要＆募集要項</li>
                </ul>
              </div>
              <div class="menu-follow">
                <img src="../../assets/images/menu-follow-us.png" />
              </div>
              <div class="menu-folow-parts flex justify-between">
                <img src="../../assets/images/menu-facebook.png" />
                <img src="../../assets/images/menu-instargram.png" />
                <img src="../../assets/images/menu-youtube.png" />
                <img src="../../assets/images/menu-twitter.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="lg:flex justify-between">
          <div class="menu-entry-btn">
            <img src="../../assets/images/entry-btn.png" alt="" />
          </div>
          <div class="menu-grou-together">
            <img src="../../assets/images/grow-together.png" alt="" />
          </div>
        </div>
      </modal>
      <div class="fv-contents w-11/12 relative left-0">
        <div class="fv-sp-title p-5">
          <div class="fv-header-sp flex items-start pt-10">
            <img src="../../assets/images/fv-title.png" />
            <transition name="fade" mode="out-in">
              <img
                :src="titleImages[index]"
                :key="titleImages[index]"
                class="ml-4 mt-4"
                style="z-index:-2;"
              />
            </transition>
          </div>
        </div>
        <div class="fv-left-content">
          <transition name="fade" mode="out-in">
            <img :src="images[index]" :key="images[index]" />
          </transition>
        </div>
      </div>
    </section>
    <div class="fv-right-content absolute right-0">
      <div class="flex justify-end m-10">
        <a href="/people/2">
          <img
            src="../../assets/images/home-fv2.png"
            alt=""
            class="fv-person-animation-sp2"
            style="top: 170px;left: 65px; z-index:-2;;"
            width="85"
          />
        </a>
        <a href="/people/1">
          <img
            src="../../assets/images/home-fv1.png"
            alt=""
            class="fv-person-animation-sp1"
            style="top: -140px; left: 30px; z-index:-2;;"
            width="85"
          />
        </a>

        <a href="/people/3">
          <img
            src="../../assets/images/home-fv3.png"
            alt=""
            class="fv-person-animation-sp3"
            style="bottom: -280px; z-index:-2;;"
            width="85"
          />
        </a>
      </div>
      <div class="flex justify-end mt-96">
        <a href="/people/5">
          <img
            src="../../assets/images/home-fv5.png"
            alt=""
            class="fv-person-animation-sp5"
            style="top: 280px;left: 65px; z-index:-2;;"
            width="85"
          />
        </a>

        <a href="/people/4">
          <img
            src="../../assets/images/home-fv4.png"
            alt=""
            class="fv-person-animation-sp4"
            style="left: 30px; z-index:-2;;"
            width="85"
          />
        </a>

        <a href="/people/6">
          <img
            src="../../assets/images/home-fv6.png"
            alt=""
            class="fv-person-animation-sp6"
            style="bottom: -420px; z-index:-2;;"
            width="85"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FvSp",
  data() {
    return {
      show: true,
      index: 0,
      images: [
        require("@/assets/images/fv-main1.png"),
        require("@/assets/images/fv-main2.png"),
      ],
      src: require("@/assets/images/open-btn.png"),
      openBtn: require("@/assets/images/open-btn.png"),
      closeBtn: require("@/assets/images/close-menu.png"),
      titleImages: [
        require("@/assets/images/fv-vision.png"),
        require("@/assets/images/fv-project.png"),
        require("@/assets/images/fv-people.png"),
        require("@/assets/images/fv-culture.png"),
      ],
    };
  },
  mounted() {
    setInterval(() => {
      this.index = this.index < this.images.length - 1 ? this.index + 1 : 0;
    }, 3000);
  },
  methods: {
    menuOpenOrClose: function() {
      this.$modal.show("hello-world-sp");

      if (this.src === this.openBtn) {
        console.log(1);
        this.$modal.show("hello-world-sp");
        this.src = this.closeBtn;
        return;
      }

      if (this.src === this.closeBtn) {
        console.log(2);
        this.$modal.hide("hello-world-sp");
        this.src = this.openBtn;
        return;
      }
    },
    changeOpenMenu: function() {
      this.src = this.openBtn;
    },
    changeCloseMenu: function() {
      this.src = this.closeBtn;
    },
    opend: function() {
      this.src = this.closeBtn;
    },
    beforeClose: function() {
      this.src = this.openBtn;
    },
  },
};
</script>

<style>
.fv-person-animation-sp1 {
  animation: person_moveY-sp1 15s linear infinite;
}

@keyframes person_moveY-sp1 {
  0% {
    transform: scaleY(1) translateY(60px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-800px);
  }
}

.fv-person-animation-sp2 {
  animation: person_moveY-sp2 16s linear infinite;
}

@keyframes person_moveY-sp2 {
  0% {
    transform: scaleY(1) translateY(350px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-800px);
  }
}

.fv-person-animation-sp3 {
  animation: person_moveY-sp3 17s linear infinite;
}

@keyframes person_moveY-sp3 {
  0% {
    transform: scaleY(1) translateY(500px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-800px);
  }
}

.fv-person-animation-sp4 {
  animation: person_moveY-sp4 23s linear infinite;
}

@keyframes person_moveY-sp4 {
  0% {
    transform: scaleY(1) translateY(200px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-1600px);
  }
}

.fv-person-animation-sp5 {
  animation: person_moveY-sp5 25s linear infinite;
}

@keyframes person_moveY-sp5 {
  0% {
    transform: scaleY(1) translateY(450px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-1600px);
  }
}

.fv-person-animation-sp6 {
  animation: person_moveY-sp6 24s linear infinite;
}

@keyframes person_moveY-sp6 {
  0% {
    transform: scaleY(1) translateY(700px);
  }
  50% {
  }
  100% {
    transform: scaleY(1) translateY(-1600px);
  }
}

.font-BrandonGrotesque {
  font-family: Brandon Grotesque;
}
.font-NotoSerif {
  font-family: "Noto Serif JP", serif;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
  z-index: -3;
}
.explain-text {
  font-size: 18px;
  font-family: "Noto Sans Japanese", sans-serif;
  line-height: 32px;
  z-index: -3;
}
.fv-header-sp {
  width: 40%;
}

@keyframes anim {
  0% {
    transform: translateY(-80px);
    display: none;
  }

  100% {
    transform: translateY(-700px);
  }
}
.vm--modal {
  overflow: scroll !important;
}
@media screen and (max-width: 800px) {
  .vm--modal {
    left: 0px !important;
    width: 100% !important;
  }
  .vm--container {
    width: 100vw !important;
  }
  .each-menu {
    padding-top: 100px;
  }
  .menu-list {
    font: normal normal bold 16px/32px Noto Sans;
    letter-spacing: 0px;
    color: #333333;
  }
  .menu-line {
    padding: 0px;
  }
  .menu-block {
    margin-bottom: 0px;
    padding-top: 0px;
  }
  .menu-line .menu-follow {
    margin-top: 0px;
    margin-left: 50px;
  }
  .menu-context-title {
    width: 100px;
    height: 36px;
    margin-bottom: 0px !important;
  }

  .menu-block ul p {
    width: 140px;
    height: 35%;
    font: normal normal bold 14px/32px Noto Sans;
    text-align: center;
  }
  .menu-bottom-line {
    border-bottom: 1px solid #cccccc;
    padding-bottom: 20px !important;
    padding-top: 0px;
  }
  .menu-folow-parts {
    width: 27%;
    margin-left: 60px;
  }
  .menu-entry-btn {
    margin: 40px 0px 40px 57px;
  }
  .menu-grou-together {
    width: 80%;
    margin-left: 37px;
  }
}
</style>
