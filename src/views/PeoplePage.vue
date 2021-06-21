<template>
  <div
    class="container-fuild people lg:grid grid-cols-1 w-screen lg:grid-cols-12 overflow-hidden"
  >
    <sidebar></sidebar>
    <header class="lg:hidden fixed w-full" style="z-index:999999999;">
      <div class="pl-5 flex justify-between">
        <div class="py-3">
          <a href="#" class=""
            ><img
              src="../assets/images/tokyu-logo.png"
              alt="東急百貨店"
              width="140"
          /></a>
        </div>
        <div class="menu p-5">
          <p><span style="width: 40px;"></span></p>
          <p><span style="width: 40px;"></span></p>
        </div>
      </div>
    </header>
    <section
      class="hero px-4 col-span-12 col-start-3 lg:flex lg:pt-10 lg:pr-5 mx-auto pt-24"
    >
      <div class="left-content mr-auto">
        <div
          class="lead leading-7 text-left text-4xl tracking-wider font-semibold relative lg:right-12 pb-5 lg:pb-0"
        >
        <img src="../assets/images/people-title.png" alt="" class="lg:w-full w-7/12">
    
        </div>
        <div
          class="sub-lead leading-snug font-thin text-2xl xl:text-5xl lg:mt-28 lg:mb-14 tracking-wide"
        >
          <img
            src="../assets/images/person6.png"
            class="pt-0 lg:hidden"
            width="450"
            height="800"
            alt="people1"
          />
          <p
            class="main-catch-font mb-3 pt-16 pr-16 pl-4 lg:pl-0 lg:pt-0 lg:pr-0 lg:text-4xl text-left"
          >
            心躍る百貨店を
          </p>
           <p
            class="main-catch-font  pr-16 pl-4 lg:pl-0 lg:pt-0 lg:pr-0 lg:text-4xl text-left"
          > 
            思い描いて
          </p>
        </div>
        <div
          class="message mt-5 pl-4 lg:pl-0 lg:my-14 text-sm xl:text-xl text-left leading-9 tracking-wider"
        >
          <p class="sub-catch-font lg:leading-9 tracking-widest">日々の生活や会話の中から</p>
          <p class="sub-catch-font lg:leading-9 tracking-widest">企画につながるヒントを探す</p>
          <p class="sub-catch-font lg:leading-9 tracking-widest">企画が実現した瞬間の</p>
          <p class="sub-catch-font lg:leading-9 tracking-widest">ワクワク間を大切にしたい</p>
        </div>
        <ul class="text-left pl-4 lg:pl-0 pt-6 lg:pt-0">
          <li>
            <p class="people-name text-xl tracking-widest lg:text-2xl">
              秋山 さやか<span
                class="people-kana leading-7 ml-4 text-gray-500 tracking-widest text-xs"
                >Sayaka Akiyama</span
              >
            </p>
          </li>
          <li>
            <p class="people-info mt-3 text-xs xl:text-sm tracking-wide">
              営業推進部<span class="lg:ml-3">営業企画部</span
              ><span class="mx-2 lg:mx-3">/</span> 2005年 入社
            </p>
          </li>
        </ul>
      </div>
      <div
        class="hidden lg:block right-content h-4/6 people-image px-36 pt-10 lg:pt-0 lg:pr-16"
      >
        <img
          src="../assets/images/person6.png"
          width="450"
          height="800"
          alt="people1"
        />
      </div>
    </section>

    <section
      class="question col-span-9 col-start-3 lg:flex pt-10 px-5 xl:pt-30"
    >
      <div class="left-content image-absolute pb-48 mb-10 lg:pb-0">
        <div class="white-box bg-white"></div>
        <div class="img-box lg:w-screen">
          <img
            src="../assets/images/person6-2.png"
            class="pr-10 lg:pr-16"
            alt="persion2"
          />
        </div>
        <div class="blue-box"></div>
      </div>
      <div
        class="right-content text-center question-vertical mx-auto pl-16 lg:ml-auto lg:mr-32 lg:float-right pt-32"
      >
        <div class="loupe-img relative h-3 w-16">
          <img
            src="../assets/loupe.png"
            class="absolute -top-20 right-10"
            alt="loupe"
          />
        </div>
        <div class="question-box h-48 pl-8">
          <p class="text-xs text-right question-logo"><span>Question</span></p>
          <p class="text-lg font-bold text-left pr-2 question-title">
            東急百貨店を
          </p>
          <p class="text-lg font-bold text-left pr-2 question-title">
            志望した理由
          </p>
        </div>
      </div>
    </section>

    <!-- <div
    class="container-fuild people grid grid-cols-1 lg:grid-cols-9 gap-4 md:gap-9 lg:gap-7"
  >
    <sidebar></sidebar>
    <section class="hero px-4 col-span-8 col-start-3 lg:flex lg:pt-10 lg:pr-5">
      <div class="left-content w-full">
        <h1
          class="lead text-3xl xl:text-5xl tracking-wider font-semibold  lg:right-16"
          style="color:#16344F;"
        >
          <span class="people-lead text-lg xl:text-xl font-extralight" style="color:#707070;">共に歩む × </span>PEOPLE
        </h1>
        <div class="mt-28 mb-14 tracking-wide">
          <p class="text-4xl mb-4" style="color: #707070">心躍る百貨店を</p>
          <p class="text-4xl" style="color: #707070">思い描いて</p>
        </div>
        <div class="mb-16">
          <p class="people-text mb-2 text-lg">日々の生活や会話の中から</p>
          <p class="people-text mb-2 text-lg">企画につながるヒントを探す</p>
          <p class="people-text mb-2 text-lg">企画が実現した瞬間の</p>
          <p class="people-text mb-2 text-lg">ワクワク間を大切にしたい</p>
        </div>
        <ul>
          <li class="mb-5">
            <p class="people-name tracking-widest text-xl xl:text-2xl">
              秋山 さやか<span
                class="leading-7 ml-4 text-gray-700 tracking-widest text-xs"
                >Sayaka Akiya style="background:#16344F;"ma</span
              >
            </p>
          </li>
          <li>
            <p classXD="people-info mt-3 text-xs xl:text-sm tracking-wide" style="color:#707070;">
              営業推進部 営業企画部 <span class="mx-3">/</span> 2005年 入社
            </p>
          </li>
        </ul>
      </div>
      <div
        class="right-content h-4/6 people-image pt-10 lg:pt-0 lg:pr-16"
      >
        <img
          src="../assets/people-akiyama.png"
          alt="people1"
          style="width:60vw;"
        />
      </div>
    </section> -->

    <section
      class="answer w-screen md:col-span-12 md:col-start-4 md:w-3/5 mx-auto pt-4 lg:pb-0 lg:pt-12 px-4 md:pl-0 md:pr-5"
    >
      <h4
        class="answer-title text-lg md:text-2xl font-bold my-3 tracking-widest"
      >
        <span class="py-1 px-2 mr-2 font-thin text-white">A</span
        >人を大切にしてくれる会社
      </h4>
      <p
        class="answer-text my-2 md:my-7 text-sm lg:text-md tracking-widest md:tracking-wider leading-7 text-gray-800"
      >
        就職活動では、大学時代に学んだカウンセリングの知識が活かせること。また、元々クリスマスや
        バレンタインといった行事が好きだったこともあり、そうした生活歳時記の一端を担う百貨店の
        仕事に興味を持ちました。東急百貨店は、応募者一人ひとりの名前を覚えてくださるなど、学生
        としてではなく、一人の人として向き合ってくれました。そうした行動からお客様や社員問わず、
        人を大切にする会社だと実感できたことが入社の決め手となりました。
      </p>
    </section>

    <section class="question col-span-12 col-start-3 md:flex pr-28 lg:pr-5">
      <div
        class="left-content question-vertical w-9/12 md:w-auto ml-36 pr-12 lg:pr-0 py-16 lg:pb-20 lg:pt-32"
      >
        <div class="loupe-img relative h-3 w-16">
          <img
            src="../assets/loupe.png"
            class="absolute bottom-4 right-10"
            alt="loupe"
          />
        </div>
        <div class="question-box mx-auto">
          <p class="text-xs text-right question-logo"><span>Question</span></p>
          <p class="text-lg font-bold pr-2 question-title">現在の</p>
          <p class="text-lg font-bold pr-2 question-title">仕事内容</p>
        </div>
      </div>
      <div
        class="answer w-screen md:col-span-3 md:col-start-2 md:w-3/5 mx-auto px-4 md:pl-0 md:pr-5"
      >
        <h4
          class="answer-title text-lg md:text-2xl font-bold my-3 tracking-widest"
        >
          <span class="py-1 px-2 mr-2 font-thin bg-blue-900 text-white">A</span
          >沿線生活をイノベートする
        </h4>
        <p
          class="answer-text my-2 md:my-7 text-sm lg:text-md tracking-widest md:tracking-wider leading-7 text-gray-800"
        >
          所属する営業企画部では、主に会社全体の販売スケジュール作成や売出計画の策定を行っています。
          また、その他にもお客様おの新しい接点を持つために*ライブコマースやテレビ電話での接客サービスなど
          新しい取り組みも実施。コロナ渦の影響を受けて企画したVRによる模擬旅行体験は、「百貨店=モノを売る場所」
          という認識に捉われない試みでした。デジタル技術を用いて見えた課題もあった一方で、お客様への
          新しいアプローチ方法に次につながる手応えを感じました。
        </p>
        <div class="text-xs lg:text-sm text-gray-600">
          <p><small>*ライブコマース:</small></p>
          <p>
            <small>
              ライブ動画の配信を通じて、商品を購入してもらう販売携帯のこと。ネットショッピングで
              ありながらも、商品に関する質問などお客様とのコミュニケーションを取ることが可能。
            </small>
          </p>
        </div>
      </div>
    </section>

    <section
      class="question col-span-9 col-start-3 lg:flex pt-10 px-5 xl:pt-30"
    >
      <div class="left-content image-absolute pb-48 mb-10 lg:pb-0">
        <div class="white-box bg-white"></div>
        <div class="img-box lg:w-screen">
          <img
            src="../assets/images/person6-3.png"
            class="pr-10 lg:pr-16"
            alt="persion3"
          />
        </div>
        <div class="blue-box"></div>
      </div>
      <div
        class="right-content text-center question-vertical mx-auto pl-16 lg:ml-auto lg:mr-32 lg:float-right pt-24"
      >
        <div class="loupe-img relative h-3 w-16">
          <img
            src="../assets/loupe.png"
            class="absolute right-10"
            alt="loupe"
          />
        </div>
        <div class="question-box py-16 mx-auto">
          <p class="text-xs text-right question-logo"><span>Question</span></p>
          <p class="text-lg font-bold text-left pr-2 question-title">私の</p>
          <p class="text-lg font-bold text-left pr-2 question-title">
            エピソード
          </p>
        </div>
      </div>
    </section>

    <section
      class="answer w-screen md:col-span-12 md:col-start-3 md:w-3/5 mx-auto lg:pt-12 pb-5 px-4 md:pl-0 md:pr-5"
    >
      <h4
        class="answer-title text-lg md:text-2xl font-bold my-3 tracking-widest"
      >
        <span class="py-1 px-2 mr-2 font-thin bg-blue-900 text-white">A</span
        >50周年記念イベントで掴んだ自信
      </h4>
      <p
        class="answer-text my-2 md:my-7 text-sm lg:text-md tracking-widest md:tracking-wider leading-7 text-gray-800"
      >
        2017年に開店から50周年を迎えた本店。その記念日を祝うため、1年程前からお店の歴史について
        調べることや若手社員と共に意見を出し合うこと様々な企画を考案し、実施。過去に利用していた
        紙袋のデザインを用いたグッズやお客様からメッセージをいただける本店のジオラマを作成するなど
        試行錯誤を重ねました。最も印象に残っている企画は、Bunkamuraオーチャードホールで開催した
        50周年記念コンサート。当社、予算や集客数の面で実施不可能かとも思われましたが、企画を実現させたい
        という強い想いで課題解決に取り組んだ結果、実現に成功。お客様も沢山足を運んでくださり、
        本店とお客様のつながりや自分自身の成長を実感することができました。
      </p>
    </section>

    <section class="question col-span-12 col-start-3 md:flex pr-28 lg:pr-5">
      <div
        class="left-content question-vertical w-9/12 md:w-auto pr-12 lg:pr-0 ml-36 py-12"
      >
        <div class="loupe-img relative h-3 w-16">
          <img
            src="../assets/loupe.png"
            class="absolute bottom-4 right-10"
            alt="loupe"
          />
        </div>
        <div class="question-box mx-auto">
          <p class="text-xs text-right question-logo"><span>Question</span></p>
          <p class="text-lg font-bold pr-2 question-title">これからの</p>
          <p class="text-lg font-bold pr-2 question-title">歩み</p>
        </div>
      </div>
      <div
        class="answer right-content w-screen pb-5 px-4 lg:ml-10 md:mx-12 md:w-3/5"
      >
        <h4
          class="answer-title text-lg md:text-2xl font-bold my-3 tracking-widest"
        >
          <span class="py-1 px-2 mr-2 font-thin bg-blue-900 text-white">A</span
          >沿線生活をイノベートする
        </h4>
        <p
          class="answer-text my-2 md:my-7 text-sm lg:text-md tracking-widest md:tracking-wider leading-7 text-gray-800"
        >
          ここ数年で東急百貨店は東急沿線を中心に専門店や小型店を多数出店。東急沿線上で生活されている
          方を含め、様々なお客様と関わる機会が増えました。コロナ渦や在宅勤務の影響で人々の暮らしが変化する中、
          そうした展開力を活かし、少しでもお客様の暮らしや利便性の向上に努めていきたいです。
          そして、「東急百貨店だからこそできること」を大切にし、仲間たちと百貨店の未来の在り方を模索していきたいと考えています。
        </p>
      </div>
    </section>

    <!-- コラム -->
    <section
      class="column col-span-4 lg:col-span-12 lg:col-start-3 lg:pt-0 lg:pr-5 lg:px-10 px-5 mb-10 sm:mb-0"
    >
      <div
        class="upper-content column-lead text-white text-center w-1/2 xl:w-1/5 py-1 relative lg:right-0 right-12 lg:left-1 lg:right-12 top-16"
      >
        <h5 class="text-4xl py-3 BrandonGrotesque">Column</h5>
      </div>
      <div
        class="column-sublead medium-content sm:text-base text-center w-1/2 xl:w-1/5 py-2 relative -left-10 lg:right-12 top-16"
      >
        <p>「〇〇とともに歩む」</p>
      </div>
      <div class="bottom-content xl:w-9/12 bg-white text-center md:py-7 pt-10 lg:ml-16">
        <h6
          class="column-title underline pb-3 pt-8 lg:pt-16 text-2xl md:text-4xl font-thin tracking-widest"
        >
          東急線と共に歩む
        </h6>
        <p
          class="column-text p-4 sm:p-10 sm:w-3/4 mx-auto text-xs lg:text-md tracking-wide md:tracking-wider leading-7 text-gray-800"
        >
          私自身、東急沿線上に住んでおり、東急百貨店が東急グループの一員として沿線に住む人々の生活に影響を
          与えていることを日々実感しています。沿線生活者の暮らしをより豊かにすることを目標に、小型店や専門店、
          デジタルツールなどを通じて、東急百貨店だからこそできる質の高いサービスを届けていきたいと思います。
        </p>
      </div>
    </section>
    <!-- コラムここまで -->

    <section
      class="col-span-4 w-screen lg:col-span-12 lg:col-start-3 lg:pt-10 lg:pr-5 lg:px-10"
    >
      <div class="upper-content pt-8 lg:pt-0">
        <img src="../assets/images/home-people6.png" alt="people4" />
      </div>
      <div class="bottom-content mt-8">
        <ul class="lg:flex xl:mt-14 profile">
          <li
            class="profile-title leading-10 sm:text-center text-white mb-auto py-3 px-4 w-40"
          >
            <p class="font-thin text-4xl tracking-widest BrandonGrotesque">Profile</p>
          </li>
          <li class="md:ml-16 people-name pt-7 lg:pt-0 pl-5 md:pl-0">
            <p class="text-2xl sm:text-xl tracking-widest font-medium">
              秋山 さやか
            </p>
            <p>
              <small
                class="people-kana leading-7 text-gray-500 tracking-widest text-xs"
                >Syaka Akiyama</small
              >
            </p>
          </li>
          <li class="md:ml-12 text-sm people-info pl-5 lg:pl-0 pt-3 lg:pt-0">
            <p>営業推進部 営業企画部</p>
            <p class="py-2">2005年 入社</p>
            <p>文学部 心理学科 卒</p>
          </li>
        </ul>
        <p
          class="pagination w-screen lg:w-7/12 text-center font-thin lg:mx-auto py-10 xl:pt-20"
        >
          ← PrepPeople <span class="mx-5 lg:mx-2">|</span> Next People→
        </p>
      </div>
    </section>

    <footer class="col-span-12 bg-white pt-14 pb-10 text-center">
      <a href="/"
        ><img
          src="../assets/tokyu-logo.png"
          alt="東急百貨店"
          width="180"
          class="mx-auto bg-white"
      /></a>
      <p class="text-sm md:text-base recruitment text-black mt-6 lg:my-6">
        RECRUITMENT
      </p>
      <p class="text-xs lg:text-sm mt-5 italic">
        <small
          >Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights
          Reserved.</small
        >
      </p>
    </footer>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";

export default {
  name: "PeoplePage",
  components: {
    Sidebar,
  },
};
</script>

<style>
@import "../assets/style/style.css";
@import url(http://fonts.googleapis.com/earlyaccess/notosansjapanese.css);

.people-text {
  color: #707070;
}
.column-title {
  font-family: YuMincho;
  font-size: 28px;
  color: #707070;
}
.BrandonGrotesque{
    font-family: Brandon Grotesque !important;
}
.main-catch-font{
  font-family: 'Noto Sans Japanese',sans-serif;
  color: #000000;
  font-weight: 300;
  letter-spacing: 8px;
}
.sub-catch-font{
  font-family: 'Noto Sans Japanese',sans-serif;
  font-weight: 200;
}
</style>
