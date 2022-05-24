<template>
  <div>
    <!--给子组件添加ref 就可以在父组件里调子组件的方法-->
    <full-calendar
      ref="calender"
      :events="fcEvents"
      @changeMonth="changeMonth"
      locale="en"
    ></full-calendar>
    <button @click="buttonClick">Go to Dec 2021</button>
  </div>
</template>
<script>
var demoEvents = [
  {
    title: "Sunny Out of Office",
    start: "2016-08-25",
    end: "2022-07-27",
  },
];

export default {
  name: "Calender",
  data() {
    return {
      fcEvents: demoEvents,
    };
  },
  components: {
    // 'full-calendar': require('vue-fullcalendar')
  },
  mounted() {
    // 注意 mounted 不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 vm.$nextTick 替换掉 mounted
    this.$nextTick(() => {
      console.log("--》render");
      // this.$refs.calender.emitChangeMonth('2021-11-19', '2021-12-30', '2021-11-01', new Date("December 13, 2021 11:13:00"))
    });
  },
  methods: {
    buttonClick() {
      // 调用child组件方法
      this.$refs.calender.emitChangeMonth(
        "2021-11-19", // start
        "2021-12-30", // end
        "2021-11-01", // currentStart
        new Date("2021-12-30") // currentDate
      );
    },
    changeMonth(start, end, current) {
      console.log("==>start:", start, "==>end:", end, "==>current:", current);
    },
  },
};
</script>
