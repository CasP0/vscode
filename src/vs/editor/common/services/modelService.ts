/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { Event } from 'vs/base/common/event';
import { URI } from 'vs/base/common/uri';
import { ITextBufferFactory, ITextModel, ITextModelCreationOptions } from 'vs/editor/common/model';
import { ILanguageSelection } from 'vs/editor/common/services/modeService';
import { createDecorator } from 'vs/platform/instantiation/common/instantiation';
import { DocumentSemanticTokensProvider, DocumentRangeSemanticTokensProvider } from 'vs/editor/common/modes';
import { SemanticTokensProviderStyling } from 'vs/editor/common/services/semanticTokensProviderStyling';

export const IModelService = createDecorator<IModelService>('modelService');

export type DocumentTokensProvider = DocumentSemanticTokensProvider | DocumentRangeSemanticTokensProvider;

export interface IModelService {
	readonly _serviceBrand: undefined;

	createModel(value: string | ITextBufferFactory, languageSelection: ILanguageSelection | null, resource?: URI, isForSimpleWidget?: boolean): ITextModel;

	updateModel(model: ITextModel, value: string | ITextBufferFactory): void;

	setMode(model: ITextModel, languageSelection: ILanguageSelection): void;

	destroyModel(resource: URI): void;

	getModels(): ITextModel[];

	getCreationOptions(language: string, resource: URI, isForSimpleWidget: boolean): ITextModelCreationOptions;

	getModel(resource: URI): ITextModel | null;

	getSemanticTokensProviderStyling(provider: DocumentTokensProvider): SemanticTokensProviderStyling;

	onModelAdded: Event<ITextModel>;

	onModelRemoved: Event<ITextModel>;

	onModelModeChanged: Event<{ model: ITextModel; oldModeId: string; }>;

	mergeBranchesOnSameLane(branches: any[]): any[];
}

export function shouldSynchronizeModel(model: ITextModel): boolean {
	return (
		!model.isTooLargeForSyncing() && !model.isForSimpleWidget
	);
}

export function mergeBranchesOnSameLane(branches: any[]): any[] {
	const mergedBranches: any[] = [];
	const branchMap: { [key: string]: any } = {};

	for (const branch of branches) {
		const lane = branch.lane;
		if (!branchMap[lane]) {
			branchMap[lane] = branch;
		} else {
			branchMap[lane] = mergeTwoBranches(branchMap[lane], branch);
		}
	}

	for (const lane in branchMap) {
		mergedBranches.push(branchMap[lane]);
	}

	return mergedBranches;
}

function mergeTwoBranches(branch1: any, branch2: any): any {
	// Implement the logic to merge two branches
	// This is a placeholder implementation and should be replaced with actual merging logic
	return {
		...branch1,
		...branch2,
		merged: true
	};
}
