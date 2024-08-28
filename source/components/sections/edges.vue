<template>
    <div class="config-section">
        <h3 class="ui header">Edges</h3>
        <div class="ui divider"></div>

        <div class="ui segment">
            <span class="ui top attached label">Arrows</span>

            <Check title="To" :checked.sync="config.arrows.to"></Check>
            <Check title="Middle" :checked.sync="config.arrows.middle"></Check>
            <Check title="From" :checked.sync="config.arrows.from"></Check>
            <Check title="Arrow strikethrough" :checked.sync="config.arrowStrikethrough"></Check>
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Color</span>

            <ColorPicker title="Color" :color.sync="config.color.color"></ColorPicker>
            <ColorPicker title="Highlight" :color.sync="config.color.highlight"></ColorPicker>
            <ColorPicker title="Hover" :color.sync="config.color.hover"></ColorPicker>
            <Range title="Opacity" :start.sync="config.color.opacity" :min="0" :max="1" step="0.05" />
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Misc</span>

            <Check title="Dashes" :checked.sync="config.dashes"></Check>
            <Check title="Hidden" :checked.sync="config.hidden"></Check>
            <Check title="Label highlight bold" :checked.sync="config.labelHighlightBold"></Check>
            <Check title="Physics" :checked.sync="config.physics"></Check>
            <Check title="Shadow" :checked.sync="config.shadow"></Check>
            <Check title="Smooth" :checked.sync="config.smooth"></Check>

            <Range title="Hover width" :start.sync="config.hoverWidth" :min="0" :max="5" step="0.1" />
            <Range title="Width" :start.sync="config.width" :min="0" :max="30" />
            <Range title="Selection width" :start.sync="config.selectionWidth" :min="0" :max="5" step="0.1" />
            <Range title="Self reference size" :start.sync="config.selfReferenceSize" :min="0" :max="200" />
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Scaling</span>

            <Check title="Label" :checked.sync="config.scaling.label.enabled"></Check>
            <Range title="Min" :start.sync="config.scaling.min" :min="0" :max="100" />
            <Range title="Max" :start.sync="config.scaling.max" :min="0" :max="100" />
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Font</span>

            <ColorPicker title="Color" :color.sync="config.font.color"></ColorPicker>
            <ColorPicker title="Background" :color.sync="config.font.background"></ColorPicker>
            <ColorPicker title="Stroke color" :color.sync="config.font.strokeColor"></ColorPicker>

            <Range title="Size" :start.sync="config.font.size" :min="0" :max="100" />
            <Range title="Stroke width" :start.sync="config.font.strokeWidth" :min="0" :max="50" />

            <Dropdown title="Face" :values="faces" :selected.sync="config.font.face"></Dropdown>
            <Dropdown title="Align" :values="aligns" :selected.sync="config.font.align"></Dropdown>
        </div>
    </div>
</template>

<script>
    // components
    import Range from "../common/range.vue";
    import Check from "../common/check.vue";
    import Dropdown from "../common/dropdown.vue";
    import ColorPicker from "../common/color-picker.vue";


    export default {
        name: "edges-section",
        props: ["config"],

        data() {
            return {
                faces: ["arial", "verdana", "tahoma"],
                aligns: ["horizontal", "top", "middle", "bottom"]
            };
        },

        components: {
            Range,
            Check,
            Dropdown,
            ColorPicker
        }
    }
</script>