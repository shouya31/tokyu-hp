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
              src="@/assets/images/person5-1.png"
              srcset="
                @/assets/images/person5-1.png    1x,
                @/assets/images/person5-1@2x.png 2x
              "
              class="pt-0 lg:hidden people-main-sp"
              width="450"
              height="800"
              alt="people1"
            />
            <p class="main-catch-font">明日は明日の</p>
            <p class="main-catch-font">風が吹く</p>
          </div>

          <div class="message">
            <p class="sub-catch-font tracking-widest mb-3">
              食のデジタル化を通じて
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              食文化の発展を後押しする
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              上手くいく仕事ばかりではないけれど
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              諦めなければ明日は変えられる
            </p>
          </div>
          <ul class="employee-box lg:mt-16">
            <li>
              <p class="people-name tracking-widest">
                橋本 崇顕
                <span class="people-kana ml-2"
                  ><img
                    src="@/assets/images/people-kana_hashimoto.svg"
                    alt="Takaaki Hashimoto"
                    style="display: inline-block"
                /></span>
              </p>
            </li>
            <li>
              <p class="people-info mt-3 tracking-wide">
                事業戦略室<span class="lg:ml-3">事業開発部 兼 食品統括部</span
                ><span class="mx-2 lg:mx-3">/</span> <br class="sp-br">2009年 入社<br />
                映画学科 理論評論コース 卒
              </p>
            </li>
          </ul>
        </div>
        <div class="people-image mt-5 hidden lg:block">
          <img
            src="@/assets/images/person5-1.png"
            srcset="
              @/assets/images/person5-1.png    1x,
              @/assets/images/person5-1@2x.png 2x
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
              src="@/assets/images/person5-2.png"
              srcset="
                @/assets/images/person5-2.png    1x,
                @/assets/images/person5-2@2x.png 2x
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
          >飾らない自分でいられる
        </h4>
        <p class="answer-text tracking-widest">
          学生の頃、大学近くに百貨店やショッピングセンターがあり、学校の帰りや休みの日に足を運んでいました。接客を受けるうちに、徐々に百貨店の仕事に興味を持ち始め、百貨店業界を志望。当初、東急百貨店の存在は知りませんでしたが、説明会後に参加した学生に対して、自己紹介の機会が与えられるなど応募者一人ひとりを知ろうとする前向きな社風に惹かれ、「ここならば自分らしく働ける」と思い、入社を決めました。
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
            >現状を変える2つの役割
          </h4>
          <div>
            <p class="answer-text tracking-widest">
              現在は、新規事業開拓を行う事業開発部と食品を取り扱う食品統括部を兼務。前者では、東急グループ全体で行うベンチャー企業支援や実証実験プログラムに参加しています。後者では食のデジタル化を目標に掲げ、渋谷で運営する食品販売フロア3店舗の*BOPIS・デリバリーを目指しています。新たな試みということもあり試行錯誤を重ねる日々ですが、その分学ぶことや刺激が多く、取り組みがいがあります。
            </p>

            <div class="text-xs lg:text-sm mt-7 text-gray-600">
              <p class="answer-attention">*BOPIS:</p>
              <p class="answer-attention">
                Buy Online Pick-up In
                Storeの略。オンラインショッピングを通じて、購入した商品をリアル店舗で受け取るショッピングスタイルのこと。
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
              src="@/assets/images/person5-3.png"
              srcset="
                @/assets/images/person5-3.png    1x,
                @/assets/images/person5-3@2x.png 2x
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
          >諦めず、進んだその先に
        </h4>
        <p class="answer-text tracking-widest">
          2019年にバイヤーから*EC・通販事業部へ異動。そこで担当したのは、新規事業である越境ECの立ち上げでした。今までと全く異なる業務内容である上に、デジタル分野は未経験。加えて、前例のない仕事だったため、完全にお手上げ状態。物流のオペレーションや商品の出品、経理上の処理方法など国内通販と異なることが多く、日々手探りで業務を行いました。出店を目前に控えたある日、社内で新たな問題が発覚し、急遽延期に。正直、投げ出したい気持ちでした。しかし、諦めずに進み続けた結果、2020年11月に無事立ち上げを完遂。分からないなりにも、ひたすら前に進み続けていれば道は開ける、ということを実感することができました。
        </p>
        <div class="text-xs lg:text-sm mt-7 text-gray-600">
          <p class="answer-attention">*EC:</p>
          <p class="answer-attention">
            Electronic
            Commerceの略。インターネット上でモノやサービスを売買すること。加えて、越境ECとは、インターネット通販サイトを通じた国際的な電子商取引のこと。
          </p>
        </div>
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
            >時代に即した百貨店を目指して
          </h4>
          <p class="answer-text tracking-widest">
            ネットショッピングの普及やコロナ禍の影響で、小売業を取り巻く環境は劇的に変化しました。今私たちに求められるのは、デジタル化への取り組み。その最前線に立ち、食の領域を通じたデジタル分野の強化に取り組んでいきたいと考えています。食品をオンラインとオフラインの両方で買い回りできるようにすること。まずはその第一段階として、販売インフラの整備を進め、徐々に東急沿線にも拡大していくことが今の目標です。
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
            <h6 class="column-title">食と共に歩む</h6>
            <p class="column-text" style="padding-bottom: 0px">
              近年、人が生きる上で必要な三大要素が「衣食住」から「食住衣」へと変化。小売業でも食の強化が叫ばれています。東急百貨店は東横のれん街や東急フードショーなど食の分野に力を入れています。現在は渋谷の食を支える「食の一大マーケット」をつくり、さらに食の*DXと掛け合わせることで、お客様にとって不可欠な存在になりたいと思います。
            </p>
            <div
              class="column-text text-xs text-left lg:text-sm mt-7"
              style="padding-top: 0px"
            >
              <p class="answer-attention">*DX:</p>
              <p class="answer-attention">
                Digital
                Transformationの略。デジタル技術を浸透させることで人々の生活をより良いものへと変革すること。<br />また、既存の価値観を覆す革新的なイノベーションをもたらすもの。
              </p>
            </div>
          </div>
        </section>
        <!-- コラムここまで -->

        <div class="lg:mt-32">
          <div class="upper-content pt-8 lg:pt-0">
            <img
              src="@/assets/images/person5-4.png"
              srcset="
                @/assets/images/person5-4.png    1x,
                @/assets/images/person5-4@2x.png 2x
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
                <p class="people-name tracking-widest">橋本 崇顕</p>
                <span class="people-kana"
                  ><img
                    src="@/assets/images/people-kana_hashimoto.svg"
                    alt="Takaaki Hashimoto"
                    style="display: inline-block"
                /></span>
              </li>

              <li class="md:ml-12 people-info pl-5 lg:pl-0 pt-3 lg:pt-0">
                <p>事業戦略室 事業開発部 兼 食品統括部</p>
                <p class="py-4">2009年 入社</p>
                <p>映画学科 理論評論コース 卒</p>
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
          <a href="4"
            ><img src="@/assets/images/prep.svg" alt="" class="pagination-img"
          /></a>
          <img
            src="@/assets/images/people-pagination.svg"
            alt=""
            class="mx-2"
          />
          <a href="6"
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

