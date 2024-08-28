<template>
    <div class="config-section">
        <h3 class="ui header">Nodes</h3>
        <div class="ui divider"></div>

        <div class="ui segment">
            <span class="ui top attached label">Border</span>

            <Range title="Border width" :start.sync="config.borderWidth" :min="0" :max="30" />
            <Range title="Border with selected" :start.sync="config.borderWidthSelected" :min="0" :max="30" />
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Color</span>

            <ColorPicker title="Border" :color.sync="config.color.border"></ColorPicker>
            <ColorPicker title="Background" :color.sync="config.color.background"></ColorPicker>

            <div class="ui divider"></div>

            <ColorPicker title="Highlight border" :color.sync="config.color.highlight.border"></ColorPicker>
            <ColorPicker title="Highlight background" :color.sync="config.color.highlight.background"></ColorPicker>

            <div class="ui divider"></div>

            <ColorPicker title="Hover border" :color.sync="config.color.hover.border"></ColorPicker>
            <ColorPicker title="Hover background" :color.sync="config.color.hover.background"></ColorPicker>
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Font</span>

            <ColorPicker title="Color" :color.sync="config.font.color"></ColorPicker>
            <ColorPicker title="Background" :color.sync="config.font.background"></ColorPicker>
            <ColorPicker title="Stroke color" :color.sync="config.font.strokeColor"></ColorPicker>

            <Range title="Size" :start.sync="config.font.size" :min="0" :max="100" />
            <Range title="Stroke width" :start.sync="config.font.strokeWidth" :min="0" :max="100" />

            <Dropdown title="Face" :values="faces" :selected.sync="config.font.face"></Dropdown>
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Fixed</span>

            <Check title="Fixed by X" :checked.sync="config.fixed.x"></Check>
            <Check title="Fixed by Y" :checked.sync="config.fixed.y"></Check>
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Misc</span>

            <Check title="Hidden" :checked.sync="config.hidden"></Check>
            <Check title="Label highlight bold" :checked.sync="config.labelHighlightBold"></Check>
            <Check title="Physics" :checked.sync="config.physics"></Check>

            <Range title="Size" :start.sync="config.size" :min="0" :max="200" />

            <Dropdown title="Shape" :values="shapes" :selected.sync="config.shape"></Dropdown>
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Shape properties</span>

            <Check title="Border dashes" :checked.sync="config.shapeProperties.borderDashes"></Check>
            <Check title="Interpolation" :checked.sync="config.shapeProperties.interpolation"></Check>
            <Check title="Use image size" :checked.sync="config.shapeProperties.useImageSize"></Check>
            <Range title="Border radius" :start.sync="config.shapeProperties.borderRadius" :min="0" :max="20" />
        </div>

        <div class="ui segment">
            <span class="ui top attached label">Scaling</span>

            <Check title="Label" :checked.sync="config.scaling.label.enabled"></Check>
            <Range title="Min" :start.sync="config.scaling.min" :min="0" :max="200" />
            <Range title="Max" :start.sync="config.scaling.max" :min="0" :max="200" />
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
        name: "nodes-section",
        props: ["config"],

        data() {
            return {
                shapes: ["ellipse", "box", "circle", "database", "diamond", "dot", "square", "star", "text", "triangle", "triangleDown", "icon", "image", "circularImage"],
                faces: ["arial", "verdana", "tahoma"]
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