<template>
  <div>
    <Header />
    <HeaderSp />
    <div class="people lg:grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
      <section class="hero col-span-12 col-start-2 lg:flex justify-around">
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
              src="@/assets/images/person1-1.png"
              srcset="
                @/assets/images/person1-1.png    1x,
                @/assets/images/person1-1@2x.png 2x
              "
              class="pt-0 lg:hidden people-main-sp"
              width="450"
              height="800"
              alt="people1"
            />
            <p class="main-catch-font">未来の自分を</p>
            <p class="main-catch-font">見つめていたい</p>
          </div>

          <div class="message">
            <p class="sub-catch-font tracking-widest mb-3">
              不安やリスクを感じる仕事も
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              チャンスと捉え、前向きでありたい
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              様々な経験を積み重ねた先に
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              明るく微笑む自分がいる
            </p>
          </div>
          <ul class="employee-box lg:mt-16">
            <li>
              <p class="people-name tracking-widest">
                船田 あかり
                <span class="people-kana ml-2"
                  ><img
                    src="@/assets/images/people-kana_funada.svg"
                    alt="Funada Akari"
                    style="display: inline-block"
                /></span>
              </p>
            </li>
            <li>
              <p class="people-info mt-3 tracking-wide">
                たまプラーザ店 営業統括部<span class="mx-2 lg:mx-3">/</span
                >2018年 入社<br />
                経済学部 会計ファイナンス学科 卒
              </p>
            </li>
          </ul>
        </div>
        <div class="people-image mt-5 hidden lg:block">
          <img
            src="@/assets/images/person1-1.png"
            srcset="
              @/assets/images/person1-1.png    1x,
              @/assets/images/person1-1@2x.png 2x
            "
            width="450"
            height="800"
            alt="people1"
          />
        </div>
      </section>

      <section
        class="
          question
          col-span-8 col-start-2
          lg:flex
          pt-20
          xl:pt-30
          items-center
        "
      >
        <div class="left-content mb-10 lg:pb-0">
          <div class="img-box tablet-qisition-margin">
            <img
              src="@/assets/images/person1-2.png"
              srcset="
                @/assets/images/person1-2.png    1x,
                @/assets/images/person1-2@2x.png 2x
              "
              class="lg:pr-40 lg:pr-16 people-sp-image"
              alt="persion2"
            />
          </div>
        </div>
        <div class="question-right-content">
          <div class="question-box">
            <p class="text-xs text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">東急百貨店を</p>
            <p class="question-section-title">志望した理由</p>
          </div>
          <div class="question-box-sp">
            <p class="text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">東急百貨店を志望した理由</p>
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
          <span class="px-4 mr-2 font-thin answer-font">A</span>心に寄り添う社風
        </h4>
        <p class="answer-text tracking-widest">
          中学、高校と演劇部に所属。観客の心に寄り添い、感動を届ける演技の魅力に惹かれていました。就職活動でも従業員同士が協力し合い、最良のサービスを通じてお客様に感動を届ける百貨店の仕事に共通点を見出し、志望しました。東急百貨店の面接では、採用担当者がこれまで歩んできた人生にまで興味を抱き、質問をするなど距離の近さを実感。企業理念の体現を肌で感じたことで、お客様の心に触れる仕事ができると確信しました。
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
        <div class="question-right-content">
          <div class="question-box mx-auto">
            <p class="text-xs text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">現在の</p>
            <p class="question-section-title">仕事内容</p>
          </div>
          <div class="question-box-sp">
            <p class="text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">現在の仕事内容</p>
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
            "
          >
            <span class="px-4 mr-2 font-thin bg-blue-900 answer-font">A</span
            >潜在ニーズを見つけ出す
          </h4>
          <div>
            <p class="answer-text tracking-widest">
              現在はたまプラーザ店で主に婦人靴販売を担当。本部で決定される販売計画をもとにした販売施策の策定や*VMD業務、インポートシューズの選定を行っています。販売業務では、時代の変遷に伴う流行やお客様需要の変化を瞬時に捉え、発信することが求められます。そうした変化に対応するため、入社3年目からSNSを通じた商品情報の発信に注力。投稿を見たお客様に足を運んでいただけた際は、仕事のモチベーション向上につながります。
            </p>

            <div class="text-xs lg:text-sm mt-7 text-gray-600">
              <p class="answer-attention">*VMD:</p>
              <p class="answer-attention">
                Visual Merchandisingの略。<br />
                視覚を利用して、そのブランドの価値や購買意欲を引き出すマーケティング手法のこと。見やすく、買いやすい売場づくりを目的に行われる。
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
          xl:pt-30
        "
      >
        <div class="left-content mb-10 lg:pb-0">
          <div class="img-box tablet-qisition-margin">
            <img
              src="@/assets/images/person1-3.png"
              srcset="
                @/assets/images/person1-3.png    1x,
                @/assets/images/person1-3@2x.png 2x
              "
              class="lg:pr-10 lg:pr-16 people-sp-image"
              alt="persion3"
            />
          </div>
        </div>
        <div class="question-right-content">
          <div class="question-box mx-auto">
            <p class="text-xs text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">私の</p>
            <p class="question-section-title">エピソード</p>
          </div>
          <div class="question-box-sp">
            <p class="text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">私のエピソード</p>
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
          lg:pt-12
          py-5
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
          <span class="px-4 mr-2 font-thin bg-blue-900 answer-font">A</span
          >工夫を続けることで見えたもの
        </h4>
        <p class="answer-text tracking-widest">
          2年目の後半から売場のVMD業務を担当。当初、社内研修で学んだ知識を活かして*VPの編集を行っていましたが、正解がない分どうすれば売上向上につながるのかが掴めず、不安を感じていました。そこで、PDCAサイクルをベースとした検証シートを導入。まず、店頭ディスプレイをどのように展開するかを計画し、編集。次に、お客様の反応をもとに改善。最後に、商品の販売数と売上の記録を行いました。その結果、どのように商品を配置すれば、お客様の興味を引き、選びやすくなるのかが分かるように。実際にお客様から「こんな素敵な商品があったのね」とお声をいただけた際は、自分の行動によって、お客様に新たな発見の場を提供できたことを嬉しく思いました。
        </p>
        <div class="text-xs lg:text-sm mt-7 text-gray-600">
          <p class="answer-attention">*VP:</p>
          <p class="answer-attention">
            Visual Presentationの略。<br />
            VMDの要素の一つ。その店舗・ブランドの特徴やコンセプトを表現し、お客様に印象付ける役割を持った商品展示のこと。
          </p>
        </div>
      </section>

      <section
        class="
          question
          col-span-12
          lg:mt-20
          col-start-2
          md:flex
          lg:pr-5
          justify-center
        "
      >
        <div class="question-right-content">
          <div class="question-box mx-auto">
            <p class="text-xs text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">これからの</p>
            <p class="question-section-title">歩み</p>
          </div>
          <div class="question-box-sp">
            <p class="text-right question-logo">
              <span
                ><img
                  src="@/assets/images/people-question-text.svg"
                  alt="Question"
                  style="display: initial"
              /></span>
            </p>
            <p class="question-section-title">これからの歩み</p>
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
            "
          >
            <span class="px-4 mr-2 font-thin bg-blue-900 answer-font">A</span
            >相手の心の側に立っていたい
          </h4>
          <p class="answer-text tracking-widest">
            百貨店を志望した当時と変わることなく、「心に寄り添い、感動を届けられる人」になることが目標です。将来的に売場から離れることがあっても、お客様の心に寄り添い続けたい。そのために、VMDやSNS業務を通じて、お客様満足度の向上や購買意欲の促進に向けたノウハウを身に付けていくこと。日々お客様と接する中で得られることも多く、そうした現場経験を大切にし、自己研鑽と東急百貨店の成長に活かしていきたいと思います。
          </p>
        </div>
      </section>

      <section class="col-span-4 lg:col-span-10 lg:col-start-2">
        <!-- コラム -->
        <section class="">
          <div class="inline-block relative top-16">
            <div class="upper-content text-white text-center">
              <h5 class="text-4xl py-3 BrandonGrotesque">
                <img
                  src="@/assets/images/people-column.svg"
                  alt=""
                  srcset=""
                  style="width: 147px"
                />
              </h5>
            </div>
            <p class="column-subtitle">「〇〇 と共に歩む」</p>
          </div>

          <div class="column-content bg-white text-center pt-20">
            <h6 class="column-title">働く仲間と共に歩む</h6>
            <p class="column-text">
              東急百貨店の行動指針にも「働く仲間とhug」「つねに新しいチャレンジを続けながら、互いを尊敬し、高め合える存在であろう」とあります。当然ながら百貨店の仕事は一人で成り立つものではなく、沢山の従業員が支え合い、現在の東急百貨店があります。働く仲間と共にお客様のことを第一に考え、常に必要とされる百貨店でありたいです。
            </p>
          </div>
        </section>
        <!-- コラムここまで -->

        <div class="lg:mt-32">
          <div class="upper-content pt-8 lg:pt-0">
            <img
              src="@/assets/images/person1-4.png"
              srcset="
                @/assets/images/person1-4.png    1x,
                @/assets/images/person1-4@2x.png 2x
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
                    alt="profile"
                    style="width: 147px"
                  />
                </p>
              </li>
              <li class="md:ml-32 pt-7 lg:pt-0 pl-5 md:pl-0">
                <p class="people-name tracking-widest">船田 あかり</p>
                <span class="people-kana"
                  ><img
                    src="@/assets/images/people-kana_funada.svg"
                    alt="Funada Akari"
                    style="display: inline-block"
                /></span>
              </li>

              <li class="md:ml-12 people-info pl-5 lg:pl-0 pt-3 lg:pt-0">
                <p>たまプラーザ店 営業統括部</p>
                <p class="py-4">2018年 入社</p>
                <p>経済学部 会計ファイナンス学科 卒</p>
              </li>
            </ul>
          </div>
        </div>
        <p class="people-footer-caption">※内容は取材当時のものです</p>
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
              src="@/assets/images/next.svg"
              alt=""
              class="ml-2 pagination-img"
          /></a>
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

