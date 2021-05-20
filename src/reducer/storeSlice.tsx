import {createSlice} from "@reduxjs/toolkit";
// import {createNewList} from "../data/index"
//
// export const storeSlice = createSlice({
    // name: 'cardList',
    // initialState: {
    //     list: createNewList(),
    //     step: 0,
    //     level: null,
    //     timeDown: null
    // },
    // reducers: {
    //     itemTrue: (state, data) => {
    //         let item = state.list.find(item => +item.id === +data.payload)
    //         item.check = true
    //     },
    //     itemFalse: (state) => {
    //         state.list.forEach(item => {
    //             if (item.check === true) {
    //                 item.check = false
    //             }
    //         })
    //     },
    //     itemCheckState: (state) => {
    //         let items = state.list.filter(i => i.check === true)
    //         if (items[0].id === items[1].idCheck) {
    //             items[0].state = true;
    //             items[1].state = true;
    //         }
    //     },
    //     stepMove: (state) => {
    //         state.step = state.step + 1;
    //     },
    //     selectLevel: (state, data) => {
    //         state.level = data.payload
    //     },
    //     saveTime: (state, data) => {
    //         state.timeDown = data.payload
    //     },
    //     stepStart: (state) => {
    //         state.step = 0;
    //     },
    //     listRestart: (state) => {
    //         state.list = createNewList()
    //     }
    //
    // }
// });
// export const {
//     itemTrue,
//     itemFalse,
//     itemCheckState,
//     stepMove,
//     selectLevel,
//     saveTime,
//     stepStart,
//     listRestart
// } = cardSlice.actions;
// export default cardSlice.reducer;