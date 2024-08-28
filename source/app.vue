<template>
    <div id="application" class="ui grid">
        <div class="four wide column">
            <div class="ui segment config-container">
                <NetworkConfig />
            </div>
        </div>

        <div class="twelve wide column">
            <NetworkView />
        </div>
    </div>
</template>

<script>
    // libraries
    import "jquery";
    import "../node_modules/semantic-ui-css/semantic.js";
    import "../node_modules/semantic-ui-calendar/dist/calendar.js";

    // components
    import NetworkConfig from "./components/network-config.vue";
    import NetworkView from "./components/network-view.vue";


    export default {
        name: "application",

        components: {
            NetworkConfig,
            NetworkView
        }
    }
</script>

<style lang="less" scoped>
    @import "../node_modules/semantic-ui-css/semantic.css";
    @import "../node_modules/semantic-ui-calendar/dist/calendar.css";

    #application {
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;

        .four {
            padding-right: 0;

            .config-container {
                height: 100%;
                overflow: auto;
            }
        }
    }
</style>