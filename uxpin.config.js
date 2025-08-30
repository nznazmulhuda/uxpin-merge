module.exports = {
  components: {
    categories: [
      {
        name: "INPUTS",
        include: ["src/components/DateRangePicker/*.{js,jsx}"],
      },
    ],
    wrapper: "src/components/UXPinWrapper/UXPinWrapper.js",
    webpackConfig: "webpack.config.js",
  },
  name: "React-UXPin-Merge",
  settings: {
    useUXPinProps: true,
    useConvertingToUXPinClassic: true,
  },
};
