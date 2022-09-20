/ eslint-disable /
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */

function localIntercept(targets) {
    targets.of('@magento/pwa-buildpack').transformUpward.tap(def => {
        def.staticFromRoot.inline.body.file.template.inline =
            './ania-static-assets/{{ filename }}';
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'Home Page',
            pattern: '/',
            exact: true,
            path: require.resolve('./src/components/HomePage/HomePage.js')
        });
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'About Page',
            pattern: '/about',
            exact: true,
            path: require.resolve('./src/Pages/About')
        });
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'Account Page',
            pattern: '/account/:source?',
            exact: true,
            path: require.resolve('./src/Pages/Account')
        });
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'User Information',
            pattern: '/account/my-account/:source?',
            exact: true,
            path: require.resolve('./src/Pages/Account')
        });
    });

    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'Manage Order',
            pattern: '/account/order-manage/:source?',
            exact: true,
            path: require.resolve('./src/Pages/Account')
        });
    });

    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'Notifications',
            pattern: '/account/notification/:source?',
            exact: true,
            path: require.resolve('./src/Pages/Account')
        });
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'test Page',
            pattern: '/test',
            exact: true,
            path: require.resolve('./src/Pages/StyleGuide')
        });
    });
}

module.exports = localIntercept;