const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            return {
                ...webpackConfig,
                entry: {
                    main: [env === 'development' &&
                        require.resolve('react-dev-utils/webpackHotDevClient'), paths.appIndexJs].filter(Boolean),
                    content: './src/chrome/content.ts',
                    background: './src/chrome/background.ts',
                    popup: './src/popup/popup.tsx',
                    options: './src/options/options.tsx',
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                },
            };
        },
        plugins: {
            add: [
                new HtmlWebpackPlugin({
                    filename: 'options.html',
                    template: 'public/options.html',
                    chunks: ['options']
                }),
                new HtmlWebpackPlugin({
                    filename: 'popup.html',
                    template: 'public/popup.html',
                    chunks: ['popup']
                })
            ]
        }
    }
};