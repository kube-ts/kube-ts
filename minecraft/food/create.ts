import { create as createItem } from '../item.lib';
import { applyPropertiesArray, applyProperty } from '../Utils';
import { RegistryItemEvent } from '../Types';
import { FoodConfig, FoodCreationResult, FoodBuilder } from './types';
import { USED_SETTERS } from '../configs/food/builder';
import { FieldsConfig as EConfigFields } from '../configs/food/effect';

/**
 * Create Food.
 * @param {RegistryItemEvent} event - Startup registry.item event instance.
 * @param {FoodConfig} cfg - Item configuration.
 * @returns {FoodCreationResult}
 */
function create(event: RegistryItemEvent, cfg: FoodConfig): FoodCreationResult {
	const FOOD: FoodCreationResult = createItem(event, cfg) as FoodCreationResult;

	applyProperty({
		item: FOOD,
		setter: 'food',
		value: (f: FoodBuilder) => {
			if (cfg.food.effect) {
				const EFFECT_CFG = cfg.food.effect;
				f.effect(
					EFFECT_CFG[EConfigFields.mobEffectId],
					EFFECT_CFG[EConfigFields.duration] || 0,
					EFFECT_CFG[EConfigFields.amplifier] || 0,
					EFFECT_CFG[EConfigFields.probability] || 1);				
			}

			applyPropertiesArray({
				item: f,
				cfg: cfg.food,
				setters: USED_SETTERS
			});
		}
	});

	return FOOD;
}

export {
	create
};
