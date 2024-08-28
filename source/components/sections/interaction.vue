<template>
    <div class="config-section">
        <h3 class="ui header">Interaction</h3>
        <div class="ui divider"></div>

        <div class="ui segment">
            <span class="ui top attached label">Main</span>

            <Check title="Drag nodes" :checked.sync="config.dragNodes"></Check>
            <Check title="Drag view" :checked.sync="config.dragView"></Check>
            <Check title="Hide edges on drag" :checked.sync="config.hideEdgesOnDrag"></Check>
            <Check title="Hide nodes on drag" :checked.sync="config.hideNodesOnDrag"></Check>
            <Check title="Hover" :checked.sync="config.hover"></Check>
            <Check title="Multiselect" :checked.sync="config.multiselect"></Check>
            <Check title="Selectable" :checked.sync="config.selectable"></Check>
            <Check title="Select connected edgges" :checked.sync="config.selectConnectedEdges"></Check>
            <Check title="Hover connected edgges" :checked.sync="config.hoverConnectedEdges"></Check>
            <Check title="Navigation buttons" :checked.sync="config.navigationButtons"></Check>
            <Check title="Keyboard" :checked.sync="config.keyboard"></Check>
            <Check title="Zoom view" :checked.sync="config.zoomView"></Check>

            <Range title="Tooltip delay" :start.sync="config.tooltipDelay" :min="0" :max="10000" :step="25"></Range>
        </div>
    </div>
</template>

<script>
    // components
    import Check from "../common/check.vue";
    import Range from "../common/range.vue";


    export default {
        name: "interaction-section",
        props: ["config"],

        components: {
            Check,
            Range
        }
    }
</script>