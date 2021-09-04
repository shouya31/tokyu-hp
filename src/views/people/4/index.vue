<template>
  <div>
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
    <div class="people lg:grid grid-cols-1 lg:grid-cols-12 overflow-hidden">

      <section
        class="hero col-span-12 col-start-2 lg:flex justify-around mt-10"
      >
        <div class="left-content">
          <div class="relative lg:right-12">
            <img
              src="@/assets/images/people-title.svg"
              alt=""
              class="lg:w-full people-logo-sp"
            />
          </div>
          <div class="lg:mt-20 lg:mb-10 tracking-wide">
            <img
              src="@/assets/images/person4-1.png"
              srcset="
                @/assets/images/person4-1.png    1x,
                @/assets/images/person4-1@2x.png 2x
              "
              class="pt-0 lg:hidden people-main-sp"
              width="450"
              height="800"
              alt="people1"
            />

            <p class="main-catch-font">日々の進歩が</p>
            <p class="main-catch-font">未来を照らす</p>
          </div>

          <div class="message">
            <p class="sub-catch-font tracking-widest mb-3">
              社会や人々の動きが変化する中で
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              常に自問自答を繰り返していく
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              現状に甘んじることなく
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              踏み出す勇気を大切にしたい
            </p>
          </div>
          <ul class="employee-box lg:mt-16">
            <li>
              <p class="people-name tracking-widest">
                澤木 奈津子<span class="people-kana tracking-widest lg:ml-5"
                  >Natsuko Sawaki</span
                >
              </p>
            </li>
            <li>
              <p class="people-info mt-3 tracking-wide">
                営業推進部<span class="lg:ml-3">顧客サービス部</span
                ><span class="mx-2 lg:mx-3">/</span> 2009年 入社<br />
                経済学部 経営学科 卒
              </p>
            </li>
          </ul>
        </div>
        <div class="people-image mt-5 hidden lg:block">
          <img
            src="@/assets/images/person4-1.png"
            srcset="
              @/assets/images/person4-1.png    1x,
              @/assets/images/person4-1@2x.png 2x
            "
            width="450"
            height="800"
            alt="people1"
          />
        </div>
      </section>

      <section class="question col-span-8 col-start-2 lg:flex pt-20 xl:pt-30">
        <div class="left-content mb-10 lg:pb-0">
          <!-- <div class="white-box bg-white"></div> -->
          <div class="img-box tablet-qisition-margin">
            <img
              src="@/assets/images/person4-2.png"
              srcset="
                @/assets/images/person4-2.png    1x,
                @/assets/images/person4-2@2x.png 2x
              "
              class="lg:pr-10 lg:pr-16 people-sp-image"
              alt="persion2"
            />
          </div>
          <!-- <div class="blue-box"></div> -->
        </div>
        <div
          class="
            question-right-content
            text-center
            question-vertical
            mx-auto
            lg:mt-0
            lg:mb-8
          "
        >
          <div class="loupe-img inline-block relative left-32">
            <img src="@/assets/images/question-logo.svg" class="" alt="loupe" />
          </div>
          <div class="question-box">
            <p class="text-xs text-right question-logo">
              <span>Question</span>
            </p>
            <p class="question-section-title">東急百貨店を</p>
            <p class="question-section-title">志望した理由</p>
          </div>
        </div>
      </section>

      <section
        class="
          answer
          w-screen
          md:col-span-12 md:col-start-3
          md:w-3/5
          mx-auto
          pt-4
          lg:pb-0
          px-4
          md:pl-0
          md:pr-5
        "
      >
        <h4
          class="
            answer-title
            text-lg
            md:text-2xl
            font-bold
            mb-6
            tracking-widest
          "
        >
          <span class="py-1 px-4 mr-2 font-thin answer-font">A</span
          >飾らない姿に惹かれて
        </h4>
        <p class="answer-text tracking-widest">
          自分の身近にあり、働く想像がつきやすい職業という軸で就職活動を行い、金融業からお菓子メーカーまで幅広く受ける中で、接客経験やお買い物好きという理由から百貨店業界も志望しました。東急百貨店には、実家が東急沿線だったこともあり、幼い頃から足を運んでおり、活気に満ちた売場や親切な接客に惹かれていました。そうしたお客様一人ひとりを受け入れる親しみやすい部分が、最終的な決め手となりました。
        </p>
      </section>

      <section
        class="
          question
          col-span-12 col-start-2
          md:flex
          lg:pr-5
          lg:mt-28
          justify-center
        "
      >
        <div class="question-right-content question-vertical">
          <div class="loupe-img inline-block relative left-32">
            <img src="@/assets/images/question-logo.svg" class="" alt="loupe" />
          </div>
          <div class="question-box mx-auto">
            <p class="text-xs text-right question-logo">
              <span>Question</span>
            </p>
            <p class="question-section-title">現在の</p>
            <p class="question-section-title">仕事内容</p>
          </div>
        </div>
        <div
          class="
            people-answer-box
            w-screen
            md:col-span-3 md:col-start-2
            md:w-3/5
          "
        >
          <h4
            class="
              answer-title
              text-lg
              md:text-2xl
              font-bold
              mb-6
              tracking-widest
              tablet-qisition-margin
            "
          >
            <span class="py-1 px-4 mr-2 font-thin bg-blue-900 answer-font"
              >A</span
            >お客様に最大限寄り添いたい
          </h4>
          <div>
            <p class="answer-text tracking-widest">
              現在は渋谷地区のサービス担当として、お客様からのお問い合わせ対応や*セールスパートナーへの教育研修に従事しています。日々寄せられるお客様からのお問い合わせには、マニュアル通りにいかず、店舗ごとに臨機応変な対応が求められることも。店舗の発展には必要な資源だと考え、真摯に向き合っています。また、最近では今まで対面で行っていた研修をデジタル化し、空いた時間でさらなるサービス向上に向けた取り組みを行っています。
            </p>

            <div class="text-xs lg:text-sm mt-7 text-gray-600">
              <p class="answer-attention">*セールスパートナー:</p>
              <p class="answer-attention">
                店頭での商品販売に従事するお取引先様の販売スタッフの方々のこと。当社では一緒に働く仲間として、セールスパートナーと呼ぶ。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="
          question
          col-span-8 col-start-3
          lg:mt-20
          lg:flex
          lg:pt-10
          px-5
          xl:pt-30
        "
      >
        <div class="left-content mb-10 lg:pb-0">
          <!-- <div class="white-box bg-white"></div> -->
          <div class="img-box tablet-qisition-margin">
            <img
              src="@/assets/images/person4-3.png"
              srcset="
                @/assets/images/person4-3.png    1x,
                @/assets/images/person4-3@2x.png 2x
              "
              class="lg:pr-10 lg:pr-16"
              alt="persion3"
            />
          </div>
          <!-- <div class="blue-box"></div> -->
        </div>
        <div
          class="
            question-right-content
            right-content
            text-center
            question-vertical
            mx-auto
            lg:pl-16
          "
        >
          <div
            class="
              loupe-img
              inline-block
              relative
              left-40
              tablet-qisition-margin
            "
          >
            <img
              src="@/assets/images/question-logo.svg"
              class="relative lg:top-10 right-10"
              alt="loupe"
            />
          </div>
          <div class="question-box lg:py-16 mx-auto">
            <p class="text-xs text-right question-logo">
              <span>Question</span>
            </p>
            <p class="question-section-title">私の</p>
            <p class="question-section-title">エピソード</p>
          </div>
        </div>
      </section>

      <section
        class="
          answer
          w-screen
          md:col-span-12 md:col-start-3
          md:w-3/5
          mx-auto
          lg:pt-12
          pb-5
          px-4
          md:pl-0
          md:pr-5
        "
      >
        <h4
          class="
            answer-title
            text-lg
            md:text-2xl
            font-bold
            mb-6
            tracking-widest
          "
        >
          <span class="py-1 px-4 mr-2 font-thin bg-blue-900 answer-font">A</span
          >心に残るあの日の風景
        </h4>
        <p class="answer-text tracking-widest">
          2012年の4月にオープンした渋谷ヒカリエ。開業2ヶ月前に、渋谷ヒカリエ内に出店する<a
            href="https://www.tokyu-dept.co.jp/shinqs/index.html"
            target="_blank"
            rel="noopener noreferrer"
            >「ShinQs」</a
          >の開業準備を行う部署に異動しました。入社から異動直前まで店頭での接客業務をしていたため、新店舗開設は未経験のことばかり。売場と什器だけの状態から商品や備品発注、販売体制の構築まで慣れない状況下で、四苦八苦しながら店舗づくりを行いました。緊張感を持ちながらも、「東急百貨店を代表する店舗を何としてでもつくりたい」という想いで仲間と共に切磋琢磨し合いました。開業当日、お客様から「ShinQsは楽しい」と仰っていただけた時は、努力が報われた気分でした。開店直後に入店されたお客様の笑顔で溢れた光景は今でも忘れられません。
        </p>
      </section>

      <section
        class="
          question
          col-span-12
          lg:mt-20
          col-start-3
          md:flex
          lg:pr-5
          justify-center
        "
      >
        <div class="question-right-content left-content question-vertical">
          <div class="loupe-img inline-block relative left-32">
            <img src="@/assets/images/question-logo.svg" class="" alt="loupe" />
          </div>
          <div class="question-box mx-auto">
            <p class="text-xs text-right question-logo">
              <span>Question</span>
            </p>
            <p class="question-section-title">これからの</p>
            <p class="question-section-title">歩み</p>
          </div>
        </div>
        <div class="people-answer-box right-content w-screen pb-5 md:w-3/5">
          <h4
            class="
              answer-title
              text-lg
              md:text-2xl
              font-bold
              mb-6
              tracking-widest
              tablet-qisition-margin
            "
          >
            <span class="py-1 px-4 mr-2 font-thin bg-blue-900 answer-font"
              >A</span
            >お客様と従業員のために
          </h4>
          <p class="answer-text tracking-widest">
            私は「お客様と従業員が共に幸せになれる百貨店」を目指します。そのためには、当社の強みである東急沿線という商圏やグループでの連携、売場編集力をこれまで以上に強化すること。また、2022年に10周年を迎えるShinQsについては、開業当初自らの価値観でモノ・コトを選択する20代後半から40代の働く女性をメインターゲットとしてきましたが、東横のれん街の移転などでお客様層が拡大。今後も様々なお客様との接点を増やし、従業員のやりがいにもつなげていきたいです。
          </p>
        </div>
      </section>

      <section
        class="
          col-span-4
          lg:col-span-10 lg:col-start-2
          lg:pt-10
          lg:pr-5
          lg:px-10
        "
      >
        <!-- コラム -->
        <section class="">
          <div class="inline-block relative top-16">
            <div class="upper-content text-white text-center">
              <h5 class="text-4xl py-3 BrandonGrotesque">
                <img
                  src="@/assets/images/people-column.svg"
                  alt=""
                  srcset=""
                  class="w-full"
                />
              </h5>
            </div>
            <p class="column-subtitle">「〇〇 と共に歩む」</p>
          </div>

          <div class="column-content bg-white text-center pt-20">
            <h6 class="column-title">「ありがとう」と共に歩む</h6>
            <p class="column-text">
              「誰かから感謝される仕事をしなさい」という先輩からの言葉。その考えはお客様だけでなく、周囲の従業員に対しても共通することです。東急百貨店は、百貨店とショッピングセンターが融合した店舗や専門店など様々な形態を有しています。だからこそ、固定観念に捉われない働きやすい環境づくりに励んでいきたいと思います。
            </p>
          </div>
        </section>
        <!-- コラムここまで -->

        <div class="lg:mt-32">
          <div class="upper-content pt-8 lg:pt-0">
            <img
              src="@/assets/images/person4-4.png"
              srcset="
                @/assets/images/person4-4.png    1x,
                @/assets/images/person4-4@2x.png 2x
              "
              alt="people4"
              class="home-person w-full"
            />
          </div>
          <div class="mt-8">
            <ul class="md:flex xl:mt-14 profile">
              <li class="profile-title">
                <p class="font-thin text-4xl tracking-widest BrandonGrotesque">
                  <img
                    src="@/assets/images/people-profile.svg"
                    alt=""
                    srcset=""
                  />
                </p>
              </li>
              <li class="md:ml-32 pt-7 lg:pt-0 pl-5 md:pl-0">
                <p class="people-name tracking-widest">澤木 奈津子</p>
                <p class="people-kana mt-3 tracking-widest">Natsuko Sawaki</p>
              </li>

              <li class="md:ml-12 people-info pl-5 lg:pl-0 pt-3 lg:pt-0">
                <p>営業推進部 顧客サービス部</p>
                <p class="py-4">2009年 入社</p>
                <p>経済学部 経営学科 卒</p>
              </li>
            </ul>
            <div
              class="
                pagination
                flex
                justify-center
                w-screen
                mx-auto
                lg:w-6/12
                py-10
                xl:pt-20
              "
            >
              <a href="3"
                ><img
                  src="@/assets/images/prep.svg"
                  alt=""
                  class="pagination-img"
              /></a>
              <img
                src="@/assets/images/people-pagination.svg"
                alt=""
                class="mx-2"
              />
              <a href="5"
                ><img
                  src="@/assets/images/next.svg"
                  alt=""
                  class="ml-2 pagination-img"
              /></a>
            </div>
          </div>
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
  </div>
