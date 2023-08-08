/**
 * Item config properties.
 */
enum FieldsConfig {
	tier = 'tier',
	attackDamageBaseline = 'attackDamageBaseline',
	speedBaseline = 'speedBaseline',
	attackDamageBonus = 'attackDamageBonu',
	speed = 'speed',
	type = 'type'
}


/**
 * KubeJs available item setters.
 */
enum KubeJsSetter {
	tier = 'tier',
	attackDamageBaseline = 'attackDamageBaseline',
	speedBaseline = 'speedBaseline',
	attackDamageBonus = 'attackDamageBonu',
	speed = 'speed'
}

const USED_SETTERS: object = {
	[KubeJsSetter.tier]: [FieldsConfig.tier],
	[KubeJsSetter.attackDamageBaseline]: [FieldsConfig.attackDamageBaseline],
	[KubeJsSetter.attackDamageBonus]: [FieldsConfig.attackDamageBonus],
	[KubeJsSetter.speedBaseline]: [FieldsConfig.speedBaseline],
	[KubeJsSetter.speed]: [FieldsConfig.speed]
};

export {
	FieldsConfig,
	KubeJsSetter,
    USED_SETTERS	
};
