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
              src="@/assets/images/person3-1.png"
              srcset="
                @/assets/images/person3-1.png    1x,
                @/assets/images/person3-1@2x.png 2x
              "
              class="pt-0 lg:hidden people-main-sp"
              width="450"
              height="800"
              alt="people1"
            />
            <p class="main-catch-font">周りから</p>
            <p class="main-catch-font">信頼される人間に</p>
          </div>

          <div class="message">
            <p class="sub-catch-font tracking-widest mb-3">
              気持ちは常にフラットに
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              どんな業務にも果敢に挑戦する
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              お客様はもちろん、周囲の人からも
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              頼られる存在でありたい
            </p>
          </div>
          <ul class="employee-box lg:mt-16">
            <li>
              <p class="people-name tracking-widest">
                和田 遥<span class="people-kana tracking-widest lg:ml-5"
                  >Haruka Wada</span
                >
              </p>
            </li>
            <li>
              <p class="people-info mt-3 tracking-wide">
                ファッション・雑貨統括部 第一MD部<span class="mx-2 lg:mx-3"
                  >/</span
                >
                2008年 入社<br />
                法律学部 法律学科 卒
              </p>
            </li>
          </ul>
        </div>
        <div class="people-image mt-5 hidden lg:block">
          <img
            src="@/assets/images/person3-1.png"
            srcset="
              @/assets/images/person3-1.png    1x,
              @/assets/images/person3-1@2x.png 2x
            "
            width="450"
            height="800"
            alt="people1"
          />
        </div>
      </section>

      <section class="question col-span-8 col-start-3 lg:flex pt-20 xl:pt-30">
        <div class="left-content mb-10 lg:pb-0">
          <!-- <div class="white-box bg-white"></div> -->
          <div class="img-box tablet-qisition-margin">
            <img
              src="@/assets/images/person3-2.png"
              srcset="
                @/assets/images/person3-2.png    1x,
                @/assets/images/person3-2@2x.png 2x
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
          md:col-span-12 md:col-start-2
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
          >期待を胸に成長できる
        </h4>
        <p class="answer-text tracking-widest">
          学生時代は、主に映画館スタッフのアルバイトを経験。就職活動においても、お客様と直接関わりの持てる仕事に就きたいと考え、百貨店業界を志望しました。東急百貨店を選んだ理由は、他の百貨店と比較した際に従業員一人ひとりに対しての期待値が高いと感じたからです。また、電車の遅延により、面接に遅れる旨を伝えた際に「安全に配慮してお越しください」と親身に対応してもらえたことから従業員の人柄の良さを実感したことも決め手の一つとなりました。
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
            >店舗づくりの核を担う
          </h4>
          <div>
            <p class="answer-text tracking-widest">
              現在は婦人服バイヤーとして、出店テナントとの販売施策に関する打ち合わせや*リーシングを主な業務としています。その他にも、最近ではSNSを通じたキャンペーン周知や取引先から提案されるデジタル施策の導入に向け、テナントと関係部署をつなぐ仲介役としても機能。担当範囲が広いことで責任感を感じる一方、仕入れた商品をお客様にご購入いただけた際や店舗担当者から商品に対する良い反応が得られた際は、達成感を感じます。
            </p>

            <div class="text-xs lg:text-sm mt-7 text-gray-600">
              <p class="answer-attention">*リーシング:</p>
              <p class="answer-attention">
               百貨店やショッピングセンターなど不動産を賃貸する商業施設にテナントを誘致する営業活動のこと。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        class="
          question
          col-span-8 col-start-2
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
              src="@/assets/images/person3-3.png"
              srcset="
                @/assets/images/person3-3.png    1x,
                @/assets/images/person3-3@2x.png 2x
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
          >慌ただしく過ぎる時間の中で
        </h4>
        <p class="answer-text tracking-widest">
          雑貨バイヤーだった2019年の同時期に、<a
            href="https://www.tokyu-dept.co.jp/scsq/plusq_goods/"
            target="_blank"
            rel="noopener noreferrer"
            >＋Q GOODS</a
          >や<a
            href="https://www.tokyu-dept.co.jp/sby-plaza/kazura/ 
"
            target="_blank"
            rel="noopener noreferrer"
            >KAZURA</a
          >、
          <a
            href="https://www.tokyu-dept.co.jp/sbp/ 
"
            target="_blank"
            rel="noopener noreferrer"
            >ShinQsビューティーパレット</a
          >といった複数店舗の立ち上げに携わりました。それらは、渋谷スクランブルスクエアや東急プラザ渋谷といった商業施設に東急百貨店が出店する店舗。そのため、商品の仕入れからレジへの商品登録、販促活動に至るまで一つひとつの枠組みを自分たちで考え、行動しました。日中は運営店舗や仕入れ先など社外での打ち合わせが多く、その後に商品登録や値札作成を行うなど多忙な日々を送っていました。しかし、今振り返ると、そうした一から店舗をつくり上げた実体験が、「常に先を見据えて行動する」という全ての仕事に通底する重要な要素を教えてくれたと感じます。
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
            >成長を通じて、感謝を伝える
          </h4>
          <p class="answer-text tracking-widest">
            リアルからオンラインへの移行、*実店舗を介したCtoC販売など進歩を続ける社会。そうした変化にいち早く対応できる百貨店であるためにも、日々お客様のニーズや行動に目を配り、新しいことに目を向けてチャレンジし続けていきたいです。そのような私たちの成長が最終的にはお客様のためにもなると信じています。そして、東急百貨店をご利用くださるお客様への感謝を忘れることなく、当社らしい変化を模索していきたいです。
          </p>
          <div class="text-xs lg:text-sm mt-7 text-gray-600">
            <p class="answer-attention">*実店舗を介したCtoC販売:</p>
            <p class="answer-attention">
              実店舗を介して、お客様同士がモノを売買できるシステム。
            </p>
          </div>
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
            <h6 class="column-title">お取引先様と共に歩む</h6>
            <p class="column-text">
              コロナ禍での休業時期には、予定したイベントや仕入れた商品が日の目を見ず、不安が募っていました。そんな中でお取引先様からいただいた「来期に向けた前向きな話がしたい」とのご連絡。どんな時も頼りにしてくださるお取引先様がいることを嬉しく思うと共に、お取引先様のためにも、常にベストを尽くしたいと改めて感じました。
            </p>
          </div>
        </section>
        <!-- コラムここまで -->

        <div class="lg:mt-32">
          <div class="upper-content pt-8 lg:pt-0">
            <img
              src="@/assets/images/person3-4.png"
              srcset="
                @/assets/images/person3-4.png    1x,
                @/assets/images/person3-4@2x.png 2x
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
                <p class="people-name tracking-widest">和田 遥</p>
                <p class="people-kana mt-3 tracking-widest">Haruka Wada</p>
              </li>

              <li class="md:ml-12 people-info pl-5 lg:pl-0 pt-3 lg:pt-0">
                <p>ファッション・雑貨統括部 第一MD部</p>
                <p class="py-4">2008年 入社</p>
                <p>法律学部 法律学科 卒</p>
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
              <a href="2"
                ><img
                  src="@/assets/images/prep.svg"
                  alt=""
                  class="pagination-img"
              /></a>
              <img
                src="@/assets/images/people-pagination.svg"
                alt=""
                class="pagination-img ml-3 mr-1"
              />
              <a href="4"
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
.answer-text a {
  color: #707070;
  text-decoration: underline #707070;
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
  .pagination-img {
    margin: auto;
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
