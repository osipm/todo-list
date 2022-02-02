export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideDialoge() {
      this.$emit("update:show", false);
    },
  },

  mounted() {},
};
