<template>
    <div class="config">
        <div class="ui two item pointing menu">
            <a class="item" :class="{active: isSectionActive('main')}" @click="setActiveSection('main')">Main</a>
            <a class="item" :class="{active: isSectionActive('secondary')}" @click="setActiveSection('secondary')">Secondary</a>
        </div>

        <div class="config-section main" v-if="isSectionActive('main')">
            <NodesSection :config="networkConfig.nodes"></NodesSection>
            <EdgesSection :config="networkConfig.edges"></EdgesSection>
            <LayoutSection :config="networkConfig.layout"></LayoutSection>
        </div>

        <div class="config-section secondary" v-if="isSectionActive('secondary')">
            <InteractionSection :config="networkConfig.interaction"></InteractionSection>
            <ManipulationSection :config="networkConfig.manipulation"></ManipulationSection>
            <PhysicsSection :config="networkConfig.physics"></PhysicsSection>
        </div>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    // components
    import Range from "./common/range.vue";
    import Check from "./common/check.vue";

    // sections
    import NodesSection from "./sections/nodes.vue";
    import EdgesSection from "./sections/edges.vue";
    import LayoutSection from "./sections/layout.vue";
    import InteractionSection from "./sections/interaction.vue";
    import ManipulationSection from "./sections/manipulation.vue";
    import PhysicsSection from "./sections/physics.vue";


    export default {
        name: "network-config",

        data() {
            return {
                section: "main"
            }
        },

        methods: {
            isSectionActive(section) {
                return this.section === section;
            },

            setActiveSection(section) {
                this.section = section;
            }
        },

        components: {
            Range,
            Check,

            NodesSection,
            EdgesSection,
            LayoutSection,
            InteractionSection,
            ManipulationSection,
            PhysicsSection
        },

        computed: {
            ...mapState(["networkConfig"])
        }
    }
</script>

<style lang="less" scoped>
    .config {
        height: 100%;

        .label {
            text-transform: uppercase;
        }

        &-section {
            padding-top: 10px;
        }
    }
</style>