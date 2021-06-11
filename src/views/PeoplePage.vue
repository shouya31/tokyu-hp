<template>
    <div class="container-fuild people grid grid-cols-1 lg:grid-cols-4 gap-9 lg:gap-7">
        <sidebar></sidebar>
        <section class="col-span-3 flex pt-10 pr-5">
            <div class="left-content mr-auto relative">
                <h1 class="lead text-5xl"><span class="people-lead text-2xl font-light">共に歩む × </span>PEOPLE</h1>
                <h2 class="sub-lead leading-snug font-extralight text-5xl mt-28 mb-14 tracking-wider">心躍る百貨店を<br>思い描いて</h2>
                <p class="message my-14 text-xl leading-9 tracking-wider">
                    日々の生活や会話の中から<br>
                    企画につながるヒントを探す<br>
                    企画が実現した瞬間の<br>
                    ワクワク間を大切にしたい
                </p>
                <ul>
                    <li><p class="people-name text-3xl">秋山 さやか<span class="leading-7 ml-4 text-gray-700 tracking-widest text-xs">Sayaka Akiyama</span></p></li>
                    <li><p class="people-info mt-3 text-sm tracking-wide">営業推進部 営業企画部 <span class="mx-3">/</span> 2005年 入社</p></li>
                </ul>
            </div>
            <div class="right-content mr-12 people-image">
                <img src="../assets/people-akiyama.png" class="h-3/5" alt="people1">
            </div>
        </section>
        <!-- ここの空白調整 -->
        <section class="question col-span-3 col-start-2 flex py-10 pr-5">
            <div class="left-content w-3/5">
                <!-- 画像重ね-->
                <img src="../assets/people-akiyama2.png" class="pr-24" alt="people2">
            </div>
            <div class="right-content text-center question-vertical">
                <!-- 虫眼鏡 -->
                <!-- レイアウト修正 -->
                <h3 class="text-2xl">
                    <span class="text-sm float-right mb-16">Question</span><br>
                    東急百貨店を<br>志望した理由
                </h3>
            </div>
        </section>
        <section class="answer col-span-3 col-start-2 w-3/5 mx-auto pb-10 pr-5">
            <h4 class="answer-title text-2xl font-bold my-3 tracking-widest"><span class="py-1 px-2 mr-2 font-thin bg-blue-900 text-white">A</span>人を大切にしてくれる会社</h4>
            <p class="answer-text my-7 text-xs lg:text-md tracking-wider lg:leading-7 text-gray-800">
                就職活動では、大学時代に学んだカウンセリングの知識が活かせること。また、元々クリスマスや
                バレンタインといった行事が好きだったこともあり、そうした生活歳時記の一端を担う百貨店の
                仕事に興味を持ちました。東急百貨店は、応募者一人ひとりの名前を覚えてくださるなど、学生
                としてではなく、一人の人として向き合ってくれました。そうした行動からお客様や社員問わず、
                人を大切にする会社だと実感できたことが入社の決め手となりました。
            </p>
        </section>
        <section class=" question col-span-3 col-start-2 flex py-10 pr-5">
            <div class="left-content question-vertical">
                <!-- 虫眼鏡 -->
                <!-- レイアウト修正 -->
                <h3 class="text-2xl">
                    <span class="text-sm float-right mb-16">Question</span><br>
                    現在の<br>仕事内容
                </h3>
            </div>
            <div class="answer right-content ml-40 w-3/5">
                <h4 class="answer-title text-2xl font-bold my-3 tracking-widest"><span class="py-1 px-2 mr-2 font-thin bg-blue-900 text-white">A</span>固定概念に捉われず、お客様ニーズを満たす</h4>
                <p class="answer-text my-7 text-xs lg:text-md tracking-wider lg:leading-7 text-gray-800">
                    所属する営業企画部では、主に会社全体の販売スケジュール作成や売出計画の策定を行っています。
                    また、その他にもお客様おの新しい接点を持つために*ライブコマースやテレビ電話での接客サービスなど
                    新しい取り組みも実施。コロナ渦の影響を受けて企画したVRによる模擬旅行体験は、「百貨店=モノを売る場所」
                    という認識に捉われない試みでした。デジタル技術を用いて見えた課題もあった一方で、お客様への
                    新しいアプローチ方法に次につながる手応えを感じました。
                </p>
                <p class="text-xs lg:text-sm">
                    <small class="text-gray-600">
                        *ライブコマース:<br>
                        ライブ動画の配信を通じて、商品を購入してもらう販売携帯のこと。ネットショッピングで
                        ありながらも、商品に関する質問などお客様とのコミュニケーションを取ることが可能。
                    </small>
                </p>
            </div>
        </section>

        <section class="question col-span-3 col-start-2 flex py-10 pr-5">
            <div class="left-content">
                <!-- 画像重ね-->
                <img src="../assets/tokyu-department.png" class="w-3/4 lg:max-w-3xl" alt="people2">
            </div>
            <div class="right-content question-vertical text-right">
                <!-- 虫眼鏡 -->
                <!-- レイアウト修正 -->
                <h3 class="text-2xl">
                    <span class="text-sm float-right mb-16">Question</span><br>
                    私の<br>エピソード
                </h3>
            </div>
        </section>
        <section class="answer col-span-3 col-start-2 w-3/5 mx-auto pb-10 pr-5">
            <h4 class="answer-title ext-2xl font-bold my-3 tracking-widest"><span class="py-1 px-2 mr-2 font-thin bg-blue-900 text-white">A</span>50周年記念イベントで掴んだ自信</h4>
            <p class="answer-text my-7 text-xs lg:text-md tracking-wider lg:leading-7 text-gray-800">
                2017年に開店から50周年を迎えた本店。その記念日を祝うため、1年程前からお店の歴史について
                調べることや若手社員と共に意見を出し合うこと様々な企画を考案し、実施。過去に利用していた
                紙袋のデザインを用いたグッズやお客様からメッセージをいただける本店のジオラマを作成するなど
                試行錯誤を重ねました。最も印象に残っている企画は、Bunkamuraオーチャードホールで開催した
                50周年記念コンサート。当社、予算や集客数の面で実施不可能かとも思われましたが、企画を実現させたい
                という強い想いで課題解決に取り組んだ結果、実現に成功。お客様も沢山足を運んでくださり、
                本店とお客様のつながりや自分自身の成長を実感することができました。
            </p>
        </section>
        <section class="question col-span-3 col-start-2 flex py-10 pr-5">
            <div class="left-content question-vertical">
                <!-- 虫眼鏡 -->
                <!-- レイアウト修正 -->
                <h3 class="text-2xl">
                    <span class="text-sm float-right mb-16">Question</span><br>
                    これからの<br>歩み
                </h3>
            </div>
            <div class="answer right-content ml-40 w-3/5">
                <h4 class="answer-title text-2xl font-bold my-3 tracking-widest"><span class="py-1 px-2 mr-2 font-thin bg-blue-900 text-white">A</span>沿線生活をイノベートする</h4>
                <p class="answer-text my-7 text-xs lg:text-md tracking-wider lg:leading-7 text-gray-800">
                    ここ数年で東急百貨店は東急沿線を中心に専門店や小型店を多数出店。東急沿線上で生活されている
                    方を含め、様々なお客様と関わる機会が増えました。コロナ渦や在宅勤務の影響で人々の暮らしが変化する中、
                    そうした展開力を活かし、少しでもお客様の暮らしや利便性の向上に努めていきたいです。
                    そして、「東急百貨店だからこそできること」を大切にし、仲間たちと百貨店の未来の在り方を模索していきたいと考えています。
                </p>
            </div>
        </section>

        <section class="column scol-span-3 col-start-2 py-10 pr-5">
            <!-- 文字重ね-->
            <div class="upper-content bg-indigo-900 text-white text-center w-1/5 py-2">
                <h5 class="font-thin text-3xl column-lead">Column</h5>
            </div>
            <div class="column-sublead medium-content text-center w-1/5 py-2">
                <p>「〇〇とともに歩む」</p>
            </div>
            <div class="bottom-content w-4/5 bg-white text-center py-5">
                <h6 class="column-title underline pb-3 pt-12 font-extralight text-4xl font-thin tracking-widest">東急線と共に歩む</h6>
                <p class="column-text p-10 w-3/4 mx-auto text-xs lg:text-md tracking-wider lg:leading-7 text-gray-800">
                    私自身、東急沿線上に住んでおり、東急百貨店が東急グループの一員として沿線に住む人々の生活に影響を
                    与えていることを日々実感しています。沿線生活者の暮らしをより豊かにすることを目標に、小型店や専門店、
                    デジタルツールなどを通じて、東急百貨店だからこそできる質の高いサービスを届けていきたいと思います。
                </p>
            </div>
        </section>
        <section class="col-span-3 col-start-2  py-10 pr-5">
            <div class="upper-content">
                <img src="../assets/people-akiyama3.png" alt="">
            </div>
            <div class="bottom-content mt-8">
                <ul class="flex mt-14 profile">
                    <li class="bg-indigo-900 leading-10 text-center text-white mb-auto py-1 px-4"><p class="font-thin text-3xl tracking-widest">Profile</p></li>
                    <li class="ml-16 people-name">
                        <p class="text-xl font-medium">秋山 さやか<br>
                            <small class="leading-7 text-gray-700 tracking-widest text-xs">Syaka Akiyama</small>
                        </p>
                    </li>
                    <li class="ml-12 text-sm people-info">
                        <p>営業推進部 営業企画部</p>
                        <p class="py-2">2005年 入社</p>
                        <p>文学部 心理学科 卒</p>
                    </li>
                </ul>
                <p class="w-7/12 font-thin mx-auto pt-20">← PrepPeople <span class="mx-2">|</span> Next People→</p>
            </div>
        </section>
        <footer class="col-span-4 bg-white pt-14 pb-10 text-center">
            <!-- 画像ちょっと横にずれてる？ -->
            <a href=""><img src="../assets/tokyu-logo.png" alt="東急百貨店" width="180" class="mx-auto bg-white"></a>
            <p class="text-sm md:text-base recruitment text-black mt-6 lg:my-6">RECRUITMENT</p>
            <p class="text-xs lg:text-sm mt-5 italic"><small>Copyright © TOKYU DEPARTMENT STORE CO.,LTD All Rights Reserved.</small></p>
        </footer>
    </div>
</template>

<script>
import Sidebar from '../components/Sidebar.vue';

export default {
  name: 'PeoplePage',
  components: {
    Sidebar
  },
}
</script>

<style>
  @import "../assets/style/style.css";
</style>
