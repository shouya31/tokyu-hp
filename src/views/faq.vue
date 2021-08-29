<template>
  <div class="faq overflow-hidden">
    <header>
      <h1>
        <img
          src="@/assets/images/header-logo.svg"
          alt="東急百貨店のリクルートサイト"
        />
      </h1>
      <div class="header-nav-wrapper">
        <div v-on:click="menuOpenOrClose" class="menu">
          <img src="@/assets/images/open-btn.png" alt="" srcset="" />
        </div>
        <button style="background: #003366">
          <p
            class="text-2xl text-white tracking-widest"
            style="font-size: 20px"
          >
            <img src="@/assets/images/side-entry-btn.svg" alt="ENTRY" />
          </p>
        </button>
      </div>
    </header>
    <section class="page-top mx-auto">
      <div class="sub-pagetitle">
        <img
          src="@/assets/images/recruit-title.svg"
          alt="共に歩む×RECRUIT"
          class="lg:w-full"
        />
      </div>
      <div class="current-nav">
        <p>FAQ</p>
      </div>
    </section>

    <section class="faq-contents mx-auto">
      <h2 class="mx-auto">
        <img
          src="@/assets/images/faq-title.png"
          srcset="
            @/assets/images/faq-title.png 1x,
            @/assets/images/faq-title.png 2x
          "
          alt="Frequently Asked Questions"
        />
      </h2>
      <h3 class="text-center">採用・配属について</h3>
      <div class="">
        <dl class="listQA">
          <dt>
            <p>どのような人材を求めていますか?</p>
          </dt>
          <dd>
            <p>
              「既成概念に捉われず、変革思考と柔軟な発想を持つ人材」、「主体的にアイデアを創出、具現化し、結果を出していくことができる人材」を求めています。
            </p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt>
            <p>選考ステップを教えてください。</p>
          </dt>
          <dd>
            <p>書類選考、適性検査、面接（複数回）を実施いたします。</p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt>
            <p>入社前に必要な技能や資格があれば教えてください。</p>
          </dt>
          <dd>
            <p>
              特にございません。入社後、業務上必要な資格については、会社が取得費用を補助いたします。
            </p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt>
            <p>地域別の採用は行っていますか?</p>
          </dt>
          <dd>
            <p>
              東京地区採用と北海道地区採用に分かれており、選考フローも異なります。原則、東京地区にて採用された方は東京・神奈川の事業所、北海道地区で採用された方は北海道が勤務地になります。<br />
              ※詳細は募集要項をご確認ください。
            </p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt>
            <p>短期大学、専門学校卒の採用は行っていますか?</p>
          </dt>
          <dd>
            <p>現在、行っておりません。</p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt>
            <p>入社後の配属について教えてください。</p>
          </dt>
          <dd>
            <p>
              総合職として様々な職場に配属される可能性があります。<br />
              また、人材育成の視点から、最初の配属後も複数の職場・職種を経験していただき、個々人の自発的なキャリア形成を促進しています。
            </p>
          </dd>
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
.faq {
  background-color: #f8f8f8;
}
.faq-contents p,
.faq-contents dt,
.faq-contents dd {
  font-family: "Noto Sans JP", sans-serif;
  letter-spacing: 0.07em;
}
.faq h2 {
  margin-top: 105px;
}

.faq h2 img {
  width: 100%;
}

.faq h3 {
  margin-top: 70px;
  margin-bottom: 65px;
  font-size: 20px;
  font-family: "Noto Serif JP", serif;
}
.faq .faq-contents {
  max-width: 728px;
  margin-bottom: 80px;
}
.faq .listQA {
  width: 100%;
  padding: 24px;
}
.faq dl {
  background-color: #fff;
  margin-bottom: 10px;
}
.faq .listQA dt {
  font-size: 18px;
  font-weight: bold;
  display: flex;
  position: relative;
}
.faq .listQA dt::before {
  content: "Q";
  margin-right: 20px;
}
.faq .listQA dt::after {
  content: "";
  border-bottom: solid 1px #1e344d;
  border-right: solid 1px #1e344d;
  width: 18px;
  height: 18px;
  transform: rotate(45deg);
  transition: 0.3s;
  position: absolute;
  top: 0;
  right: 1%;
}
.faq .listQA dt.active::after {
  content: "";
  border-bottom: solid 1px #1e344d;
  border-right: none;
  width: 22px;
  transform: rotate(360deg);
  transition: 0.3s;
  position: absolute;
  top: 0;
  right: 1%;
}
.faq .listQA dd {
  font-size: 14px;
  font-weight: normal;
  margin-top: 40px;
  display: none;
}

@media screen and (max-width: 800px) {
  .faq .faq-contents {
    max-width: 90%;
  }
}

@media screen and (max-width: 640px) {
  .faq .listQA dt {
    padding-right: 30px;
  }
}
</style>





<script>
import $ from "jquery";

export default {
  mounted: function () {
    $(function ($) {
      $(".listQA dt").on("click", function () {
        $(this).next().slideToggle("fast");
        $(this).toggleClass("active");
      });
    });
  },
};
</script>