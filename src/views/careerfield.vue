<template>
  <div class="careerfield overflow-hidden">
    <header>
      <h1>
        <img
          src="@/assets/images/header-logo.svg"
          alt="東急百貨店のリクルートサイト"
          style="width: 120px"
        />
      </h1>
      <div class="header-nav-wrapper">
        <div v-on:click="menuOpenOrClose" class="menu">
          <img src="@/assets/images/open-btn.svg" alt="" srcset="" />
        </div>
        <button>
          <p
            class="text-2xl text-white tracking-widest"
            style="font-size: 20px"
          >
            <a
              href="https://job.mynavi.jp/23/pc/search/corp103559/outline.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="@/assets/images/side-entry-btn.svg"
                alt="ENTRY"
                style="width: 80px"
              />
            </a>
          </p>
        </button>
      </div>
    </header>
    <section class="page-top mx-auto">
      <div class="sub-pagetitle">
        <img
          src="@/assets/images/people-title.svg"
          alt="共に歩む×PEOPLE"
          class="lg:w-full"
        />
      </div>
      <div class="current-nav">
        <p>キャリアフィールド</p>
      </div>
    </section>

    <div class="">
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
      <section class="careerfield-contents careerfield-circle mx-auto">
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
          <p>店頭における接客、販売を中心とした業務に関わる仕事</p>
          <p>賃貸借テナントのマネジメントを行う仕事</p>
          <p>
            店舗のイメージ維持・向上、<br />
            集客のための販売促進計画の<br />
            立案を行い、実行する仕事
          </p>
        </div>
        <div class="careerfield-circle-contents sales-contents">
          <p class="sub-title">外商</p>
          <p>
            お客様との信頼関係をもとに、<br />
            ご要望に合わせて商品を<br />
            提案・販売する仕事
          </p>
        </div>
        <div class="careerfield-circle-contents ec-contents">
          <p class="sub-title">EC</p>
          <p>自社のウェブサイトやカタログなどで多種多様な商品を販売する仕事</p>
        </div>
        <div class="careerfield-circle-contents headoffice-contents">
          <p class="sub-title">本社</p>
          <p>商品の選定やショップへの<br />誘致を行う仕事</p>
          <p>市場や消費者の動向を調査・分析し、<br />新規事業を開発する仕事</p>
          <p>企業のブランディングや<br />社会貢献のための施策を実行する仕事</p>
          <p>経営計画の原案を策定し、<br />推進していく仕事</p>
        </div>
      </section>
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

<style>
.careerfield {
  background-color: #add6d4;
  /* padding: 80px 0 240px;
  margin-top: 40px; */
}
.careerfield .page-top {
  background-color: #add6d4;
}
.careerfield .careerfield-contentss {
  max-width: 728px;
  margin-bottom: 80px;
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
  top: 180px;
  left: 870px;
  width: 215px;
}
.careerfield-circle-contents.shop-contents:before {
  content: "";
  background: url(../assets/images/careerfield-shop-arrow.svg) no-repeat
    center/contain;
  width: 110px;
  height: 72px;
  position: absolute;
  top: 25%;
  right: 210px;
  transform: translate(0, -50%);
}
.careerfield-circle-contents.sales-contents {
  position: absolute;
  top: -70px;
  right: 40px;
  width: 245px;
}
.careerfield-circle-contents.sales-contents:before {
  content: "";
  background: url(../assets/images/careerfield-sales-arrow.svg) no-repeat
    center/contain;
  width: 196px;
  height: 62px;
  position: absolute;
  top: 65%;
  right: 235px;
  transform: translate(0, -50%);
}
.careerfield-circle-contents.ec-contents {
  position: absolute;
  top: 60px;
  left: 110px;
  width: 185px;
}
.careerfield-circle-contents.ec-contents:after {
  content: "";
  background: url(../assets/images/careerfield-ec-arrow.svg) no-repeat
    center/contain;
  width: 156px;
  height: 103px;
  position: absolute;
  bottom: -110px;
  right: 27px;
  transform: translate(0, -50%);
}
.careerfield-circle-contents.headoffice-contents {
  position: absolute;
  bottom: 10px;
  left: 260px;
  width: 560px;
  display: flex;
  flex-wrap: wrap;
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

@media screen and (max-width: 980px) {
  .careerfield {
    padding: 80px 0;
  }

  .careerfield .careerfield-contents {
    max-width: 90%;
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
    margin-bottom: 80px;
  }

  .careerfield-circle-contents.shop-contents,
  .careerfield-circle-contents.sales-contents,
  .careerfield-circle-contents.ec-contents,
  .careerfield-circle-contents.headoffice-contents {
    position: initial;
    width: 60%;
    margin: auto;
  }
  .careerfield-circle-contents.headoffice-contents {
    display: block;
  }

  .careerfield-circle-contents.shop-contents::before,
  .careerfield-circle-contents.sales-contents.careerfield-circle-contents,
  .careerfield-circle-contents.ec-contents::after,
  .careerfield-circle-contents.headoffice-contents::before {
    display: none;
  }
}
@media screen and (max-width: 640px) {
  .careerfield .careerfield-contents {
    max-width: 95%;
  }
  .careerfield-circle-contents.shop-contents,
  .careerfield-circle-contents.sales-contents,
  .careerfield-circle-contents.ec-contents,
  .careerfield-circle-contents.headoffice-contents {
    width: 90%;
  }
  .careerfield h2 {
    font-size: 24px;
  }
}
</style>