</template>


<style>
@import "../../../assets/style/style.css";
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);
@import url("https://use.typekit.net/bdr1ssy.css");

.people-text {
  color: #707070;
}
.column-title {
  font-family: noto-serif-condensed, serif;
  font-weight: 400;
  font-size: 28px;
  color: #707070;
  letter-spacing: 10px;
  display: inline-block;
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-thickness: from-font;
}
.column-subtitle {
  font-family: "Noto Sans Japanese", sans-serif;
  font-weight: 300;
  font-size: 14px;
  color: #707070;
  letter-spacing: 2px;
}
.column-content {
  width: 96%;
  margin-left: 4%;
}
.column-text {
  font-family: "Noto Sans Japanese", sans-serif;
  font-size: 14px;
  color: #707070;
  line-height: 28px;
  padding: 40px 96px 80px;
  text-align: left;
}
.BrandonGrotesque {
  font-family: Brandon Grotesque !important;
  font-weight: 300;
  font-style: normal;
}
.main-catch-font {
  font-family: noto-serif-condensed, serif;
  color: #000000;
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 8px;
}
.sub-catch-font {
  font-family: "Noto Sans Japanese", sans-serif;
  font-weight: 300;
  font-size: 18px;
  color: #707070;
}
.question-section-title {
  border-left: 4px solid #16344f;
  font-family: "Noto Sans Japanese", sans-serif;
  font-size: 24px;
  padding-right: 24px;
  font-weight: bold;
  text-align: left;
}
.question-box {
  display: inline-block;
}
.answer-text {
  font-family: "Noto Sans Japanese";
  font-size: 14px;
  width: 100%;
  color: #707070;
  font-weight: 400;
}
.answer-attention {
  font-family: "Noto Sans Japanese";
  font-size: 10px;
  color: #707070;
}
.answer-title {
  font-family: "Noto Sans Japanese";
  font-size: 24px;
}
.answer-font {
  color: #add6d4;
  font-family: "Noto Sans Japanese";
}
.people-info {
  font-family: "Noto Sans Japanese", sans-serif;
  font-weight: 200;
  font-size: 14px;
}
.people-name {
  font-family: "Noto Sans Japanese";
  font-size: 24px;
}
.people-kana {
  font-size: 14px;
  color: #707070;
}
.bottom-content {
  width: 78%;
}
.home-person {
}
.people-answer-box {
  padding: 30px;
  margin-left: 80px;
}

