const path = require('path');
/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  watchFolders: [
    // Watch root package node_modules to follow symlinks of yarn hoisted packages
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../shared'),
  ],
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
  resolver: {
    sourceExts: ['js', 'jsx', 'ts', 'tsx']
  }
};
