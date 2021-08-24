<template>
  <div class="recruit-requirement overflow-hidden">
    <section class="">
      <div class="flex justify-between">
        <div class="">
          <div class="relative lg:right-12">
            <img
              src="@/assets/images/recruit-title.png"
              alt=""
              class="lg:w-full people-logo-sp"
            />
          </div>
        </div>
        <div class="current-nav">
          <p>募集要項&企業概要</p>
        </div>
      </div>
    </section>
    <section class="recruit-requirement-content mx-auto">
      <h2 class="mx-auto">
        <img
          src="@/assets/images/requirement-title.png"
          alt="Application Requirements"
        />
      </h2>
      <h3 class="text-center">募集要項</h3>
      <div class="info">
        <dl>
          <dt>採用人数</dt>
          <dd>
            2022年 5名（予定）<br />
            2021年 13名<br />
            2020年 17名<br />
            2019年 33名<br />
            2018年 22名
          </dd>
          <dt>募集職種</dt>
          <dd>総合職</dd>
          <dt>募集学部・学科</dt>
          <dd>全学部・全学科</dd>
          <dt>初任給</dt>
          <dd>
            （2021年度実績）<br />
            東京地区：月給210,000円<br />
            北海道地区：月給199,500円
          </dd>
          <dt>昇給・賞与</dt>
          <dd>昇給 年１回 賞与 年２回</dd>
          <dt>退職金制度</dt>
          <dd>有</dd>
        </dl>
      </div>
    </section>
    <section class="recruit-requirement-content mx-auto">
      <h2 class="mx-auto">
        <img
          src="@/assets/images/company-overview-title.png"
          alt="Frequently Asked Questions"
        />
      </h2>
      <h3 class="text-center">企業概要</h3>
            <div class="info">
        <dl>
          <dt>ダミーダミー</dt>
          <dd>
            2022年 5名（予定）<br />
            2021年 13名<br />
            2020年 17名<br />
            2019年 33名<br />
            2018年 22名
          </dd>
          <dt>ダミーダミー</dt>
          <dd>総合職</dd>
          <dt>ダミーダミー</dt>
          <dd>全学部・全学科</dd>
          <dt>ダミーダミー</dt>
          <dd>
            （2021年度実績）<br />
            東京地区：月給210,000円<br />
            北海道地区：月給199,500円
          </dd>
          <dt>ダミーダミー</dt>
          <dd>昇給 年１回 賞与 年２回</dd>
          <dt>ダミーダミー</dt>
          <dd>有</dd>
        </dl>
      </div>
    </section>
 

    <footer class="col-span-12 bg-white pt-14 pb-10 text-center">
      <a href="/"
        ><img
          src="@/assets/images/footer-logo.png"
          alt="東急百貨店"
          width="180"
          class="mx-auto bg-white"
      /></a>
      <p class="text-xs lg:text-sm mt-5 italic">
        <small
          >Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights
          Reserved.</small
        >
      </p>
    </footer>
  </div>
</template>

<style>
.recruit-requirement {
  background-color: rgba(213, 213, 213, 0.3);
}
.recruit-requirement .recruit-requirement-content {
  max-width: 728px;
  margin-bottom: 80px;
}
.current-nav {
  width: 204px;
  height: 35px;
  border: solid 1px #707070;
  text-align: center;
  line-height: 35px;
  font-weight: bold;
  margin-right: 86px;
}
.recruit-requirement h2 {
  width: fit-content;
  margin-top: 105px;
}
.recruit-requirement h3 {
  margin-top: 70px;
  margin-bottom: 65px;
  font-size: 20px;
  font-family: "Noto Serif JP", serif;
}
.recruit-requirement .info {
  width: 100%;
}
.recruit-requirement .info dl {
display: flex;
flex-flow: row wrap;
width: 100%;
border-top: 1px solid #16344F;
}
.recruit-requirement .info dt {
color: #1B224C;
font-size: 16px;
font-weight: bold;
flex-basis: 25%;
padding: 20px 24px;
background-color: rgba(27,34,76,.3);
border-bottom: 1px solid #16344F;
}
.recruit-requirement .info dd {
flex-basis: 75%;
padding: 20px 24px;
background-color: #fff;
border-bottom: 1px solid #16344F;
}
@media screen and (max-width: 559px) {
.recruit-requirement .info dl {
flex-flow: column;
}
}
</style>
