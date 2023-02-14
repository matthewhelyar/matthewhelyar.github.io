module.exports = {
    presets: [
        ['@babel/preset-env', {
            targets: {
                node: 'current',
                //these are the earliest browsers that fully supported es6.
                chrome: 74,
                firefox: 90,
                edge: 79,
                safari: '14.1',
                opera: 62
            }
        }],
        '@babel/preset-typescript',
    ],
};