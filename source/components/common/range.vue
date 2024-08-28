<template>
    <div class="range-config" :id.once="componentId">
        <div class="ui label">
            {{title}}
            <div class="detail">{{formattedValue}}</div>
        </div>

        <div class="ui blue range"></div>
    </div>
</template>

<script>
    // components
    import "../../../node_modules/semantic-ui-range/range.js";

    // libraries
    import shortid from "shortid";
    import { debounce } from "lodash";


    export default {
        name: "range",
        props: ["title", "start", "min", "max", "step"],

        data() {
            return {
                id: shortid.generate(),
                value: this.start
            };
        },

        mounted() {
            const {min, max, start, step} = this;

            $(this.rangeSelector).range({
                min, max, start, step,

                onChange: this.updateValue
            });
        },

        methods: {
            updateValue(value) {
                this.value = value;
                this.emit();
            },

            emit: debounce(function() {
                this.$emit("update:start", this.value);
            }, 100)
        },

        computed: {
            formattedValue() {
                if (this.step < 1)
                    return this.value.toFixed(2);

                return this.value;
            },

            componentId() {
                return `range-${this.id}`;
            },

            rangeSelector() {
                return "#" + this.componentId + " .range";
            }
        }
    }
</script>

<style lang="less" scoped>
    // components
    @import "../../../node_modules/semantic-ui-range/range.css";

    .range-config {
        margin-top: 10px;

        .label {
            text-transform: uppercase;
        }

        .range {
            margin-top: 10px;
        }
    }
</style>