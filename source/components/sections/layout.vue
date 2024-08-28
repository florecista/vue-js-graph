<template>
    <div class="config-section">
        <h3 class="ui header">Layout</h3>
        <div class="ui divider"></div>

        <Check title="Hierarchical" :checked.sync="config.hierarchical"></Check>
    </div>
</template>

<script>
    // components
    import Check from "../common/check.vue";


    export default {
        name: "layout-section",
        props: ["config"],

        components: {
            Check,
        }
    }
</script>