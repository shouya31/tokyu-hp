<template>
  <div class="lg:hidden">
    <header class="fixed w-full" style="z-index:999999999;">
      <div class="pl-5 flex justify-between">
        <div class="py-3">
          <a href="#" class=""
            ><img
              src="../../assets/images/tokyu-logo.png"
              alt="東急百貨店"
              width="140"
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
                <ul>
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
                <ul>
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
                <ul>
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
                <ul>
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
                <ul>
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
                <ul>
                  <li>
                    <router-link to="/greeting" class="menu-list"
                      >> 人事部長メッセージ</router-link
                    >
                  </li>
                  <li class="menu-list">> FAQ</li>
                  <li class="menu-list">> 会社概要＆募集要項</li>
                </ul>
              </div>
              <div
                class="menu-follow"
                style="margin-top: 100px; margin-left: 30px;"
              >
                <img src="../../assets/images/menu-follow-us.png" />
              </div>
              <div
                class="flex justify-between"
                style="width: 60%; margin-left: 30px; margin-top: 20px;"
              >
                <img src="../../assets/images/menu-facebook.png" />
                <img src="../../assets/images/menu-instargram.png" />
                <img src="../../assets/images/menu-youtube.png" />
                <img src="../../assets/images/menu-twitter.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between w-9/12">
          <div class="menu-grou-together ml-8">
            <img
              src="../../assets/images/grow-together.png"
              alt=""
              class="w-10/12"
            />
          </div>
          <div class="menu-entry-btn">
            <img
              src="../../assets/images/entry-btn.png"
              alt=""
              class="w-11/12 mt-10"
            />
          </div>
        </div>
      </modal>
      <div class="fv-contents w-11/12 relative left-0">
        <div class="fv-sp-title p-5">
          <img src="../../assets/images/fv-vision.png" alt="" class="w-9/12" />
        </div>
        <div class="fv-left-content">
          <transition name="fade" mode="out-in">
            <img :src="images[index]" :key="images[index]" />
          </transition>
        </div>
      </div>
    </section>
    <div class="fv-right-content absolute right-0">
      <div class="flex justify-end">
        <img
          src="../../assets/images/home-fv2.png"
          alt=""
          class="relative w-2/12"
          style="top: -220px;"
        />
        <img
          src="../../assets/images/home-fv1.png"
          alt=""
          class="relative w-2/12"
          style="top: -330px;"
        />
        <img
          src="../../assets/images/home-fv3.png"
          alt=""
          class="relative w-2/12"
          style="top: -150px;"
        />
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

@keyframes anim {
  0% {
    transform: translateY(-80px);
    display: none;
  }

  100% {
    transform: translateY(-700px);
  }
}
.vm--modal{
  overflow: scroll !important;
}
</style>
