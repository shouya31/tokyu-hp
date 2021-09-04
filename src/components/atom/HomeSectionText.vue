<template>
    <div class="vision-left-content w-4/12 m-10">
        <p class="section-text pt-16">{{ text }}</p>
        <p class="sentence-more text-center mt-12">
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
.section-text{
    font-size: 14px;
    font-family: 'Noto Sans Japanese';
    line-height: 28px;
}
.sentence-more{
    font-family: Brandon Grotesque;
}

</style>