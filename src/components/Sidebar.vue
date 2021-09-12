<template>
  <div
    v-bind:class="{ change_bg: ChangeBg }"
    class="side-bar p-8 fixed hidden lg:block"
  >
    <div class="max-w-full col-span-1">
      <router-link to="/"
        ><img
          src="@/assets/images/tokyu-logo.svg"
          alt="東急百貨店"
          width="150"
      /></router-link>

      <div v-on:click="menuOpenOrClose" class="menu hidden lg:block py-40 ml-8" style="height:60vh;">
        <img :src="src" alt="" srcset="" />
      </div>
      <modal
        name="hello-world"
        :draggable="true"
        :resizable="true"
        width="100%"
        height="100%"
        @opened="opend"
        @before-close="beforeClose"
        @before-open="beforeOpen"
      >
        <div class="sidebar_menu-context flex">
          <div class="each-menu flex">
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="@/assets/images/menu-vision.svg" />
                </p>
                <ul>
                  <li class="menu-list">トップインタビュー</li>
                  <li class="menu-list">融合型リテーラーとして</li>
                  <li class="menu-list">店舗と共に</li>
                  <li class="menu-list">グループと共に</li>
                  <li class="menu-list">キーワードで知る</li>
                </ul>
              </div>
              <div class="menu-block hidden">
                <p class="menu-context-title text-3xl">
                  <img src="@/assets/images/menu-project.svg" />
                </p>
                <ul>
                  <li class="menu-list">地域と共に</li>
                  <li class="menu-list">新規事業と共に</li>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="@/assets/images/menu-people.svg" />
                </p>
                <ul>
                  <li class="menu-list">キャリアフィールド</li>
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
                  <img src="@/assets/images/menu-culture.svg" />
                </p>
                <ul>
                  <li class="menu-list">若手座談会</li>
                  <li class="menu-list">男性社員座談会</li>
                  <li class="menu-list">上司×部下対談</li>
                  <li class="menu-list">メールアンケート</li>
                </ul>
              </div>
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="@/assets/images/menu-system.svg" />
                </p>
                <ul>
                  <li class="menu-list">研修制度</li>
                  <li class="menu-list">福利厚生</li>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">
                  <img src="@/assets/images/menu-recruit.svg" />
                </p>
                <ul>
                  <li>
                    <router-link to="/greeting" class="menu-list"
                      >> 人事部長メッセージ</router-link
                    >
                  </li>
                  <li class="menu-list">FAQ</li>
                  <li class="menu-list">会社概要＆募集要項</li>
                </ul>
              </div>
              <div
                class="menu-follow"
                style="margin-top: 100px; margin-left: 30px;"
              >
                <img src="@/assets/images/menu-follow-us.png" />
              </div>
              <div
                class="flex justify-between"
                style="width: 60%; margin-left: 30px; margin-top: 20px;"
              >
                <img src="@/assets/images/menu-facebook.png" />
                <img src="@/assets/images/menu-instargram.png" />
                <img src="@/assets/images/menu-youtube.png" />
                <img src="@/assets/images/menu-twitter.png" />
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-between w-9/12">
          <div class="menu-grou-together ml-8">
            <img
              src="@/assets/images/grow-together.png"
              srcset="
                @/assets/images/grow-together.png    1x,
                @/assets/images/grow-together@2x.png 2x
              "
              alt="Grow together 「共に歩む」"
              class="w-10/12"
            />
          </div>
          <div class="menu-entry-btn">
            <a
                  href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="block"
                >
          </div>
        </div>
      </modal>
      <div class="">
        <button class="mt-16">
          <p style="width: 80px">
            <a
              href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="@/assets/images/side-entry-btn.svg" alt="" />
            </a>
          </p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visionText: require("@/assets/images/side-vision.svg"),
      projectText: require("@/assets/images/side-project.svg"),
      peopleText: require("@/assets/images/side-people.svg"),
      cultureText: require("@/assets/images/side-culture.svg"),
      openBtn: require("@/assets/images/open-btn.svg"),
      closeBtn: require("@/assets/images/close-menu.svg"),
      src: require("@/assets/images/open-btn.svg"),
      ChangeBg: false,
    };
  },
  methods: {
    menuOpenOrClose: function () {
      if (this.src === this.openBtn) {
        this.$modal.show("hello-world");
        this.src = this.closeBtn;
        return;
      }

      if (this.src === this.closeBtn) {
        this.$modal.show("hello-world");
        this.src = this.openBtn;
        return;
      }
    },
    changeOpenMenu: function () {
      this.src = this.openBtn;
    },
    changeCloseMenu: function () {
      this.src = this.closeBtn;
    },
    mouseoverVision: function () {
      this.visionText = require("@/assets/images/hover-side-vision.svg");
    },
    mouseleaveVision: function () {
      this.visionText = require("@/assets/images/side-vision.svg");
    },
    mouseoverProject: function () {
      this.projectText = require("@/assets/images/hover-side-project.svg");
    },
    mouseleaveProject: function () {
      this.projectText = require("@/assets/images/side-project.svg");
    },
    mouseoverPeople: function () {
      this.peopleText = require("@/assets/images/hover-side-people.svg");
    },
    mouseleavePeople: function () {
      this.peopleText = require("@/assets/images/side-people.svg");
    },
    mouseoverCulture: function () {
      this.cultureText = require("@/assets/images/hover-side-culture.svg");
    },
    mouseleaveCulture: function () {
      this.cultureText = require("@/assets/images/side-culture.svg");
    },
    beforeOpen: function () {
      this.ChangeBg = true;
    },
    opend: function () {
      this.src = this.closeBtn;
      document.querySelector('body').setAttribute('style', 'overflow: hidden;')
    },
    beforeClose: function () {
      document.querySelector('body').removeAttribute('style', 'overflow: hidden;')
      this.ChangeBg = false;
      this.src = this.openBtn;
    },
  },
};
</script>

<style>
/* @import "@/assets/style/home.css"; */
/* @import "@/assets/style/style.css"; */


.side-bar {
  z-index: 9999;
}

.menu-close {
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin-left: 50px;
}

.menu-block ul {
  padding: 10px;
}

.menu-block ul ul {
  padding: 10px;
}
.menu-context-title {
  margin-bottom: 16px;
}

.menu-list {
  line-height: 28px;
  font-size: 14px;
}
.vm--modal {
  /* width: 85% !important; */
  box-shadow: none !important;
}
.vm--container {
  z-index: 99999 !important;
  top: 0 !important;
  left: unset !important;
  right: 0px !important;
}
.vm--overlay {
  background: none !important;
}
.change_bg {
  background: white;
  height: 100vh;
}
</style>
