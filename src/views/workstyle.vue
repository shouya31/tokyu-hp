<template>
  <div class="workstyle overflow-hidden">
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
          <img src="@/assets/images/open-btn.png" alt="" srcset="" />
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
          src="@/assets/images/system-title.svg"
          alt="共に歩む×SYSTEM"
          class="lg:w-full"
        />
      </div>
      <div class="current-nav">
        <p>働き方について</p>
      </div>
    </section>
    <section class="workstyle mx-auto">
      <div class="workstyle-heading">
        <h3>働き方について</h3>
        <p>従業員が働きやすい環境づくりに努めています。</p>
      </div>
      <div class="workstyle-contents">
        <img src="@/assets/images/workstyle-1.png" alt="" />
        <h4>休日・休暇について</h4>
        <dl>
          <dt>休日</dt>
          <dd>週休2日（交替制）・年間休日116日</dd>
          <dt>有給休暇</dt>
          <dd>
            年次休暇、積立年次休暇、半日特別休暇、アニバーサリー休暇、<br
              class="pc-br"
            />
            結婚休暇、配偶者出産休暇、忌引休暇、リフレッシュ休暇、定年退職準備休暇
            他
          </dd>
          <dt>無給休暇</dt>
          <dd>
            生理休暇、不妊治療休暇、つわり休暇、妊産婦休暇、出産休暇、子の看護休暇、介護休暇、組合業務休暇
          </dd>
          <dt>連続休暇制度</dt>
          <dd>
            休日と年次休暇を利用して、上期・下期でそれぞれ８日間または11日間連続して取得できる休暇制度
          </dd>
        </dl>
      </div>
      <div class="workstyle-contents">
        <img src="@/assets/images/workstyle-2.png" alt="" />
        <h4>育児・介護支援について</h4>
        <dl>
          <dt>育児休職</dt>
          <dd>最大2年取得可能</dd>
          <dt>育児勤務</dt>
          <dd>最短5時間まで短縮でき、最長で小学校4年生の4月まで取得可能</dd>
          <dt>介護休職</dt>
          <dd>通算1年取得可能</dd>
          <dt>介護勤務</dt>
          <dd>
            最短5時間まで短縮可能な短時間勤務や週休3日制等が利用可能<br
              class="pc-br"
            />
            1年を限度とし、通算5年まで取得できる
          </dd>
        </dl>
      </div>
      <div class="workstyle-contents">
        <img src="@/assets/images/workstyle-3.png" alt="" />
        <h4>生活支援について</h4>
        <dl>
          <dt>福利厚生</dt>
          <dd>
            社会保険（健康保険、厚生年金保険、雇用保険、労災保険、介護保険）<br />
            財形貯蓄制度、積立貯蓄制度、東急グループ従業員持株会
          </dd>
          <dt>福祉共済会</dt>
          <dd>
            <dl class="workstyle-child-contents">
              <dt>共済保障事業</dt>
              <dd>慶弔見舞金、生涯生活保障制度 他</dd>
              <dt>リゾート施設</dt>
              <dd>優待価格での会員制リゾートホテル利用</dd>
              <dt>チケット優待</dt>
              <dd>
                優待価格でのテーマパークや映画、<br />博物館などのチケット購入
              </dd>
            </dl>
          </dd>
        </dl>
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
.workstyle {
  background-color: #f8f8f8;
  padding: 40px 0 80px;
}
.workstyle .workstyle-contents {
  max-width: 728px;
  margin: auto;
}
.workstyle-heading {
  max-width: 728px;
  margin: 0 auto 80px;
}
.workstyle p {
  font-family: "Noto Sans JP", sans-serif;
  letter-spacing: 0.07em;
  line-height: 180%;
}

.workstyle h2 {
  width: fit-content;
  margin-top: 105px;
}
.workstyle h3 {
  margin-top: 70px;
  margin-bottom: 20px;
  font-size: 36px;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 3px;
}
.workstyle h4 {
  font-size: 20px;
  font-family: "Noto Serif JP", serif;
  letter-spacing: 3px;
  background-color: #fff;
  padding: 40px 24px;
}
.workstyle dl {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  border-top: 1px solid #ccc;
}
.workstyle dt {
  color: #1b224c;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  flex-basis: 25%;
  padding: 20px 24px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.workstyle dd {
  flex-basis: 75%;
  padding: 20px 24px;
  background-color: #fff;
  border-bottom: 1px solid #ccc;
}
.workstyle dt:last-of-type {
  border-bottom: none;
}
.workstyle dd:last-of-type {
  padding-bottom: 80px;
  border-bottom: none;
}

dl.workstyle-child-contents {
  border-top: none;
}
.workstyle-child-contents dt {
  font-weight: normal;
}
.workstyle-child-contents dt,
.workstyle-child-contents dd {
  border: none;
  padding: 10px 0;
}
.workstyle-child-contents dd:last-of-type {
  padding-bottom: 0;
}
@media screen and (max-width: 800px) {
  .workstyle .workstyle-contents,
  .workstyle-heading {
    max-width: 90%;
  }
  @media screen and (max-width: 559px) {
    .workstyle.workstyle dl {
      flex-flow: column;
    }
    dl.workstyle-child-contents {
      margin-top: -20px;
    }
    .workstyle-child-contents dt {
      padding-bottom: 0;
    }
  }
}
</style>
