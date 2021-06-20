<template>
    <div class="vision-left-content w-5/12 m-10">
        <p class="section-text mt-16">{{ text }}</p>
        <p class="sentence-more text-center mt-12">
            <img src="../../assets/images/read-more.png" alt="" class="mx-auto">
        </p>
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
    font-family: Brandon Grotesque;
}

</style>