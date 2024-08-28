<template>
    <div class="config-section">
        <h3 class="ui header">Physics</h3>
        <div class="ui divider"></div>

        <div class="ui segment">
            <span class="ui top attached label">Main</span>

            <Check title="Enabled" :checked.sync="config.enabled"></Check>
            <Range title="Max velocity" :start.sync="config.maxVelocity" :min="0" :max="150"></Range>
            <Range title="Min velocity" :start.sync="config.minVelocity" :min="0.01" :max="1" step="0.01"></Range>
            <Range title="Time step" :start.sync="config.timestep" :min="0.01" :max="1" :step="0.01"></Range>

            <Dropdown title="Solver" :values="solvers" :selected.sync="config.solver"></Dropdown>
        </div>
    </div>
</template>

<script>
    // components
    import Check from "../common/check.vue";
    import Range from "../common/range.vue";
    import Dropdown from "../common/dropdown.vue";


    export default {
        name: "physics-section",
        props: ["config"],

        data() {
            return {
                solvers: ["barnesHut", "forceAtlas2Based", "repulsion", "hierarchicalRepulsion"]
            };
        },

        components: {
            Check,
            Range,
            Dropdown
        }
    }
</script>