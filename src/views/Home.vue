<template>
  <div>
    <div id="loading" style="display:none;">
      <div class="loader">
        <img
          src="@/assets/images/grow-together.png"
          srcset="
            @/assets/images/grow-together.png    1x,
            @/assets/images/grow-together@2x.png 2x
          "
          alt="Grow together 「共に歩む」"
          class="mx-auto"
        />
      </div>
      <img
        src="../assets/images/footer-logo.svg"
        alt="東急百貨店"
        width="180"
        class="mx-auto loader-logo"
      />
    </div>
    <div class="flex">
      <div class="side">
        <HomeSideBar />
      </div>
      <div class="main">
        <Fv />
        <Explain />
        <Vision />
        <People />
        <Project />
        <Entry />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import HomeSideBar from "../components/home/HomeSideBar.vue";
import Fv from "../components/home/fv.vue";
import Explain from "../components/home/explain.vue";
import Vision from "../components/home/vision.vue";
import People from "../components/home/people.vue";
import Project from "../components/home/project.vue";
import Entry from "../components/home/entry.vue";
import Footer from "../components/home/footer.vue";
import $ from "jquery";

export default {
  name: "Home",
  components: {
    HomeSideBar,
    Fv,
    Explain,
    Vision,
    People,
    Entry,
    Footer,
    Project,
  },

  mounted: function() {
    const keyName = "visited";
    const keyValue = true;
    let spinner = document.querySelector(".loader");

    if (!localStorage.getItem(keyName)) {
      document.getElementById("loading").removeAttribute("style");
      localStorage.setItem(keyName, keyValue);
      console.log("初めての訪問です");
    } else {
      console.log("訪問済みです");
    }

    spinner.addEventListener("animationend", function() {
      document.getElementById("loading").classList.add("loaded");
    });
  },

  function() {
    $(document).ready(function() {
      $("a[href^=#]").click(function() {
        var speed = 400; // ミリ秒

        var href = $(this).attr("href");

        var target = $(href == "#" || href == "" ? "html" : href);

        var position = target.offset().top;

        $($.support.safari ? "body" : "html").animate(
          { scrollTop: position },
          speed,
          "swing"
        );

        return false;
      });
    });
  },
};
</script>

<style>
@import "../assets/style/home.css";
@import url("https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200&display=swap");

#loading {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: white;
  transition: all 1s;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999;
}

.loader {
  background: #ffffff;
  width: 100vw;
  transition: 1.4s cubic-bezier(0.37, 0, 0.63, 1);
  transition-property: clip-path;
}

.loader img {
  animation: loading 1.5s ease-in-out;
  margin: auto;
}

.loader {
  color: #ffffff;
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  animation-delay: -0.16s;
}

.loader::before {
  left: -1.5em;
  animation-delay: -0.32s;
}

.loader::after {
  left: 1.5em;
}
.loader-logo {
  width: 150px;
}

@-webkit-keyframes loading {
  0% {
    -webkit-clip-path: inset(0 100% 0 0);
    clip-path: inset(0 100% 0 0);
  }

  100% {
    webkit-clip-path: inset(0);
    clip-path: inset(0);
  }
}

@keyframes loading {
  0% {
    -webkit-clip-path: inset(0 100% 0 0);
    clip-path: inset(0 100% 0 0);
  }

  100% {
    webkit-clip-path: inset(0);
    clip-path: inset(0);
  }
}

.loaded {
  opacity: 0;
  visibility: hidden;
}
</style>