<script>
import Header from "../../../components/header.vue";
import HeaderSp from "../../../components/header-sp.vue";

export default {
  components: {
    Header,
    HeaderSp,
  },
};
</script>

<style>
@import "../../../assets/style/style.css";
@import url("https://use.typekit.net/bdr1ssy.css");

.hero {
  margin-top: 162px;
}

.people-text {
  color: #707070;
}

.question-right-content {
  writing-mode: vertical-rl;
  position: relative;
  margin-top: 80px;
}
.question-right-content::after {
  content: "";
  position: absolute;
  top: -40px;
  right: -60px;
  width: 55px;
  height: 68px;
  background: url(../../../assets/images/question-logo.svg) center/contain
    no-repeat;
}

.column-title {
  font-family: "Noto Serif JP", serif;
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
  font-size: 14px;
  color: #707070;
  line-height: 28px;
  padding: 40px 96px 80px;
  text-align: left;
}
.main-catch-font {
  font-family: "Noto Serif JP", serif;
  font-size: 36px;
  font-weight: 300;
  letter-spacing: 8px;
}
.sub-catch-font {
  font-weight: 300;
  font-size: 18px;
  color: #707070;
}
.question-section-title {
  border-left: 4px solid #16344f;
  font-size: 24px;
  padding-right: 24px;
  font-weight: bold;
  text-align: left;
  letter-spacing: 0.4em;
}
.question-box {
  display: inline-block;
}
.question-box-sp {
  display: none;
}
.answer-text {
  font-size: 14px;
  width: 100%;
  color: #707070;
  font-weight: 400;
}
.answer-attention {
  font-size: 10px;
  color: #707070;
}
.answer-title {
  font-size: 24px;
  display: flex;
  align-items: center;
}
.answer-font {
  color: #add6d4;
}
.people-info {
  font-weight: 200;
  font-size: 14px;
}
.people-name {
  font-size: 24px;
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
.people-footer-caption {
  font-size: 12px;
  color: #707070;
  margin-top: 10px;
}
.pagination .pagination-img {
  width: 113px;
  height: 23px;
  margin: auto;
}

@media screen and (max-width: 1024px) {
  .hero {
    padding: 0px;
    padding-right: 40px;
  }
  .people-logo-sp {
    width: 80%;
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
  .people-info {
    font-size: 14px;
  }
  .question-right-content {
    margin: 80px auto 20px;
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
    font-size: 22px;
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
@media screen and (max-width: 767px) {
  .question-right-content {
    margin: 80px auto 0 50px;
    padding-bottom: 0;
  }
  .question-right-content::after {
    width: 35px;
    height: 42px;
    top: -20px;
    left: -42px;
    right: initial;
  }
  .question-box {
    display: none;
  }
  .question-box-sp {
    display: block;
    position: relative;
  }
  .question-logo {
    border-left: none;
  }
  .question-box-sp .question-section-title {
    padding-right: 0;
    letter-spacing: 0.2em;
    writing-mode: initial;
    border-left: none;
    border-top: 1px solid #16344f;
    border-bottom: 4px solid #16344f;
  }

  .answer {
    padding: ;
  }
  .answer-title {
    margin-top: 0;
    font-size: 16px !important;
  }
  .question-logo {
    position: absolute;
    top: -42px;
    right: 24px;
  }
  .question-logo span img {
    transform: rotate(270deg);
  }
  .tablet-qisition-margin {
    margin-top: 40px;
  }
}
@media screen and (max-width: 600px) {
  .people-logo-sp {
    width: 80%;
    padding: 0 0 40px 20px;
  }
  .hero {
    padding: 0px;
    margin-top: 120px;
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
  .column-title {
    font-size: 20px;
  }
  .profile-title {
    padding-left: 1.25rem;
  }
  .people-footer-caption {
    padding-left: 1.25rem;
    margin-top: 20px;
  }
}
</style>
