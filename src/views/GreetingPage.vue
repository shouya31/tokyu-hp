<template>
    <!-- 全体のグリッドを直す -->
    <div class="container-fuild">
        <div class="row grid grid-cols-4 gap-4">
            <div class="col-span-1 auto-cols-min px-2 text-center md:pt-8 md:top-0 md:left-0 h-16">
                <div class="md:relative mx-auto lg:px-6">
                    <ul class="list-reset flex flex-row md:flex-col text-center md:text-left">
                        <li class="mr-3 flex-1">
                            <!-- 画像ちょっと横にずれてる？ -->
                            <img src="../assets/tokyu-logo-gray.png" alt="東急百貨店" width="150">
                        </li>
                        <li class="ml-3 pt-1 flex-1 font-medium">
                            <!-- フォント調べる -->
                            <p class="tracking-widest">RECUITMENT</p>
                        </li>
                        <li class="mx-8 flex-1 leading-10">
                            <!-- ハンバーガーでいい？ -->
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"/>
                            </svg>
                        </li>
                        <li class="ml-3 pt-5 flex-1 font-medium">
                            <button class="bg-blue-900 py-1 px-3">
                                <p class="text-white tracking-widest">ENTRY</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-span-2 pt-24">
                <div class="text-start mb-9">
                    <img src="../assets/hr-leader.png" alt="東急百貨店代表" width="710">
                </div>
                <section class="pb-16 text-gray-700">
                    <h1 class="text-3xl font-weight-100 tracking-widest py-3">新しい未来に向けて、共に歩んでいきましょう</h1>
                    <hr class="my-3 border-black">
                    <ul class="flex mt-6">
                        <li class="leader-name"><h4 class="text-3xl"><span class="mr-4">飯塚</span><span class="ml-4">康浩</span></h4></li>
                        <li class="leader-name-reading"><p class="leading-10 ml-4 text-gray-400 tracking-widest">Yasuhiro Iizuka</p></li>
                    </ul>
                    <p class="mt-3">人事部長</p>
                </section>
                <section class="py-8">
                    <div class="py-2">
                        <!-- Questionのフォント調査 -->
                        <h6 class="text-3xl">Question</h6>
                        <hr>
                        <h2 class="text-2xl pt-5 font-semibold tracking-wider text-gray-700">求める人物像</h2>
                        <hr class="border-2 mt-2 mb-4">
                    </div>
                    <div class="pt-2">
                        <p class="bg-white p-5 text-2xl font-semibold tracking-widest text-gray-700">A. 企業理念の実践とその一歩先へ</p>
                        <p class="my-7 text-sm tracking-wider leading-8 text-gray-600">
                            当社で働くにあたって、その根底にあるのは企業理念の実践です。企業理念にある、
                            「お客様にとって、なくてはならない存在。それが私たちの誇りです」、「誰よりもお客様の近くで、
                            誰よりも深くお客様を思い、誰よりも情熱をもってお客様の力になります」、そして「お客様とともに未来へ向かって
                            成長し続けます」というビジョン。誰のために、何のために、どのような姿勢で働くのか。私たちを支えてくださっている
                            方々への感謝の気持ちを忘れず、仕事に臨むことが大切です。そしてこの企業理念の実践をベースとした上で、
                            変化の激しい社会環境にいかに機敏に対応していくかも求められます。そのためには、市場および事業全体を俯瞰し、
                            柔軟な発送と広い視野、高い視座で計画を立案・実行し、結果を導き出すこと。そうした企業理念を実践しつつも、「既成概念に捉われない、変革志向
                            と柔軟な発想を持つ人」、「主体的にアイデアを創出・具現化し、結果を出すことができる人」との出会いを
                            楽しみにしています。
                        </p>
                    </div>
                </section>
                <section class="py-8">
                    <div class="py-2">
                        <!-- Questionのフォント調査 -->
                        <h6 class="text-3xl">Question</h6>
                        <hr>
                        <h2 class="text-2xl pt-5 font-semibold tracking-wider text-gray-700">人事部長として心がけていること</h2>
                        <hr class="border-2 mt-2 mb-4">
                    </div>
                    <div class="pt-2">
                        <p class="bg-white p-5 text-2xl font-semibold tracking-widest text-gray-700">A. 「人材」を「人財」へと進化させていくために</p>
                        <p class="my-7 text-sm tracking-wider leading-8 text-gray-600">
                            普段から心がけているのは、「否定をしないこと」と「メンバーの様子に気を配ること」。共に働く仲間とその
                            一人ひとりが持つ熱意を大切にしたい......。人事部長として、それぞれの個性を活かし、尊重する人材育成を行って
                            いきたいと考えています。組織を城の城壁に例えると、城壁は様々な形とおおきさの石垣が重なり合い、崩れない
                            強固な土台を築いています。同様に、企業も一人一人の個性や強みが組み合わさり、相乗効果が生まれることで強い組織が
                            形成されます。「人材」が貴重な「人財」に進化するよう、制度面・環境面双方の向上に注力し、東急百貨店の
                            今と未来を支えていくことが自分の役目であると考えています。
                        </p>
                    </div>
                </section>
                <section class="pt-8 pb-32">
                    <div class="py-2">
                        <!-- Questionのフォント調査 -->
                        <h6 class="text-3xl">Question</h6>
                        <hr>
                        <h2 class="text-2xl pt-5 font-semibold tracking-wider text-gray-700">応募者へのメッセージ</h2>
                        <hr class="border-2 mt-2 mb-4">
                    </div>
                    <div class="pt-2">
                        <p class="bg-white p-5 text-2xl font-semibold tracking-widest text-gray-700">A. 共に歩み、成長する、未来へ向かって</p>
                        <p class="my-7 text-sm pb-5 tracking-wider leading-8 text-gray-600">
                            ご存知の通り、百貨店業界を取り巻く環境は決して楽観できるものではなく、構造改革や新たな事業モデル構築の
                            動きが加速しています。そうした不透明な状況下でも、当社は「融合型リテーラー（多事業戦略）」の実現に向け、
                            より強固な事業構造への転換と*DXの推進による新しいお買い物体験の提供を進めています。今後、いかにその推進速度を
                            上げていくかが問われる中で、それらを担うのは「人」です。求める人物像でも示したように、皆様には既成概念に捉われない
                            変革志向と柔軟な発想を持つこと。そして、主体的にアイデアを創出・具現化し、結果を出すために失敗を恐れず、
                            何事にも積極的に挑戦して欲しいと思っています。そのためには、困難を打開するバイタリティとやり抜く強い意志、
                            そして行動力が必要です。企業理念を実践し続け、お客様の豊かで上質な暮らしづくりに貢献していきましょう。
                            共に歩み、成長する、未来へ向かって。ご応募お待ちしております。
                        </p>
                        <p class="text-sm"><small class="text-gray-600">
                            *DX: Digital Transformationの略。デジタル技術を浸透させることで
                            人々の生活をより良いものへと<br>変革すること。また、既存の価値観を覆す革新的なイノベーションをもたらすもの。
                        </small></p>
                    </div>
                </section>
            </div>
        </div>
        <footer class="w-full bg-white py-10">
            <div class="text-center pt-5">
                <!-- 画像ちょっと横にずれてる？ -->
                <img src="../assets/tokyu-logo-white.png" alt="東急百貨店" width="180" class="mx-auto bg-white">
                <!-- letter spacingの調整 -->
                <p class="text-black mb-5 tracking-widest">RECUITMENT</p>
                <p class="text-sm mt-5 italic"><small>Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights Reserved.</small></p>
            </div>
        </footer>
    </div>
</template>

<script>
// ここにJSを実装する
export default {
  name: 'Greeting',
  }
</script>

<style>
    body {
        background-color: #f2f2f2;
        box-sizing: border-box;
        font-family: "ヒラギノ明朝 ProN W6", "HiraMinProN-W6", "HG明朝E", "ＭＳ Ｐ明朝", "MS PMincho", "MS 明朝", serif;
    }
    hr {
        border-color: #15334d;
    }
    .leader-name {
        font-family: "Hiragino Sans","ヒラギノ角ゴシック";
    }
    .leader-name-reading {
        font-family: system-ui;
    }
    section h1 {
        font-family: "游明朝体","YuMincho";
    }
    section h6 {
        color:#15334d;
    }
</style>
