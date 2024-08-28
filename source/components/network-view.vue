<template>
    <div class="network">
        <div class="network__filter">
            <div class="ui labeled input">
                <div class="ui label">
                    Filter
                </div>
                <input type="text" placeholder="Enter text to filter" :value="filterText" @input="onFilter">
            </div>

            <div class="ui labeled input" style="margin-left: 20px">
                <div class="ui label">
                    Search
                </div>
                <input type="text" placeholder="Enter text to search" :value="searchText" @input="onSearch" @focus="onSearch">
            </div>

            <div class="ui calendar" id="startDate" style="display: inline-block; margin-left: 20px">
                <div class="ui input left icon">
                    <i class="calendar icon"></i>
                    <input type="text" placeholder="Start date">
                </div>
            </div>

            <div class="ui calendar" id="endDate" style="display: inline-block; margin-left: 20px">
                <div class="ui input left icon">
                    <i class="calendar icon"></i>
                    <input type="text" placeholder="End date">
                </div>
            </div>
        </div>

        <div class="network__view"></div>
    </div>
</template>

<script>
    import { mapState } from "vuex";

    // libraries
    import _ from "lodash";
    import vis from "vis";


    export default {
        name: "network-view",

        data() {
            return {
                edges: new vis.DataSet([]),
                nodes: new vis.DataSet([]),

                originalNodes: new vis.DataSet([]),

                startDate: null,
                endDate: null,

                filterText: "",
                searchText: ""
            }
        },

        mounted() {
            this.initNetwork();

            $("#startDate").calendar({
                type: "date",
                endCalendar: $("#endDate"),
                onChange: (date) => {
                    this.startDate = date;
                    this.filterDate();
                }
            });

            $("#endDate").calendar({
                type: "date",
                startCalendar: $("#startDate"),
                onChange: (date) => {
                    this.endDate = date;
                    this.filterDate();
                }
            });
        },

        methods: {
            initNetwork() {
                const container = document.querySelector(".network__view");
                const data = this.createNetworkData();

                this.network = new vis.Network(container, data, this.networkConfig);
            },

            createNetworkData() {
                this.createNodes();
                this.createEdges();

                return { nodes: this.nodes, edges: this.edges };
            },

            createNodes() {
                this.persons.forEach((person, index) => {
                    const node = this.createNode(person, index);

                    this.nodes.add(node);
                    this.originalNodes.add(node);
                });
            },

            createEdges() {
                this.persons.forEach((person, index) => {
                    let relationsCount = Math.floor(Math.random() * 1) + 1;

                    for (let i = 0; i < relationsCount; i++) {
                        const toIndex = Math.floor(Math.random() * this.persons.length);

                        if (index !== toIndex) {
                            this.edges.add({
                                from: index,
                                to: toIndex
                            });
                        }
                    }
                });
            },

            getPersonFullName(person) {
                return `${person.name.first} ${person.name.last}`;
            },

            getAvatar(gender, id) {
                if (gender === "male") {
                    return `https://randomuser.me/api/portraits/med/men/${id}.jpg`;
                }

                if (gender === "female") {
                    return `https://randomuser.me/api/portraits/med/women/${id}.jpg`;
                }

                return `https://randomuser.me/api/portraits/med/women/${id}.jpg`;
            },

            createNode(person, id) {
                return {
                    id,
                    image: this.getAvatar(person.gender, id),
                    label: this.getPersonFullName(person)
                };
            },

            onFilter: _.debounce(function(e) {
                this.filterText = e.target.value.trim();

                this.restoreNodes();

                if (this.filterText === "")
                    return;

                for (let i = 0, length = this.nodes.length; i < length; i++) {
                    const node = this.nodes.get(i);

                    if (!_.includes(node.label.toLowerCase(), this.filterText.toLowerCase())) {
                        this.nodes.remove(i);
                    }
                }
            }, 200),

            onSearch: _.debounce(function(e) {
                this.searchText = e.target.value.trim();

                if (this.searchText === "") {
                    this.network.selectNodes([], false);
                    return;
                }

                const selectedNodesIds = this.nodes
                    .map((node) => {
                        if (_.includes(node.label.toLowerCase(), this.searchText.toLowerCase())) {
                            return node.id;
                        }
                    })
                    .filter((id) => {
                        return id;
                    });

                this.network.selectNodes(selectedNodesIds, true);
            }, 200),

            filterDate() {
                this.restoreNodes();

                if (!this.startDate && !this.endDate)
                    return;

                this.persons.forEach((person, index) => {
                    const node = this.nodes.get(index);
                    const birthDate = new Date(person.birthday);

                    if (this.startDate && birthDate < this.startDate) {
                        this.nodes.remove(index);
                        return;
                    }

                    if (this.endDate && birthDate > this.endDate) {
                        this.nodes.remove(index);
                        return;
                    }
                });
            },

            restoreNodes() {
                this.nodes.clear();
                this.copyAllNodes();
            },

            copyAllNodes() {
                for (let i = 0, length = this.originalNodes.length; i < length; i++) {
                    this.nodes.add(this.originalNodes.get(i));
                }
            }
        },

        watch: {
            networkConfig: {
                handler(value) {
                    this.network.setOptions(value);
                },
                deep: true
            }
        },

        computed: {
            ...mapState(["networkConfig", "persons"])
        },
    }
</script>

<style lang="less" scoped>
    // libraries
    @import "../../node_modules/vis/dist/vis.css";

    .network {
        width: 100%;
        height: 100%;

        border-radius: 5px;

        &__filter {
            height: 50px;
        }

        &__view {
            height: ~"calc(100% - 50px)";
            background-color: #eee;
        }
    }
</style>