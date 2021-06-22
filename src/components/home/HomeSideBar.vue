<template>
  <div class="side-bar w-2/12 p-5 fixed  hidden lg:block">
    <div class="max-w-full col-span-1 px-2 ml-4">
      <router-link to="/greeting"
        ><img src="../../assets/images/tokyu-logo.png" alt="東急百貨店" width="150"
      /></router-link>
      <!-- <p class="hidden lg:block mt-3 tracking-widest ml-2" style="color:#16344F;">
        RECRUITMENT
      </p> -->
      <div v-on:click="show" class="menu hidden lg:block py-40 ml-8">
        <p><span style="width: 30%;"></span></p>
        <p><span style="width: 30%;"></span></p>
      </div>
      <modal
        name="hello-world"
        :draggable="true"
        :resizable="true"
        width="100%"
        height="100%"
      >
        <div class="menu-context p-10 flex">
          <div class="modal-sidebar">
            <div class="menu-logo">
              <router-link to="/"
                ><img
                  src="../../../public/tokyu-logo.png"
                  alt="東急百貨店"
                  width="150"
              /></router-link>
              <p
                class="hidden lg:block font-weight-900 ml-3 pt-1 tracking-widest"
              >
                RECRUITMENT
              </p>
            </div>
            <div>
              <p class="menu-close items-center flex" v-on:click="hide">
                <img
                  src="../../assets/images/close-menu.png"
                  alt=""
                  srcset=""
                />
              </p>
            </div>
          </div>
          <div class="each-menu flex">
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">_VISION</p>
                <ul>
                  <li class="menu-list">> トップインタビュー</li>
                  <li class="menu-list">> 融合型リテーラーとして</li>
                  <li class="menu-list">> 店舗と共に</li>
                  <li class="menu-list">> グループと共に</li>
                  <li class="menu-list">> キーワードで知る</li>
                </ul>
              </div>
              <div class="menu-block">
                <p class="menu-context-title text-3xl">_PROJECT</p>
                <ul>
                  <li class="menu-list">> 地域と共に</li>
                  <li class="menu-list">> 新規事業と共に</li>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">_PEOPLE</p>
                <ul>
                  <li class="menu-list">キャリアフィールド</li>
                  <p style="background:#333333; color:white; padding:5px;">
                    社員紹介
                  </p>
                  <ul>
                    <li class="menu-list">社員A</li>
                    <li class="menu-list">社員B</li>
                    <li class="menu-list">社員C</li>
                    <li class="menu-list">社員D</li>
                    <li class="menu-list">社員E</li>
                    <li class="menu-list">社員F</li>
                    <li class="menu-list">社員G</li>
                    <li class="menu-list">社員H</li>
                  </ul>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">_CULTURE</p>
                <ul>
                  <li class="menu-list">> 若手座談会</li>
                  <li class="menu-list">> 男性社員座談会</li>
                  <li class="menu-list">> 上司×部下対談</li>
                  <li class="menu-list">> メールアンケート</li>
                </ul>
              </div>
              <div class="menu-block">
                <p class="menu-context-title text-3xl">_SYSTEM</p>
                <ul>
                  <li class="menu-list">> 研修制度</li>
                  <li class="menu-list">> 福利厚生</li>
                </ul>
              </div>
            </div>
            <div class="menu-line">
              <div class="menu-block">
                <p class="menu-context-title text-3xl">_RECRUIT</p>
                <ul>
                  <li ><router-link to="/greeting" class="menu-list">> 人事部長メッセージ</router-link></li>
                  <li class="menu-list">> FAQ</li>
                  <li class="menu-list">> 会社概要＆募集要項</li>
                </ul>
              </div>
              <div class="menu-follow">
                <p>Follow us</p>
              </div>
            </div>
          </div>
        </div>
      </modal>
      <ul>
        <li class="menu-context-title tracking-wider font-BrandonGrotesque"><a href="/#vision" style="color:gray;">VISION</a></li>
        <li class="menu-context-title tracking-wider font-BrandonGrotesque"><a href="/#project" style="color:gray;">PROJECT</a></li>
        <li class="menu-context-title tracking-wider font-BrandonGrotesque"><a href="/#people" style="color:gray;">PEOPLE</a></li>
        <li class="menu-context-title tracking-wider font-BrandonGrotesque"><a href="/#culture" style="color:gray;">CULTURE</a></li>
      </ul>
      <div class="">
        <button class="mt-16 px-2" style="background: #003366;">
          <p class="text-2xl text-white tracking-widest" style="font-size: 20px;">ENTRY</p>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    show: function() {
      this.$modal.show("hello-world");
    },
    hide: function() {
      this.$modal.hide("hello-world");
    },
  },
};
</script>

<style>
@import "../../assets/style/home.css";
@import "../../assets/style/style.css";
.font-BrandonGrotesque{
  font-family: Brandon Grotesque;
}
.menu-close {
  position: absolute;
  top: 0px;
  bottom: 0px;
  margin-left: 50px;
}
.menu-line {
  padding: 80px 20px;
}
.menu-block {
  padding: 30px;
  margin-bottom: 30px;
}
.menu-block ul {
  padding: 10px;
}

.menu-block ul ul {
  padding: 10px;
}
.menu-context-title {
  font-size: 28px;
  font-weight: 400;
  font-family: Brandon Grotesque;
  margin-bottom: 10px;
}

.menu-list {
  font-family: Noto Sans;
  line-height: 28px;
  font-size: 14px;
}
</style>
