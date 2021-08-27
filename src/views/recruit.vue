<template>
  <div class="recruit-requirement overflow-hidden">
    <section>
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
          <dt>諸手当</dt>
          <dd>通勤費（原則全額）、時間外勤務手当、家族手当等</dd>
          <dt>勤務地</dt>
          <dd>東京地区：東京都、神奈川県<br>
            北海道地区：北海道（札幌市）</dd>
          <dt>勤務時間</dt>
          <dd>シフトによる交替制勤務<br>
            実働7時間45分（食事・休憩時間1時間15分）</dd>
          <dt>休日</dt>
          <dd>週休2日（交替制）・年間休日116日</dd>
          <dt>休暇</dt>
          <dd>年2回の連続休暇制度、年2日のアニバーサリー休暇制度、<br class="pc-br">
          年次休暇、半日休暇制度、慶弔休暇、リフレッシュ休暇他</dd>
          <dt>福利厚生</dt>
          <dd>各種社保、共済会、財形貯蓄、持株制度、自用品購買制度</dd>
          <dt>受動喫煙対策</dt>
          <dd>1．全事業所における完全分煙<br>
            2．健康保険組合による「禁煙チャレンジ」の実施</dd>
          <dt>教育研修</dt>
          <dd>新入社員研修、階層別研修、専門知識・スキルアップ研修、<br class="pc-br">
          自己啓発補助他</dd>
          <dt>応募資格</dt>
          <dd>大学院、大学卒業見込みの方（2023年3月卒業の方）</dd>
          <dt>お問い合わせ</dt>
          <dd>株）東急百貨店 人事部 採用担当<br>
              ＜東京地区＞<br>
              TEL：03-3477-3261（直通）<br>
              E-mail：employ@tokyu-dept.co.jp<br>
              ＜北海道地区＞<br>
              TEL：011-212-2226（直通）<br>
              E-mail：sp-employ@tokyu-dept.co.jp </dd>
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
          <dt>商号</dt>
          <dd>
            株式会社 東急百貨店
          </dd>
          <dt>会社設立年月日</dt>
          <dd>大正8年3月7日（1919年）</dd>
          <dt>事業内容</dt>
          <dd>百貨店業</dd>
          <dt>資本金</dt>
          <dd>
            1億円
          </dd>
          <dt>決算期</dt>
          <dd>1月</dd>
          <dt>本店所在地</dt>
          <dd>東京都渋谷区道玄坂2丁目24番1号 </dd>
          <dt>従業員数（社員）</dt>
          <dd>1,665名（2021年4月30日現在） </dd>
          <dt>電話番号</dt>
          <dd>03-3477-3111（代表） </dd>
          <dt>関連会社</dt>
          <dd>株式会社セントラルフーズ、株式会社東急タイム、<br class="pc-br">
東急ビジネスサポート株式会社 </dd>           
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
  background-color: #f8f8f8;
}
.recruit-requirement p,.recruit-requirement dt,.recruit-requirement dd {
  font-family: 'Noto Sans JP', sans-serif;
  letter-spacing: .07em;
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
  letter-spacing: 3px;
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
@media screen and (max-width: 800px) {
  .recruit-requirement .recruit-requirement-content {
    max-width: 90%;
  }
}
</style>
