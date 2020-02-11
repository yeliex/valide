import * as Ajv from 'ajv';
import ajvKeyword = require('ajv-keywords');
import ValidationError from './error/json-schema';

/**
 * Base class, provide validate methods
 */
export default abstract class Base<T> {
    protected readonly options: T;

    private readonly ajv: Ajv.Ajv;

    private readonly schema: any;

    constructor(options: Partial<T>, schema: any) {
        this.schema = schema;

        const ajv = this.ajv = new Ajv({
            allErrors: true,
            verbose: true,
            useDefaults: true,
            $data: true,
        });

        ajvKeyword(ajv);

        const valide = ajv.validate({
            ...schema,
            $ref: '#/definitions/IOptions',
        }, options);
        console.log(valide, ajv.errors, ajv.errorsText());
        if (!valide) {
            throw new ValidationError(ajv.errors);
        }
        console.log(options);
        this.options = options as any;
    }

    protected validate(data: any, schema: string | object, dataPath?: string) {
        const validation = this.ajv.compile({
            ...this.schema,
            schema,
        });

        const valide = validation(data, dataPath);

        if (!valide) {
            throw new ValidationError(validation.errors);
        }

        return data;
    }
}
