// libraries
import Vuex from "vuex";

// mutations
import mutations from "./mutations";

// actions
import actions from "./actions";

// network configuration
import {networkConfig} from "../config/network-config.js";

// services
import {persons} from "../services/persons";


export default function createStore() {
    return new Vuex.Store({
        state: {
            networkConfig,
            persons
        },

        mutations,
        actions
    });
}