<template>
  <div class="vision overflow-hidden">
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
          src="@/assets/images/vision-title.svg"
          alt="共に歩む×VISION"
          class="lg:w-full"
        />
      </div>
      <div class="current-nav">
        <p>ビジョンについて</p>
      </div>
    </section>

    <section class="vision-contents mx-auto">
      <h3>東急百貨店の現在と今後</h3>
      <div class="text-wrapper">
        <div class="now-textbox mx-auto">
          <p class="sub-title">現在</p>
          <p>
            東急百貨店は、百貨店事業を基盤に、ショッピングセンターの展開のほか、専門店形態による出店を強化しています。2011年の食品に特化した専門店「東急フードショー」の二子玉川出店を皮切りに、小型店である「東急フードショースライス」も積極的に出店。食品分野以外では、セミセルフ形式の小型コスメストア「ShinQsビューティーパレット」をオープン。お客様のニーズに合わせ、東急沿線を中心とした店舗展開を続けています。
            専門店の出店に加え、さらにフードデリバリーサービスやオンライン接客サービスの導入など、新しい取り組みを通じてお客様接点の拡大に努めています。
          </p>
        </div>
        <div class="future-textbox mx-auto">
          <p class="sub-title">今後</p>
          <p>
            社会環境の変化やお客様のニーズに迅速に対応するためには、企業理念の実践を通じ、従来の百貨店に捉われない幅広い事業展開を図っていくことが不可欠です。
            これまで百貨店事業で培ってきた目利き力や編集力、販売力といった強みを活かした、百貨店とショッピングセンターの融合。さらに、新規事業を創出し、事業構成の多様化を図る独自のビジネスモデル「融合型リテーラー」を推進していきます。
            効率的な店舗運営はもちろん、デジタル事業やアウトセールス事業など幅広い事業強化を図ることで、今後もお客様の様々な生活シーンで必要とされる、「生活サービス提案企業」として成長を続けていきます。
          </p>
        </div>
      </div>
      <div>
        <picture>
          <source
            media="(min-width:641px)"
            srcset="
              @/assets/images/vision-affiliates.png    1x,
              @/assets/images/vision-affiliates@2x.png 2x
            "
          />
          <source
            media="(max-width:640px)"
            srcset="
              @/assets/images/vision-affiliates_sp.png    1x,
              @/assets/images/vision-affiliates_sp@2x.png 2x
            "
          />
          <source srcset="@/assets/images/vision-affiliates.png" />
          <img
            src="@/assets/images/vision-affiliates.png"
            alt="東急百貨店の関連会社のロゴ"
          />
        </picture>
      </div>
    </section>
    <section class="vision-contents philosophy mx-auto bg-gray">
      <h3 class="text-center">企業理念</h3>
      <div class="content-inner">
        <h4>
          <img
            src="@/assets/images/vision-title_vision.png"
            srcset="
              @/assets/images/vision-title_vision.png    1x,
              @/assets/images/vision-title_vision@2x.png 2x
            "
            alt="VISON"
            class="mx-auto"
          />
        </h4>
        <p class="sub-title text-center">私たち東急百貨店が求める姿</p>
        <p class="text-box text-center mx-auto">
          お客様にとって、なくてはならない存在。<br />
          それが私たちの誇りです。<br />
          私たちは、誰よりもお客様の近くで、<br />
          誰よりも深くお客様を想い、<br />
          誰よりも情熱をもってお客様の力になります。<br />
          私たちは、お客様と共に<br />
          未来へ向かって成長し続けます。
        </p>
      </div>
      <div class="content-inner">
        <h4>
          <img
            src="@/assets/images/vision-title_slogan.png"
            srcset="
              @/assets/images/vision-title_slogan.png    1x,
              @/assets/images/vision-title_slogan@2x.png 2x
            "
            alt="VISON"
            class="mx-auto"
          />
        </h4>
        <p class="sub-title text-center">
          ビジョンを実現するための<br class="sp-br" />私たちの合言葉
        </p>
        <p class="text-box mx-auto hugeveryone">
          <img
            src="@/assets/images/vision-hugeveryone.png"
            srcset="
              @/assets/images/vision-hugeveryone.png    1x,
              @/assets/images/vision-hugeveryone@2x.png 2x
            "
            alt="hug everyone."
            class="mx-auto"
          />
        </p>
      </div>
      <div class="content-inner credo">
        <h3 class="text-center">行動指針</h3>
        <h4 class="text-center sub-title">
          日々の仕事に向かう時の私たちの心得
        </h4>
        <ul class="credo-list text-center">
          <li>
            <p>
              <span>お客様とhug</span> 誰よりも深くお客様のことを想い、<br
                class="sp-br"
              />
              情熱と感性で、 その声にお応えしよう。
            </p>
          </li>
          <li>
            <p>
              <span>働く仲間とhug</span>
              つねに新しいチャレンジを続けながら、<br class="sp-br" />
              互いを尊敬し、高め合える存在であろう。
            </p>
          </li>
          <li>
            <p>
              <span>お取引先とhug</span>
              ともに信頼し、成長できる存在として、強い絆を結んでいこう。
            </p>
          </li>
          <li>
            <p>
              <span>社会とhug</span>
              清らかで豊かな心を持って、社会と向き合い、<br class="sp-br" />
              行動する人間であろう。
            </p>
          </li>
          <li>
            <p>
              <span>株主とhug</span>
              支援や激励をいただく皆様に誠意を尽くし、<br class="sp-br" />
              実りある実績でお応えしよう。
            </p>
          </li>
          <li>
            <p>
              <span>世界とhug</span>
              地球環境を考え、グローバルな視野を持って未来へ進もう。
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section class="bg-yellow">
      <div class="vision-contents mx-auto">
        <h3 class="text-center mx-auto positioning">
          東急グループの一員として
        </h3>
        <p>
          東急百貨店は東急グループのリテール事業の中核として、沿線を中心に百貨店やショッピングセンター、専門店を展開し、地域のお客様の豊かで上質な生活を支えてきました。<br />
          近年注目されている東急グループが一翼を担う大規模な渋谷駅周辺開発プロジェクトでは、その開発に合わせ、当社は2012年以降、渋谷ヒカリエShinQs開業から渋谷スクランブルスクエアへの専門店出店、東横のれん街や渋谷
          東急フードショーのリニューアルなど、東急百貨店だからこそできる取り組みを推進しています。今後もグループとの連携を図りながら、渋谷という地域における当社の存在価値を高めていきます。
        </p>
      </div>
    </section>
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
.vision .vision-contents {
  max-width: 728px;
  margin-bottom: 80px;
}

