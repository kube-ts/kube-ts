/**
 * Item config properties.
 */
enum FieldsConfig {
	tooltip = 'tooltip',
	texture = 'texture',
	glow = 'isGlowing',
	maxStackSize = 'stackSize',
	rarity = 'rarity',
	maxDamage = 'maxDamage',
	burnTime = 'burnTime',
	containerItem = 'containerItem',
	group = 'group',
	color = 'color',
	textureJson = 'textureJson',
	modelJson = 'modelJson',
	parentModel = 'parentModel',
	barColor = 'barColor',
	barWidth = 'barWidth',
	fireResistant = 'fireResistant',
	modifyAttribute = 'modifyAttribute',
	useAnimation = 'useAnimation',
	useDuration = 'useDuration',
	use = 'use',
	finishUsing = 'finishUsing',
	releaseUsing = 'releaseUsing',
	subtypes = 'subtypes'
}


/**
 * KubeJs available item setters.
 */
enum KubeJsSetter {
	texture = 'texture',
	tooltip = 'tooltip',
	glow = 'glow',
	maxStackSize = 'maxStackSize',
	rarity = 'rarity',
	maxDamage = 'maxDamage',
	burnTime = 'burnTime',
	containerItem = 'containerItem',
	group = 'group',
	color = 'color',
	textureJson = 'textureJson',
	modelJson = 'modelJson',
	parentModel = 'parentModel',
	barColor = 'barColor',
	barWidth = 'barWidth',
	fireResistant = 'fireResistant',
	modifyAttribute = 'modifyAttribute',
	useAnimation = 'useAnimation',
	useDuration = 'useDuration',
	use = 'use',
	finishUsing = 'finishUsing',
	releaseUsing = 'releaseUsing',
	subtypes = 'subtypes'
}

const USED_SETTERS: object = {
	[KubeJsSetter.rarity]: [FieldsConfig.rarity],
	[KubeJsSetter.glow]: [FieldsConfig.glow],
	[KubeJsSetter.maxStackSize]: [FieldsConfig.maxStackSize],
	[KubeJsSetter.texture]: [FieldsConfig.texture],
	[KubeJsSetter.maxDamage]: [FieldsConfig.maxDamage],
	[KubeJsSetter.burnTime]: [FieldsConfig.burnTime],
	[KubeJsSetter.containerItem]: [FieldsConfig.containerItem],
	[KubeJsSetter.group]: [FieldsConfig.group],
	[KubeJsSetter.color]: [FieldsConfig.color],
	[KubeJsSetter.textureJson]: [FieldsConfig.textureJson],
	[KubeJsSetter.modelJson]: [FieldsConfig.modelJson],
	[KubeJsSetter.parentModel]: [FieldsConfig.parentModel],
	[KubeJsSetter.barColor]: [FieldsConfig.barColor],
	[KubeJsSetter.barWidth]: [FieldsConfig.barWidth],
	[KubeJsSetter.fireResistant]: [FieldsConfig.fireResistant],
	[KubeJsSetter.modifyAttribute]: [FieldsConfig.modifyAttribute],
	[KubeJsSetter.useAnimation]: [FieldsConfig.useAnimation],
	[KubeJsSetter.useDuration]: [FieldsConfig.useDuration],
	[KubeJsSetter.use]: [FieldsConfig.use],
	[KubeJsSetter.finishUsing]: [FieldsConfig.finishUsing],
	[KubeJsSetter.releaseUsing]: [FieldsConfig.releaseUsing],
	[KubeJsSetter.subtypes]: [FieldsConfig.subtypes]
};


export {
	FieldsConfig,
	KubeJsSetter,
	USED_SETTERS
};
