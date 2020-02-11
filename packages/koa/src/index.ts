type TParamType = 'query' | 'params' | 'body' | 'header';

type TValidator = 'json-schema';

export interface IJsonSchemaOption {
    name: 'json-schema';

}

export type IValidatorOption = TValidator | IJsonSchemaOption;

export interface IBaseOptions {
    validator: IValidatorOption;
}

export interface IValidatorOptions extends IBaseOptions {
    key: string;
    getter: string;
}

export interface ISchema {

}

export default class KoaValidator {
    constructor(options: Partial<IBaseOptions> = {}) {

    }
}
