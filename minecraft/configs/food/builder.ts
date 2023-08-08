/**
 * Food settings object config.
 */
enum FieldsConfig {
	hunger = 'hunger',
	saturation = 'saturation',
	meat = 'meat',
	alwaysEdible = 'alwaysEdible',
	fastToEat = 'fastToEat',
	effect = 'effect',
	removeEffect = 'removeEffect'
}

/**
 * FoodBuilder setters.
 */
enum KubeJsSetter {
	hunger = 'hunger',
	saturation = 'saturation',
	meat = 'meat',
	alwaysEdible = 'alwaysEdible',
	fastToEat = 'fastToEat',
	effect = 'effect',
	removeEffect = 'removeEffect'
}

const USED_SETTERS: object = {
	[KubeJsSetter.hunger]: [FieldsConfig.hunger],
	[KubeJsSetter.saturation]: [FieldsConfig.saturation],
	[KubeJsSetter.meat]: [FieldsConfig.meat],
	[KubeJsSetter.alwaysEdible]: [FieldsConfig.alwaysEdible],
	[KubeJsSetter.fastToEat]: [FieldsConfig.fastToEat],
	[KubeJsSetter.removeEffect]: [FieldsConfig.removeEffect]
};

export {
	FieldsConfig,
	KubeJsSetter,
	USED_SETTERS
};
