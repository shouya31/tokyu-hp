<template>
  <div class="careerfield overflow-hidden">
    <Header />
    <HeaderSp />
    <section class="page-top mx-auto">
      <div class="sub-pagetitle">
        <img
          src="@/assets/images/people-title.svg"
          alt="共に歩む×PEOPLE"
          class="lg:w-full"
        />
      </div>
    </section>
    <section class="careerfield-contents mx-auto">
      <div>
        <img
          src="@/assets/images/careerfield-title.png"
          srcset="
            @/assets/images/careerfield-title.png    1x,
            @/assets/images/careerfield-title@2x.png 2x
          "
          alt="CAREER FIELD"
        />
      </div>
      <h2>キャリアフィールド</h2>
      <p>東急百貨店には多種多様な仕事があります。</p>
    </section>
    <section class="careerfield-contents careerfield-circle">
      <div class="mx-auto img-wrapper">
        <img
          src="@/assets/images/careerfield-circle.png"
          srcset="
            @/assets/images/careerfield-circle.png    1x,
            @/assets/images/careerfield-circle@2x.png 2x
          "
          alt="東急百貨店のキャリアフィールド"
        />
      </div>
      <div class="careerfield-circle-contents shop-contents">
        <p class="sub-title">店舗</p>
        <p>店頭における接客、販売を中心とした<br />業務に関わる仕事</p>
        <p>賃貸借テナントのマネジメントを行う仕事</p>
        <p>
          店舗のイメージ維持・向上、集客のための<br />
          販売促進計画の立案を行い、実行する仕事
        </p>
      </div>
      <div class="careerfield-circle-contents sales-contents">
        <p class="sub-title">外商</p>
        <p>
          お客様との信頼関係をもとに、<br />
          ご要望に合わせて商品を提案・販売する仕事
        </p>
      </div>
      <div class="careerfield-circle-contents ec-contents">
        <p class="sub-title">EC</p>
        <p>
          自社のウェブサイトやカタログなどで<br />
          多種多様な商品を販売する仕事
        </p>
      </div>
      <div class="careerfield-circle-contents headoffice-contents">
        <p class="sub-title">本社</p>
        <p>商品の選定やショップへの<br class="pc-br" />誘致を行う仕事</p>
        <p>市場や消費者の動向を調査・分析し、<br />新規事業を開発する仕事</p>
        <p>企業のブランディングや<br />社会貢献のための施策を実行する仕事</p>
        <p>経営計画の原案を策定し、<br class="pc-br" />推進していく仕事</p>
      </div>
    </section>
    <div class="careerfield-circle-contents people-nav">
      <p class="interview-title">
        <img
          src="../assets/images/interview-title.svg"
          alt="INTERVIEW"
        />
      </p>
      <ul class="">
        <li class="people-nav-item">
          <a href="/people/1">01 たまプラーザ店 営業統括部</a>
        </li>
        <li class="people-nav-item">
          <a href="/people/2">02 専門店事業部</a>
        </li>
        <li class="people-nav-item">
          <a href="/people/3">03 ファッション・雑貨統括部</a>
        </li>
        <li class="people-nav-item">
          <a href="/people/4">04 営業推進部 顧客サービス部</a>
        </li>
        <li class="people-nav-item">
          <a href="/people/5">05 事業戦略室 事業開発部</a>
        </li>
        <li class="people-nav-item">
          <a href="/people/6">06 営業推進部 営業企画部</a>
        </li>
      </ul>
    </div>
    <footer class="col-span-12 bg-white pt-14 pb-10 text-center">
      <a href="/"
        ><img
          src="@/assets/images/footer-logo.svg"
          alt="東急百貨店"
          width="180"
          class="mx-auto bg-white"
      /></a>
      <p class="text-xs lg:text-sm mt-5">
        <small
          >Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights
          Reserved.</small
        >
      </p>
    </footer>
  </div>
</template>
<script>
import Header from "../components/header.vue";
import HeaderSp from "../components/header-sp.vue";

export default {
  components: {
    Header,
    HeaderSp,
  },
};
</script>
<style>
.careerfield {
  background-color: #add6d4;
}
.careerfield .page-top {
  background-color: #add6d4;
}

