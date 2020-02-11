import Base from './base';

export default abstract class ValidatorCore<T> extends Base<T> {
    static type: string;

    abstract async validate(): Promise<boolean>;
}
