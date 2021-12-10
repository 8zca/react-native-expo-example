module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
			"react-native-reanimated/plugin",
			[
				require.resolve("babel-plugin-module-resolver"),
				{
					root: ".",
					alias: {
						"@/apis": "./apis",
						"@/components": "./components",
						"@/constants": "./constants",
						"@/hooks": "./hooks",
						"@/navigation": "./navigation",
						"@/screens": "./screens",
						"@/state": "./state",
						"@/assets": "./assets"
					},
				},
			],
			[
				"module:react-native-dotenv",
				{
					moduleName: "@env",
					path: ".env",
					blacklist: null,
					whitelist: null,
					safe: false,
					allowUndefined: true,
				},
			],
		],
  };
};
