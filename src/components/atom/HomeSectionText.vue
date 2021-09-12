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

