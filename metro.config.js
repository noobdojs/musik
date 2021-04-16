module.exports = {
  transformer: {
    assetPlugins: ['expo-asset/tools/hashAssetFiles'],
  },
  resolver: {
    extraNodeModules: {
      fs: require('node-libs-react-native').fs
    }
  }
};
