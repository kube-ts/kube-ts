import { applyPropertiesArray, applyProperty } from '../Utils';
import { RegistryItemEvent } from '../Types';

import { ItemConfig, ItemCreationResult } from './types';
import { USED_SETTERS, KubeJsSetter } from '../configs/item';

/**
 * Create Item.
 * @param {RegistryItemEvent} event - Startup registry.item event instance.
 * @param {ItemConfig} cfg - Item configuration.
 * @returns {ItemCreationResult}
 */
function create(event: RegistryItemEvent, cfg: ItemConfig): ItemCreationResult {
	const ITEM: ItemCreationResult = event.create(cfg.name.system, cfg.type || 'basic');

	if (cfg.name.display) {
		ITEM.displayName(cfg.name.display);
	}

    if (Array.isArray(cfg.tooltip)) {
        console.log({m: 111, t: cfg.tooltip});
        cfg.tooltip.forEach((line) => {
            console.log({m: 222, t: line + ' set!'});
            applyProperty({
                item: ITEM,
                value: line,
                setter: KubeJsSetter.tooltip
            });
        });
    }

	applyPropertiesArray({
		item: ITEM,
		cfg: cfg,
		setters: USED_SETTERS 
	});

	return ITEM;
}

export {
	create
};