.pagination .pagination-img {
  width: 113px;
  margin: auto;
}

@media screen and (max-width: 1024px) {
  .hero {
    padding: 0px;
    padding-right: 40px;
  }
  .people-logo-sp {
    width: 60%;
    padding: 50px;
    padding-left: 20px;
    padding-bottom: 10px;
  }
  .people-main-sp {
    width: 92%;
    margin: auto;
    margin-bottom: 40px;
  }
  .main-catch-font {
    font-size: 28px;
    padding-left: 30px;
  }

  .message {
    width: 85%;
    text-align: left;
    margin: auto;
    padding: 20px 0px;
  }
  .sub-catch-font {
    font-size: 14px;
    text-align: center;
  }
  .employee-box {
    width: 84%;
    margin: 20px auto 0px;
  }
  .people-name {
    font-size: 19px;
  }
  .people-kana {
    font-size: 11px;
  }
  .people-info {
    font-size: 14px;
  }
  .question-right-content {
    margin: 40px auto;
    padding: 0px;
  }
  .answer-title {
    font-size: 18px;
  }
  .answer-text {
    font-size: 14px;
  }
  .people-answer-box {
    margin: 0;
    padding: 20px;
  }
  .people-sp-image {
    padding: 0;
    width: 90%;
    margin: auto;
  }
  .question-section-title {
    font-size: 19px;
  }
  .column-title {
    font-size: 24px;
    border: none;
    padding: 30px;
    text-decoration: underline;
    text-underline-position: under;
    text-decoration-thickness: from-font;
  }
  .column-text {
    padding: 20px;
  }

  .bottom-content {
    padding: 60px;
    width: 100%;
  }
  .upper-content {
    right: 13px !important;
  }
  .home-person {
    width: 100%;
  }
  .column-content {
    padding-bottom: 5rem;
    margin-left: 2%;
    margin-right: 2%;
  }
  .tablet-qisition-margin {
    margin-top: 80px;
  }
}
@media screen and (max-width: 600px) {
  .people-logo-sp {
    width: 80%;
    padding: 0 0 40px 20px;
  }
  .hero {
    padding: 0px;
  }
  .main-catch-font {
    text-align: left;
  }
  .sub-catch-font {
    text-align: left;
  }
  .employee-box {
    text-align: left;
  }
  .tablet-qisition-margin {
    margin-top: 0px;
  }
}
</style>
