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
              src="@/assets/images/person6-1.jpg"
              srcset="
                @/assets/images/person6-1.jpg    1x,
                @/assets/images/person6-1@2x.jpg 2x
              "
              class="pt-0 lg:hidden people-main-sp"
              width="450"
              height="800"
              alt="people1"
            />
            <p class="main-catch-font">心躍る百貨店を</p>
            <p class="main-catch-font">思い描いて</p>
          </div>
          <div class="message">
            <p class="sub-catch-font tracking-widest mb-3">
              日々の生活や会話の中から
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              企画につながるヒントを探す
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              企画が実現した瞬間の
            </p>
            <p class="sub-catch-font tracking-widest mb-3">
              ワクワク感を大切にしたい
            </p>
          </div>
          <ul class="employee-box lg:mt-16">
            <li>
              <p class="people-name tracking-widest">
                秋山 さやか
                <span class="people-kana ml-2"
                  ><img
                    src="@/assets/images/people-kana_akiyama.svg"
                    alt="Sayaka Akiyama"
                    style="display: inline-block"
                /></span>
              </p>
            </li>
            <li>
              <p class="people-info mt-3 tracking-wide">
                営業推進部 営業企画部<span class="mx-2 lg:mx-3">/</span> 2005年 入社<br />
                文学部 心理学科 卒
              </p>
            </li>
          </ul>
        </div>
        <div class="people-image mt-5 hidden lg:block">
          <img
            src="@/assets/images/person6-1.jpg"
            srcset="
              @/assets/images/person6-1.jpg    1x,
              @/assets/images/person6-1@2x.jpg 2x
            "
            width="450"
            height="800"
            alt="people1"
          />
        </div>
      </section>

      <section class="question col-span-8 col-start-2 lg:flex pt-20 xl:pt-30">
        <div class="left-content mb-10 lg:pb-0">

          <div class="img-box tablet-qisition-margin">
            <img
              src="@/assets/images/person6-2.png"
              srcset="
                @/assets/images/person6-2.png    1x,
                @/assets/images/person6-2@2x.png 2x
              "
              class="lg:pr-10 lg:pr-16 people-sp-image"
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
          >人を大切にしてくれる会社
        </h4>
        <p class="answer-text tracking-widest">
          就職活動では、大学時代に学んだカウンセリングの知識が活かせること。また、クリスマスやバレンタインといった行事が好きだったこともあり、そうした生活歳時記の一端を担う百貨店の仕事に興味を持ちました。東急百貨店は、応募者一人ひとりの名前を覚えるなど、学生としてではなく、一人の人として向き合ってくれました。そうした行動からお客様や従業員問わず、人を大切にする会社だと実感できたことが入社の決め手となりました。
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
            >固定観念に捉われず、<br class="sp-br">お客様ニーズを満たす
          </h4>
          <div>
            <p class="answer-text tracking-widest">
              所属する営業企画部では、主に会社全体の販売スケジュール作成や売出計画の策定を行っています。また、その他にもお客様との新しい接点を持つために*ライブコマースやテレビ電話での接客サービスなど新しい取り組みも実施。コロナ禍の影響を受けて企画したVRによる模擬旅行体験は、「百貨店＝モノを売る場所」という認識に捉われない試みでした。デジタル技術を用いて見えた課題もあった一方で、お客様への新しいアプローチ方法に次につながる手応えを感じました。
            </p>

            <div class="text-xs lg:text-sm mt-7 text-gray-600">
              <p class="answer-attention">*ライブコマース:</p>
              <p class="answer-attention">
                ライブ動画の配信を通じて、商品を購入してもらう販売形態のこと。<br />
                ネットショッピングでありながらも、商品に関する質問などお客様とのコミュニケーションを取ることが可能。
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
              src="@/assets/images/person6-3.png"
              srcset="
                @/assets/images/person6-3.png    1x,
                @/assets/images/person6-3@2x.png 2x
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
          >50周年記念イベントで掴んだ自信
        </h4>
        <p class="answer-text tracking-widest">
          2017年に開店から50周年を迎えた本店。その周年イベントの開催のため、1年程前からお店の歴史について調べることや若手社員と共に意見を出し合うことで様々な企画を考案し、実施。過去に利用していた紙袋のデザインを用いたグッズやお客様からメッセージをいただける本店のジオラマを作成するなど試行錯誤を重ねました。最も印象に残っている企画は、Bunkamuraオーチャードホールで開催した50周年記念コンサート。当初、予算や集客数の面で実施不可能かとも思われましたが、企画を実現させたいという強い想いで課題解決に取り組んだ結果、実現に成功。お客様も沢山足を運んでくださり、本店とお客様のつながりや自分自身の成長を実感することができました。
        </p>
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
              tablet-qisition-margin
            "
          >
            <span class="px-4 mr-2 font-thin bg-blue-900 answer-font"
              >A</span
            >沿線生活を豊かにする
          </h4>
          <p class="answer-text tracking-widest">
            ここ数年で東急百貨店は東急沿線を中心に専門店や小型店を多数出店。東急沿線で生活されている方を含め、様々なお客様と関わる機会が増えました。コロナ禍や在宅勤務の影響で人々の暮らしが変化する中、そうした展開力を活かし、少しでもお客様の暮らしや利便性の向上に努めていきたいです。そして、「東急百貨店だからできること」を大切にし、仲間たちと百貨店の未来の在り方を模索していきたいと考えています。
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
            <h6 class="column-title">東急沿線と共に歩む</h6>
            <p class="column-text">
              私自身、東急沿線に住んでおり、東急百貨店が東急グループの一員として沿線に住む人々の生活に影響を与えていることを日々実感しています。沿線生活者の暮らしをより豊かにすることを目標に、小型店や専門店、デジタルツールなどを通じて、東急百貨店だからこそできる質の高いサービスを届けていきたいと思います。
            </p>
          </div>
        </section>
        <!-- コラムここまで -->

        <div class="lg:mt-32">
          <div class="upper-content pt-8 lg:pt-0">
            <img
              src="@/assets/images/person6-4.jpg"
              srcset="
                @/assets/images/person6-4.jpg    1x,
                @/assets/images/person6-4@2x.jpg 2x
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
                <p class="people-name tracking-widest">秋山 さやか</p>
                <span class="people-kana"
                  ><img
                    src="@/assets/images/people-kana_akiyama.svg"
                    alt="Sayaka Akiyama"
                    style="display: inline-block"
                /></span>
              </li>
              <li class="md:ml-12 people-info pl-5 lg:pl-0 pt-3 lg:pt-0">
                <p>営業推進部 営業企画部</p>
                <p class="py-4">2005年 入社</p>
                <p>文学部 心理学科 卒</p>
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
          <a href="5"
            ><img
              src="@/assets/images/prep.svg"
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
