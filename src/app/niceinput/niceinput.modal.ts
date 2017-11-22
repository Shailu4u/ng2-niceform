export interface Iniceinput {
    id: string,
    label: string,
    type: string,
    readonly ?: boolean,
    disabled ?: boolean,
    required ?: boolean,
    value ?: any,
    classes ?:  string
}