.vision p {
  font-family: "Noto Sans JP", sans-serif;
  letter-spacing: 0.07em;
  line-height: 180%;
}
.vision .vision-content {
  max-width: 728px;
  margin-bottom: 80px;
}
.vision h2 {
  width: fit-content;
  margin-top: 105px;
}
.vision h3 {
  margin-top: 70px;
  margin-bottom: 150px;
  font-size: 36px;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 3px;
}

.vision .text-wrapper {
  margin-bottom: 90px;
}
.now-textbox,
.future-textbox {
  width: 720px;
  display: flex;
  justify-content: space-between;
}
.now-textbox {
  flex-direction: row-reverse;
}
.now-textbox p,
.future-textbox p {
  width: 620px;
  line-height: 180%;
}
.now-textbox .sub-title,
.future-textbox .sub-title {
  width: fit-content;
  -ms-writing-mode: tb-rl;
  writing-mode: vertical-rl;
  font-size: 40px;
  font-weight: lighter;
  letter-spacing: 0.2em;
  margin-top: 8px;
}
.now-textbox {
  margin-bottom: 290px;
}
.future-textbox {
  position: relative;
}
.future-textbox::after {
  content: "";
  width: 980px;
  height: 660px;
  position: absolute;
  bottom: 280px;
  right: -200px;
  background: url(../assets/images/vision-now_future.png) no-repeat
    center/contain;
  background-image: image-set(
    url(../assets/images/vision-now_future.png) 1x,
    url(../assets/images/vision-now_future@2x.png) 2x
  );
}
.vision .bg-gray {
  background-color: #f8f8f8;
  margin: 0 calc(50% - 50vw);
  max-width: 100vw !important;
  padding: 50px 0 60px;
}
.philosophy {
  margin-bottom: 20px;
}
.philosophy h3 {
  margin-top: 70px;
  margin-bottom: 50px;
  font-size: 36px;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 3px;
}
.philosophy h4 {
  margin-bottom: 50px;
}
.philosophy h4 img {
  width: 390px;
}
.philosophy .sub-title {
  font-size: 20px;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 0.2em;
  margin-bottom: -15px;
}
.philosophy .text-box {
  background-color: #fff;
  max-width: 728px;
  padding: 60px 0;
  line-height: 200%;
  letter-spacing: 0.1em;
  margin-bottom: 80px;
}
.hugeveryone img {
  width: 442px;
}
.credo .sub-title {
  font-size: 20px;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 0.2em;
  margin-bottom: 30px;
}
.credo-list li {
  background-color: #fff;
  max-width: 728px;
  margin: 0 auto 60px;
  padding: 18px 0;
  margin-bottom: 20px;
}
.credo-list li span {
  display: block;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.1em;
  margin-bottom: 10px;
}
.vision .bg-yellow {
  background-color: #fdf7eb;
  margin: 0 calc(50% - 50vw);
  max-width: 100vw !important;
  padding: 80px 0 60px;
}
.vision .positioning {
  font-size: 20px;
  display: block;
  max-width: 728px;
  border: solid 1px;
  padding: 40px 0 64px;
  position: relative;
  margin-top: 0;
  margin-bottom: 50px;
}
.vision .positioning:after {
  content: "";
  width: 150px;
  height: 30px;
  background: url(../assets/images/vision-POSITIONING.png) no-repeat
    center/contain;
  background-image: image-set(
    url(../assets/images/vision-POSITIONING.png) 1x,
    url(../assets/images/vision-POSITIONING@2x.png) 2x
  );
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  bottom: 15px;
}
@media screen and (max-width: 800px) {
  .now-textbox,
  .future-textbox {
    width: 640px;
    display: flex;
    justify-content: space-between;
  }
  .now-textbox {
    margin-bottom: 150px;
  }
  .future-textbox::after {
    width: 740px;
    bottom: 190px;
    right: -40px;
  }
}
@media screen and (max-width: 640px) {
  .vision .vision-contents {
    max-width: 90%;
  }
  .vision h2 {
    width: 90%;
  }
  .vision h3 {
    font-size: 24px;
    margin-bottom: 120px;
  }
  .vision p {
    font-size: 14px;
  }
  .now-textbox,
  .future-textbox {
    width: 100%;
    flex-direction: column;
  }
  .now-textbox .sub-title,
  .future-textbox .sub-title {
    -ms-writing-mode: initial;
    writing-mode: initial;
    margin-top: 0;
  }
  .future-textbox .sub-title,
  .future-textbox p {
    margin-left: auto;
  }
  .now-textbox p,
  .future-textbox p {
    width: 100%;
    max-width: 350px;
  }
  .now-textbox {
    margin-bottom: 180px;
  }
  .future-textbox::after {
    width: 348px;
    height: 642px;
    bottom: 410px;
    right: -10px;
    background: url(../assets/images/vision-now_future_sp.png) no-repeat
      center/contain;
    background-image: image-set(
      url(../assets/images/vision-now_future_sp.png) 1x,
      url(../assets/images/vision-now_future_sp@2x.png) 2x
    );
  }
  .philosophy h3 {
    margin-bottom: 80px;
  }
  .philosophy .content-inner {
    width: 95%;
    margin: auto;
  }
  .philosophy .sub-title {
    font-size: 16px;
  }
  .credo-list li {
    padding: 24px 0;
  }
  .credo-list li span {
    font-size: 16px;
    margin-bottom: 0;
  }
  .hugeveryone img {
    width: 80%;
  }
}
</style>
