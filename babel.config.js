module.exports = {
    ignore: [
        /core-js/,
        /@babel\/runtime/
    ],
    plugins: [
        [
            '@babel/plugin-transform-runtime',
            {
                corejs: 3
            }
        ]
    ]
};
