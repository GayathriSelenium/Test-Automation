const path = require('path')
const glob = require('glob-fs')({ gitignore: true })
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const Dotenv = require('dotenv-webpack')
const WebpackMonitor = require('webpack-monitor');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


/**
 * Server side webpack configuration. Used to build packages for Lambda functions where each
 * directory will create a new output file based on the name of the directory
 */

const serverConfig = env => {
    return {
        name: 'api',
        target: 'node',
        mode: env && env == 'production' ? 'production' : 'development',
        entry: glob.readdirSync('./src/api/**/index.js').reduce(
            (acc, curr) =>
                Object.assign(acc, {
                    [path.basename(path.dirname(curr))]: path.resolve(curr),
                }),
            {}
        ),
        externals: ['aws-sdk', 'pg', 'sqlite3', 'pg-hstore'],
        output: {
            filename: '[name]/app.js',
            path: path.resolve(__dirname, 'lib/api'),
            library: 'app',
            libraryTarget: 'commonjs',
        },
        resolve: {
            extensions: ['.js'],
        },
        module: {
            rules: [
                {
                    test: /\.m?[jt]s.?$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            plugins: [
                                '@babel/plugin-proposal-object-rest-spread',
                                '@babel/plugin-transform-template-literals',
                            ],
                            presets: [
                                [
                                    '@babel/preset-env',
                                    {
                                        targets: { node: '8.10' },
                                    },
                                ],
                            ],
                        },
                    },
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: 'lib/api',
            }),
        ],
    }
}

/**
 * Client side webpack configuration. Used to build a static set of files that can be
 * served up by a AWS Cloudfront distribution.
 */

const clientConfig = env => {
    return {
        name: 'web',
        target: 'web',
        mode: env && env == 'production' ? 'production' : 'development',
        devtool: env && env == 'production' ? 'source-map' : 'eval-source-map',
        entry: {
            app: ['@babel/polyfill', './src/index.js'],
        },
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'lib'),
            publicPath: '/',
        },
        optimization: {
            minimizer: [new UglifyJsPlugin({uglifyOptions: {
                output: {
                  ascii_only: true
                }
              }})],
            splitChunks: {
              chunks: 'all',
            },
          },
        devServer: {
            historyApiFallback: {
                index: '/',
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: 'babel-loader',
                    exclude: '/node_modules/',
                },
                {
                    test: /\.css$/i,
                    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
                }
            ],
        },
        resolve: {
            extensions: ['*', '.js', '.jsx'],
        },
        plugins: [
            new Dotenv({
                path: `./.env${
                    env && env.variables ? '.' + env.variables : ''
                }`,
            }),
            new HtmlWebpackPlugin({ template: './src/public/index.html' }),
            new CleanWebpackPlugin({
                cleanOnceBeforeBuildPatterns: ['lib', '!lib/api'],
            }),
            // new WebpackMonitor({
            //     capture: true, // -> default 'true'
            //     target: '../monitor/stats.json', // default -> '../monitor/stats.json'
            //     launch: true, // -> default 'false'
            //     port: 3030,  // default -> 8081
            //   }),
        ],
        profile: true,
    }
}

module.exports = [clientConfig, serverConfig]
