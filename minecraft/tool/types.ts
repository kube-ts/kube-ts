import { TConfig as ItemConfig, TCreationResult as ItemCreationResult } from '../item.lib';
import { FieldsConfig, KubeJsSetter } from '../configs/tool';

enum Tier {
	wooden = 'wood',
	stone = 'stone',
	iron = 'iron',
	golden = 'gold',
	diamond = 'diamond',
	netherite = 'netherite'
}

enum Type {
	sword = 'sword',
	pickaxe = 'pickaxe',
	axe = 'axe',
	shovel = 'shovel',
	hoe = 'hoe'
}

interface ToolConfig extends ItemConfig {
	[FieldsConfig.tier]: Tier;
	[FieldsConfig.type]: Type;
	[FieldsConfig.attackDamageBaseline]?: number;
	[FieldsConfig.attackDamageBonus]?: number;
	[FieldsConfig.speedBaseline]?: number;
	[FieldsConfig.speed]?: number;
}

interface ToolCreationResult extends ItemCreationResult {
	[KubeJsSetter.tier](t: Tier): ToolCreationResult;
	[KubeJsSetter.speed](n?: number): ToolCreationResult;
	unstackable(): ToolCreationResult;
}

export {
	Tier,
	Type,
	ToolConfig,
	ToolCreationResult
}
