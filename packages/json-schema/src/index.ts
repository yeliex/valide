import { ValidatorCore } from '@valide/core';
import * as schema from './definition.json';

export type TAllowVersion = 4 | 5 | 6 | 7;

export interface IOptions {
    /**
     * @default 7
     */
    version: TAllowVersion;
}

export type TValidatorName = 'json-schema';

export default class JsonSchemaValidator extends ValidatorCore<IOptions> {
    static type: TValidatorName = 'json-schema';

    private readonly version: TAllowVersion;

    constructor(options: Partial<IOptions> = {}) {
        super(options, schema);

        this.version = options.version;
    }

    public async validate() {
        console.log(this.options, this.version);

        return true;
    }
}