.careerfield p {
  font-family: "Noto Sans JP", sans-serif;
  letter-spacing: 0.07em;
  line-height: 180%;
}
.careerfield .careerfield-contents {
  max-width: 1000px;
  margin-bottom: 80px;
}
.careerfield h2 {
  margin-top: 10px;
  font-size: 36px;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 3px;
}
.careerfield-circle {
  position: relative;
  padding-bottom: 200px;
  margin-left: 110px!important;
}
.careerfield-circle .img-wrapper img {
  width: fit-content;
  margin: auto;
}
.careerfield-circle .sub-title {
  display: none;
}
.careerfield-circle-contents p {
  font-size: 14px;
  color: #16344f;
  border-left: 6px solid #16344f;
  padding-left: 10px;
  margin-bottom: 20px;
}
.careerfield-circle-contents.shop-contents {
  position: absolute;
  top: 240px;
  left: 840px;
  width: 305px;
}
.careerfield-circle-contents.shop-contents:before {
  content: "";
  background: url(../assets/images/careerfield-shop-arrow.svg) no-repeat
    center/contain;
  width: 100px;
  height: 72px;
  position: absolute;
  top: -4%;
  right: 300px;
  transform: translate(0, -50%);
}
.careerfield-circle-contents.sales-contents {
  position: absolute;
    top: -40px;
    right: 10px;
    width: 320px;
}
.careerfield-circle-contents.sales-contents:before {
  content: "";
  background: url(../assets/images/careerfield-sales-arrow.svg) no-repeat
    center/contain;
    width: 146px;
    height: 52px;
  position: absolute;
top: 65%;
    right: 320px;
  transform: translate(0, -50%);
}
.careerfield-circle-contents.ec-contents {
  position: absolute;
  top: 60px;
  left: 110px;
  width: 275px;
}
.careerfield-circle-contents.ec-contents:after {
  content: "";
  background: url(../assets/images/careerfield-ec-arrow.svg) no-repeat
    center/contain;
  width: 156px;
  height: 103px;
  position: absolute;
  bottom: -125px;
  right: 117px;
  transform: translate(0, -50%);
}
.careerfield-circle-contents.headoffice-contents {
  position: absolute;
  bottom: 10px;
  left: 260px;
  width: 580px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.careerfield-circle-contents.headoffice-contents p {
  width: 280px;
  height: fit-content;
}
.careerfield-circle-contents.headoffice-contents:before {
  content: "";
  background: url(../assets/images/careerfield-headoffice-arrow.svg) no-repeat
    center/contain;
  width: 142px;
  height: 126px;
  position: absolute;
  top: -36px;
  left: -140px;
  transform: translate(0, -50%);
}

.interview-title {
    border: none !important;
  padding-left: 0 !important;
  position: relative;
  margin-bottom: 20px;
  overflow: hidden;
}

.interview-title::after {
    content: "";
  width: 100%;
  height: 1px;
  background-color: #16344f;
  position: absolute;
  top: 6px;
  left: 130px;
}

.careerfield-circle-contents.people-nav {
  max-width: 918px;
  margin: 0 auto;
  padding-bottom: 80px;
}
.careerfield-circle-contents.people-nav ul {
  display: flex;
  flex-wrap: wrap;
}
.careerfield-circle-contents.people-nav .people-nav-item {
    min-width: 280px;
        padding-right: 90px;
  line-height: 2rem;
}
.careerfield-circle-contents.people-nav .people-nav-item a {
  position: relative;
}
.careerfield-circle-contents.people-nav .people-nav-item a:after {
  content: "";
  width: 14px;
  height: 16px;
  background: url(/img/entry-btn-triangle.7cec7ed5.svg) center/contain no-repeat;
  position: absolute;
  right: -35px;
  top: 10px;
  transform: translate(-50%, -50%);
}
@media screen and (min-width: 1441px) {
.careerfield-circle {
  margin: 0 auto 80px!important;
}

}
@media screen and (max-width: 1080px) {
  .careerfield .careerfield-contents {
    max-width: 90%;
    margin-left: 30px;
  }
  .careerfield-circle {
  margin-left :auto!important;
  }
}

@media screen and (max-width: 980px) {
  .careerfield .pc-br {
    display: none;
  }

  .careerfield {
    padding-top: 80px;
  }

  .careerfield .careerfield-contents {
    max-width: 95%;
    margin: 0 auto 80px;
  }

  .careerfield-circle {
    padding-bottom: 0;
  }
  .careerfield-circle .sub-title {
    display: block;
    border: none;
    font-size: 18px;
    padding-left: 0;
    margin-bottom: 10px;
  }
  .careerfield-circle .img-wrapper {
    width: 100%;
    margin-bottom: 40px;
  }

  .careerfield-circle-contents.shop-contents,
  .careerfield-circle-contents.sales-contents,
  .careerfield-circle-contents.ec-contents,
  .careerfield-circle-contents.headoffice-contents {
    position: initial;
    width: fit-content;
    min-width: 380px;
    margin: auto;
  }
  .careerfield-circle-contents.headoffice-contents {
    display: block;
  }
  .careerfield-circle-contents.headoffice-contents p {
    width: fit-content;
  }
  .careerfield-circle-contents.shop-contents::before,
  .careerfield-circle-contents.sales-contents::before,
  .careerfield-circle-contents.ec-contents::after,
  .careerfield-circle-contents.headoffice-contents::before {
    display: none;
  }
  .careerfield-circle-contents.people-nav {
    max-width: 80%;
  }
  .careerfield-circle-contents.people-nav .people-nav-item {
    width: 50%;
  }
}
@media screen and (max-width: 780px) {
  .careerfield-circle-contents.people-nav .people-nav-item {
    width: 100%;
    padding-right: 0;
  }
}
@media screen and (max-width: 640px) {
  .careerfield h2 {
    font-size: 24px;
  }
  .careerfield .careerfield-contents {
    max-width: 95%;
  }
  .careerfield-circle-contents.shop-contents,
  .careerfield-circle-contents.sales-contents,
  .careerfield-circle-contents.ec-contents,
  .careerfield-circle-contents.headoffice-contents {
    width: 90%;
    min-width: initial;
  }
}
</style>