type TParamType = 'query' | 'params' | 'body' | 'header';

export interface IBaseOptions {

}

export interface IInputOptions {

}

export interface IValidatorOptions extends IBaseOptions {
    key: string;
    getter: string;
}

export interface ISchema {

}

export default class KoaValidator {
    constructor(options: IBaseOptions) {

    }
}
