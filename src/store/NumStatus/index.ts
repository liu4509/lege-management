const store = {
  // 数据
  state: {
    num: 20,
  },
  // 方法
  actions: {
    add1(newState: { num: number }) {
      newState.num++;
    },
    add2(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val;
    },
    add3(newState: { num: number }, action: { type: string; val: number }) {
      newState.num += action.val;
    },
  },
  asynAction: {
    asynAdd(dis: Function) {
      setTimeout(() => {
        dis({ type: "add3", val: 100 });
      }, 1000);
    },
  },
  actionNames: {},
};

let actionNames = {};
for (let key in store.actions) {
  actionNames[key] = key;
}
store.actionNames = actionNames;

export default store;
