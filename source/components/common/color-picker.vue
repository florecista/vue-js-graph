<template>
    <div class="color-picker">
        <div class="ui right label" @click="toggleColorPicker">
            {{title}}
            <span class="ui empty circular label" :style="{backgroundColor: innerColor.hex || innerColor}"></span>
        </div>

        <sketch v-model="innerColor" v-if="colorPickerVisible" class="color-picker__sketch" />
    </div>
</template>

<script>
    // components
    import { Sketch } from "vue-color";


    export default {
        name: "color-picker",
        props: ["title", "color"],

        data() {
            return {
                innerColor: this.color,
                colorPickerVisible: false
            };
        },

        watch: {
            innerColor(value) {
                this.$emit("update:color", value.hex);
            }
        },

        methods: {
            toggleColorPicker() {
                this.colorPickerVisible = !this.colorPickerVisible;
            }
        },

        components: {
            Sketch
        }
    }
</script>

<style lang="less" scoped>
    .color-picker {
        display: inline-block;
        margin-top: 3px;

        .label {
            cursor: pointer;

            span {
                margin-left: 5px;
                vertical-align: bottom !important;
            }
        }

        &__sketch {
            position: fixed;
            margin-top: 10px;
            z-index: 1000;
        }
    }
</style>