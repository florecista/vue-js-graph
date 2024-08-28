<template>
    <div class="config-section">
        <h3 class="ui header">Manipulation</h3>
        <div class="ui divider"></div>

        <div class="ui segment">
            <span class="ui top attached label">Main</span>

            <Check title="Enabled" :checked.sync="config.enabled"></Check>
            <Check title="Initially active" :checked.sync="config.initiallyActive"></Check>
        </div>
    </div>
</template>

<script>
    // components
    import Check from "../common/check.vue";


    export default {
        name: "manipulation-section",
        props: ["config"],

        components: {
            Check
        }
    }
</script>