/// <reference types="react" />
declare type InputProps = {
    /** Input 안의 내용 */
    value?: string;
    /** placeholder */
    placeholder?: string;
    /** Input 테마 */
    theme: 'primary' | 'secondary' | 'tertiary';
    /** Input의 넓이 */
    width?: string | number;
    /** Input 비활성화 시킵니다. */
    disabled?: boolean;
    /** 글씨를 입력했을 때 호출할 함수 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};
declare const Input: {
    ({ value, placeholder, theme, width, onChange, disabled, }: InputProps): JSX.Element;
    defaultProps: {
        theme: string;
    };
};
export default Input;
