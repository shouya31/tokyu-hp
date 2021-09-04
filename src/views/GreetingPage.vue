<template>
  <div class="greeting">
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
          src="@/assets/images/recruit-title.svg"
          alt="共に歩む×RECRUIT"
          class="lg:w-full"
        />
      </div>
      <div class="current-nav">
        <p>人事部長からのメッセージ</p>
      </div>
    </section>
    <div
      class="
        p-4
        lg:col-span-6
        col-span-3
        lg:col-start-3
        lg:pt-16
        pt-24
        greeting-contents
      "
    >
      <img
        src="../assets/images/greeting.png"
        class="w-full mt-4"
        alt="東急百貨店代表"
      />
      <section class="lg:pb-16 text-gray-700">
        <h1
          class="
            greeting-message
            text-md
            font-weight-100
            tracking-wider
            pt-9
            pb-3
            md:text-3xl
          "
        >
          新しい未来に向けて、<br class="sp-br" />共に歩んでいきましょう
        </h1>
        <hr class="my-3 border-black" />
        <ul class="block mt-6 md:flex">
          <li class="leader-name">
            <p class="text-base md:text-2xl">
              <span class="mr-1">飯塚</span><span class="ml-1">康浩</span>
            </p>
          </li>
          <li>
            <p
              class="
                leading-7
                ml-0
                sm:ml-4
                text-gray-400
                tracking-widest
                text-xs
                sm:leading-10
              "
            >
              Yasuhiro Iizuka
            </p>
          </li>
        </ul>
        <p class="mt-3 text-sm md:text-md">人事部長</p>
      </section>
      <section class="py-8">
        <!-- Questionのフォント調査 -->
        <h3
          class="section-sub-title text-lg md:text-2xl pt-5 tracking-wider bold"
          style="color: #333333"
        >
          求める人物像
        </h3>
        <hr class="border-2 mt-2 mb-4" />
        <p
          class="
            NotoSansJapanesee
            bg-white
            mt-12
            p-5
            font-semibold
            tracking-widest
            text-gray-700 text-lg
            md:text-2xl
          "
        >
          企業理念の実践とその一歩先へ
        </p>
        <p
          class="
            my-7
            text-sm
            tracking-wider
            leading-8
            lg:leading-7
            text-gray-600
          "
        >
          当社で働くにあたって、その根底にあるのは企業理念の実践です。<br />
          企業理念にある、「お客様にとって、なくてはならない存在。それが私たちの誇りです」、「誰よりもお客様の近くで、誰よりも深くお客様を思い、誰よりも情熱をもってお客様の力になります」、そして「お客様とともに未来へ向かって成長し続けます」というビジョン。<br />
          誰のために、何のために、どのような姿勢で働くのか。私たちを支えてくださっている方々への感謝の気持ちを忘れず、仕事に臨むことが大切です。<br />
          そしてこの企業理念の実践をベースとした上で、変化の激しい社会環境にいかに機敏に対応していくかも求められます。そのためには、市場および事業全体を俯瞰し、柔軟な発送と広い視野、高い視座で計画を立案・実行し、結果を導き出すこと。そうした企業理念を実践しつつも、「既成概念に捉われない、変革志向と柔軟な発想を持つ人」、「主体的にアイデアを創出・具現化し、結果を出すことができる人」との出会いを楽しみにしています。
        </p>
      </section>
      <section class="py-8">
        <!-- Questionのフォント調査 -->
        <h3
          class="section-sub-title text-lg md:text-2xl pt-5 tracking-wider bold"
          style="color: #333333"
        >
          人事部長として心がけていること
        </h3>
        <hr class="border-2 mt-2 mb-4" />
        <p
          class="
            NotoSansJapanesee
            bg-white
            mt-12
            p-5
            font-semibold
            tracking-widest
            text-gray-700 text-lg
            md:text-2xl
          "
        >
          「人材」を「人財」へと<br class="sp-br" />進化させていくために
        </p>
        <p
          class="
            my-7
            text-sm
            tracking-wider
            leading-8
            lg:leading-7
            text-gray-600
          "
        >
          普段から心がけているのは、「否定をしないこと」と「メンバーの様子に気を配ること」。<br />
          共に働く仲間とその一人ひとりが持つ熱意を大切にしたい......。<br />
          人事部長として、それぞれの個性を活かし、尊重する人材育成を行っていきたいと考えています。<br />
          組織を城の城壁に例えると、城壁は様々な形と大きさの石垣が重なり合い、崩れない強固な土台を築いています。<br />
          同様に、企業も一人ひとりの個性や強みが組み合わさり、相乗効果が生まれることで強い組織が形成されます。「人材」が貴重な「人財」に進化するよう、制度面・環境面双方の向上に注力し、東急百貨店の今と未来を支えていくことが自分の役目であると考えています。
        </p>
      </section>
      <section class="pt-8 pb-8 lg:pb-32">
        <!-- Questionのフォント調査 -->
        <h3
          class="section-sub-title text-lg md:text-2xl pt-5 tracking-wider bold"
          style="color: #333333"
        >
          応募者へのメッセージ
        </h3>
        <hr class="border-2 mt-2 mb-4" />
        <p
          class="
            NotoSansJapanesee
            bg-white
            mt-12
            p-5
            font-semibold
            tracking-widest
            text-gray-700 text-lg
            md:text-2xl
          "
        >
          共に歩み、成長する、<br class="sp-br" />未来へ向かって
        </p>
        <p
          class="
            my-7
            text-sm
            tracking-wider
            leading-8
            lg:leading-7
            text-gray-600
          "
        >
          ご存知の通り、百貨店業界を取り巻く環境は決して楽観できるものではなく、構造改革や新たな事業モデル構築の動きが加速しています。<br />
          そうした不透明な状況下でも、当社は「融合型リテーラー（多事業戦略）」の実現に向け、より強固な事業構造への転換と*DXの推進による新しいお買い物体験の提供を進めています。<br />
          今後、いかにその推進速度を上げていくかが問われる中で、それらを担うのは「人」です。求める人物像でも示したように、皆様には既成概念に捉われない変革志向と柔軟な発想を持つこと。そして、主体的にアイデアを創出・具現化し、結果を出すために失敗を恐れず、何事にも積極的に挑戦して欲しいと思っています。そのためには、困難を打開するバイタリティとやり抜く強い意志、そして行動力が必要です。企業理念を実践し続け、お客様の豊かで上質な暮らしづくりに貢献していきましょう。<br />
          共に歩み、成長する、未来へ向かって。ご応募お待ちしております。
        </p>
        <p class="text-sm">
          <small class="text-gray-600">
            *DX: Digital
            Transformationの略。デジタル技術を浸透させることで人々の生活をより良いものへと変革すること。<br />また、既存の価値観を覆す革新的なイノベーションをもたらすもの。
          </small>
        </p>
      </section>
    </div>
    <footer class="col-span-10 bg-white pt-14 pb-10 text-center">
      <a href=""
        ><img
          src="../assets/images/footer-logo.svg"
          alt="東急百貨店"
          width="180"
          class="mx-auto bg-white"
      /></a>

      <p class="text-sm mt-5">
        <small
          >Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights
          Reserved.</small
        >
      </p>
    </footer>
  </div>
</template>


<style>
@import "../assets/style/style.css";

.greeting {
  background-color: #f8f8f8;
  padding: 40px 0 80px;
}
.greeting .greeting-contents {
  max-width: 728px;
  margin: auto;
}

.section-title-theme {
  color: #16344f;
  font-family: Brandon Grotesque;
  font-weight: bold;
}
.question-title {
  border: none !important;
}
.greeting-message {
  font-family: "Noto Serif JP";
}
p {
  font-family: "Noto Sans Japanese";
}
.section-title-theme {
  font-family: Brandon Grotesque !important;
  font-size: 32px;
  font-weight: 500;
}
.section-sub-title {
  color: rgb(51, 51, 51);
  font-family: "Noto Sans Japanese";
  font-weight: 500;
}
.NotoSansJapanesee {
  font-family: "Noto Sans Japanese";
}
</style>
