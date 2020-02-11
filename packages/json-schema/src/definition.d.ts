export declare const $schema: string;
export declare namespace definitions {
    export const IOptions: {
        "additionalProperties": boolean;
        "properties": {
            "version": {
                "$ref": string;
                "default": number;
            };
        };
        "required": string[];
        "type": string;
    };
    export const JsonSchemaValidator: {
        "additionalProperties": boolean;
        "properties": {};
        "type": string;
    };
    export const TAllowVersion: {
        "enum": number[];
        "type": string;
    };
    export const TValidatorName: {
        "enum": string[];
        "type": string;
    };
}
