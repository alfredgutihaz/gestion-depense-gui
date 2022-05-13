import { RootState, UsageState } from "@/store/model";
import { Module } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import state from "./state";

export default (api: any): Module<UsageState, RootState> => ({
    actions: actions(api),
    getters,
    mutations,
    namespaced: true,
    state,
})