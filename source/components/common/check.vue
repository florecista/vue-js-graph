<template>
    <div class="check-config" :id.once="componentId">
        <div class="ui checkbox">
            <input type="checkbox" v-model="isChecked" :id.once="componentInputId">
            <label :for.once="componentInputId">{{title}}</label>
        </div>
    </div>
</template>

<script>
    // libraries
    import shortid from "shortid";


    export default {
        name: "check",
        props: ["title", "checked"],

        data() {
            return {
                isChecked: this.checked,
                id: shortid.generate()
            }
        },

        watch: {
            isChecked(value) {
                this.$emit("update:checked", value);
            }
        },

        computed: {
            componentId() {
                return `check-${this.id}`;
            },

            componentInputId() {
                return `check-input-${this.id}`;
            }
        }
    }
</script>

<style lang="less" scope>
    .check-config {
        margin-top: 5px;

        .checkbox {
            padding-top: 5px;

            label {
                cursor: pointer;
            }
        }
    }
</style>