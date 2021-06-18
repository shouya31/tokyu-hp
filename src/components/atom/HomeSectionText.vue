<template>
    <div class="vision-left-content w-5/12 m-10">
        <p class="section-text mt-16">{{ text }}</p>
        <p class="sentence-more text-center mt-12">Read more</p>
        <hr class="more-border">
    </div>
</template>

<script>
export default {
    props: ["text"]
}
</script>

<style>
.section-text{
    font-size: 14px;
    font-family: Noto sans-serif;
}
.sentence-more{
    font-size: 21px;
    font-family: Brandon Grotesque;
}
.more-border{
    width: 30%;
    margin: auto;
    height: 7px;
    border: 1px solid #333333;
}
</style>