module.exports = (targets) => {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
      routes.push({
        name: "MyGreetingRoute",
        pattern: "/greeting",
        path: require.resolve("../components/GreetingPage/greetingPage.js"),
      });
      return routes;
    });
  };
  