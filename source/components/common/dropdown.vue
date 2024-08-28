<template>
    <div class="dropdown-config ui form" :id.once="componentId">
        <div class="field">
            <label>{{title}}</label>
            <div class="ui fluid selection dropdown">
                <input type="hidden">
                <i class="dropdown icon"></i>

                <div class="default text">{{title}}</div>

                <div class="menu">
                    <div class="item" v-for="value in values" :data-value="value">{{value}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    // libraries
    import shortid from "shortid";


    export default {
        name: "dropdown",
        props: ["title", "values", "selected"],

        data() {
            return {
                id: shortid.generate()
            }
        },

        mounted() {
            $(this.dropdownSelector).dropdown({
                onChange: value => this.$emit("update:selected", value)
            });
            $(this.dropdownSelector).dropdown("set selected", this.selected);
        },

        computed: {
            componentId() {
                return `dropdown-${this.id}`;
            },

            dropdownSelector() {
                return "#" + this.componentId + " .dropdown";
            }
        }
    }
</script>

<style lang="less" scoped>
    .dropdown-config {
        margin-top: 8px;
    }
</style>