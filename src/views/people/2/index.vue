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
              src="@/assets/images/person2-1.jpg"
              srcset="
                @/assets/images/person2-1.jpg    1x,
                @/assets/images/person2-1@2x.jpg 2x
              "
              class="pt-0 lg:hidden people-main-sp"
              width="450"
              height="800"
              alt="people1"
            />
            <p class="main-catch-font">親切を</p>
            <p class="main-catch-font">届けるために</p>
          </div>

          <div class="message">
            <p class="sub-catch-font tracking-widest mb-3">
              商品を売る場所という枠を超えて
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              最良のサービスを提供したい
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              目に見えないものにこそ
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              本当の価値があると信じている
            </p>
          </div>
          <ul class="employee-box lg:mt-16">
            <li>
              <p class="people-name tracking-widest">
                才治 雄一
                <span class="people-kana ml-2"
                  ><img
                    src="@/assets/images/people-kana_saiji.svg"
                    alt="Yuichi Saiji"
                    style="display: inline-block"
                /></span>
              </p>
            </li>
            <li>
              <p class="people-info mt-3 tracking-wide">
                専門店事業部<span class="mx-2 lg:mx-3">/</span> 2014年 入社<br />
                総合情報学部 総合情報学科 卒
              </p>
            </li>
          </ul>
        </div>
        <div class="people-image mt-5 hidden lg:block">
          <img
            src="@/assets/images/person2-1.jpg"
            srcset="
              @/assets/images/person2-1.jpg    1x,
              @/assets/images/person2-1@2x.jpg 2x
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
              src="@/assets/images/person2-2.png"
              srcset="
                @/assets/images/person2-2.png    1x,
                @/assets/images/person2-2@2x.png 2x
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
          <span class="px-4 mr-2 font-thin answer-font">A</span
          >地域に根付いた百貨店
        </h4>
        <p class="answer-text tracking-widest">
          百貨店を志望したきっかけは、大学時代に経験したコンビニエンスストアのアルバイト。働いていた店舗は、商店街に面しており、ご年配の方が多く利用されるお店でした。そうしたお客様への接客を通じて、小売業で働くやりがいを実感。その中でも、当時渋谷ヒカリエや東急スクエア内に続々と店舗を展開するなど「攻めの姿勢」を感じたこと。また、地域行事への参加といった地域密着性に惹かれ、東急百貨店に入社しました。
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
              tablet-qisition-margin
            "
          >
            <span class="px-4 mr-2 font-thin bg-blue-900 answer-font"
              >A</span
            >密接な関わりが、確かな信頼を生む
          </h4>
          <div>
            <p class="answer-text tracking-widest">
              専門店事業部にて、東急フードショースライスの新規開発や運営をメインで担当し、開業に向けたテナント*リーシングから販売計画の策定を行っています。東急フードショースライスは、基本的にお取引先様のショップのみで構成されている形態が多いため、一人で担当する店舗数も多く、各種調整に苦労することもあります。一方で、小型店が多いため、新しい取り組みを実施しやすく、お取引先様とも密接に関わることができ、やりがいも感じます。
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
          xl:pt-30
        "
      >
        <div class="left-content mb-10 lg:pb-0">
          <div class="img-box tablet-qisition-margin">
            <img
              src="@/assets/images/person2-3.png"
              srcset="
                @/assets/images/person2-3.png    1x,
                @/assets/images/person2-3@2x.png 2x
              "
              class="lg:pr-10 lg:pr-16"
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
          md:col-span-12 md:col-start-3
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
          >グループ会社での新たな学び
        </h4>
        <p class="answer-text tracking-widest">
          入社後、ShinQsでフード業務に携わった後、2019年に初のフードフロア開発に取り組んでいた（株）SHIBUYA109エンタテイメントへの出向を経験。出向先では、企業や著名人とコラボしたオリジナルフードショップの立ち上げから運営までの新規事業を担当しました。渋谷の象徴とも言える場所で最先端の食文化を発信する業務に従事できることは、大きなモチベーションになりました。メニュー開発の際は、商品名から値段、見た目や味に至るまで様々なディレクションを担い、試行錯誤する毎日。著名人をゲストに呼ぶ際は、日程調整など迅速な対応が求められました。先輩方への相談やメンバーとの意見交換を通じて乗り越え、大行列でオープンを迎えた時の達成感は今でも覚えています。
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
              tablet-qisition-margin
            "
          >
            <span class="px-4 mr-2 font-thin bg-blue-900 answer-font"
              >A</span
            >マルチプレイヤーとして<br class="sp-br">会社を支える
          </h4>
          <p class="answer-text tracking-widest">
            当社で働く魅力の一つに、定期的なジョブローテーションによるキャリア開発の幅広さが挙げられます。私自身もこれまでに販売業務からショップ管理、店舗の新規開発と様々な業務を経験。特に、東急百貨店では新しいことに挑戦する従業員を後押しする風土があると感じます。これからもそうした利点を存分に活かし、多様な経験と知識を備えたマルチプレイヤーとして会社に貢献できる人材に成長したいです。
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
            <h6 class="column-title">催事と共に歩む</h6>
            <p class="column-text" style="padding-bottom: 0px">
              2018年からフード催事や*ポップアップストアを担当。それ以来、新しいショップを見つけては、イベントへの出店交渉を行っています。「催事担当の才治」として名刺代わりの挨拶を行うことも多く、私と催事は切っても切り離せない関係。これからもリアル店舗でしか体験できない価値も大切にしながら、東急百貨店を盛り上げていきたいと考えています。
            </p>
            <div
              class="column-text text-xs text-left lg:text-sm mt-7"
              style="padding-top: 0px"
            >
              <p class="answer-attention">*ポップアップストア（イベント）:</p>
              <p class="answer-attention">
                期間限定店舗もしくはイベントのこと。常設の店舗とは異なり、ポップアップの場合、数日から数週間といった一時的な出店となる。
              </p>
            </div>
          </div>
        </section>
        <!-- コラムここまで -->

        <div class="lg:mt-32">
          <div class="upper-content pt-8 lg:pt-0">
            <img
              src="@/assets/images/person2-4.jpg"
              srcset="
                @/assets/images/person2-4.jpg    1x,
                @/assets/images/person2-4@2x.jpg 2x
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
                <p class="people-name tracking-widest">才治 雄一</p>
                <span class="people-kana"
                  ><img
                    src="@/assets/images/people-kana_saiji.svg"
                    alt="Yuichi Saiji"
                    style="display: inline-block"
                /></span>
              </li>

              <li class="md:ml-12 people-info pl-5 lg:pl-0 pt-3 lg:pt-0">
                <p>専門店事業部</p>
                <p class="py-4">2014年 入社</p>
                <p>総合情報学部 総合情報学科 卒</p>
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
          <a href="1"
            ><img src="@/assets/images/prep.svg" alt="" class="pagination-img"
          /></a>
          <img
            src="@/assets/images/people-pagination.svg"
            alt=""
            class="mx-2"
          />
          <a href="3"
            ><img
              src="@/assets/images/next.svg"
              alt=""
              class="ml-2 pagination-img"
          /></a>
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

