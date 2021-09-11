<template>
    <div class="text-content">
        <p class="section-text">{{ text }}</p>
        <p class="mt-12">
            <a :href=src>
                <img src="../../assets/images/read-more.svg" alt="" class="mx-auto">
            </a>
        </p>
    </div>
</template>

<script>
export default {
    props: ["text", "src"]
}
</script>

<style>
.text-content {
    width: 230px;
}
.section-text{
    font-size: 14px;
    font-family: 'Noto Sans JP';
    line-height: 28px;
}

@media (max-width: 940px) {
  .text-content {
    width: 400px;
    margin: 20px auto 0;
  }
}

@media (max-width: 640px) {
  .text-content {
    width: 90%;
    margin: 20px auto 0;
  }
}

</style>