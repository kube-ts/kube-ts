enum FieldsConfig {
	food = 'food'
}

enum KubeJsSetter {
	food = 'food'
}

const USED_SETTERS: object = {
	[KubeJsSetter.food]: [FieldsConfig.food]
};

export {
	FieldsConfig,
	KubeJsSetter,
    USED_SETTERS	
};
