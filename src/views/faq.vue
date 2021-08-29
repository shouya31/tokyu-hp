<template>
<div class="faq overflow-hidden">
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
        <p>FAQ</p>
      </div>
      </div>
      <h2 class="mx-auto">
        <img src="@/assets/images/faq-title.png" alt="Frequently Asked Questions">
      </h2>
    </section>

    <section class="faq-contents mx-auto">
      <h3 class="text-center">採用・配属について</h3>
      <div class="">
        <dl class="listQA">
          <dt class="question">
            <p>どのような人材を求めていますか?</p>
          </dt>
          <dd>
            <p>「既成概念に捉われず、変革思考と柔軟な発想を持つ人材」、「主体的にアイデアを創出、具現化し、結果を出していくことができる人材」を求めています。</p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt id="question">
            <p>選考ステップを教えてください。</p>
          </dt>
          <dd>
            <p>書類選考、適性検査、面接（複数回）を実施いたします。</p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt id="question">
            <p>入社前に必要な技能や資格があれば教えてください。</p>
          </dt>
          <dd>
            <p>特にございません。入社後、業務上必要な資格については、会社が取得費用を補助いたします。</p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt id="question">
            <p>地域別の採用は行っていますか?</p>
          </dt>
          <dd>
            <p>東京地区採用と北海道地区採用に分かれており、選考フローも異なります。原則、東京地区にて採用された方は東京・神奈川の事業所、北海道地区で採用された方は北海道が勤務地になります。<br>
              ※詳細は募集要項をご確認ください。</p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt id="question">
            <p>短期大学、専門学校卒の採用は行っていますか?</p>
          </dt>
          <dd>
            <p>現在、行っておりません。</p>
          </dd>
        </dl>
        <dl class="listQA">
          <dt id="question">
            <p>入社後の配属について教えてください。</p>
          </dt>
          <dd>
            <p>総合職として様々な職場に配属される可能性があります。<br>
                また、人材育成の視点から、最初の配属後も複数の職場・職種を経験していただき、個々人の自発的なキャリア形成を促進しています。</p>
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
.faq-contents p,.faq-contents dt,.faq-contents dd {
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: .07em;
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
.faq h2 {
  width: fit-content;
  margin-top: 105px;
}
.faq h3 {
  margin-top: 70px;
  margin-bottom: 65px;
  font-size: 20px;
  font-family: 'Noto Serif JP', serif;
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
    background-color: #FFF;
    margin-bottom: 10px;
}
.faq .listQA dt {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 44px;
  display: flex;
  position: relative;
}
.faq .listQA dt::before {
  content: "Q";
  margin-right: 20px;
}
.faq .listQA dt::after {
  content: "";
  border-bottom: solid 1px #1E344D;
  width: 22px;
  position: absolute;
  top: 10px;
  right: 1%;
  transition: .3s;
}
.faq .listQA dt.active::after {
  content: "";
  border-bottom: solid 1px #1E344D;
  border-right: solid 1px #1E344D;
  width: 18px;
  height: 18px;
  transform: rotate(405deg);
  position: absolute;
  top: -6px;
  right: 1%;
  transition: .3s;
}

.faq .listQA dd {
  font-size: 14px;
  font-weight: normal;
  opacity: 0;
  transition: .3s;
}
.faq .listQA dd.open {
  opacity: 1;
  transition: .3s;
}
</style>


// <script>
// window.addEventListener("load", () => {
// // スライドさせたい要素を取得
// const el = document.querySelector('.listQA dd');
// // ボタン
// const slideToggleBtn = document.getElementById('question');
// slideToggleBtn.addEventListener("click", () => {
//   slideToggle(el, 300);
// });
// })
</script>