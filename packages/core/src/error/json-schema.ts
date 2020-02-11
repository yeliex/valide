import { ErrorObject } from 'ajv';

export default class ValidationError extends Error {
    public errors: ErrorObject[];

    constructor(errors: ErrorObject[]) {
        super();

        this.name = 'ValidationError';
        this.errors = errors;

        this.message = this.formatMessage();

        Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
    }

    private formatMessage() {
        return `[${this.name}]\n${this.formatErrors()}`;
    }

    private formatError(error: ErrorObject) {
        const { keyword, dataPath, message } = error;

        let text = `    ${dataPath}: `;

        switch (keyword) {
            case 'enum': {
                text += `${message} [ ${error.schema.join(', ')} ]`;
                break;
            }
            default: {
                text += message;
            }
        }

        return text;
    }

    private formatErrors() {
        return this.errors.map((error) => {
            return this.formatError(error);
        }).join('\n');
    }
}
