/// <reference types="react" />
export declare type DialogProps = {
    visible: boolean;
    title?: string;
    description?: string;
    children?: React.ReactNode;
    hideButtons?: boolean;
    cancellable?: boolean;
    cancelText: string;
    confirmText: string;
    onCancel?: () => void;
    onConfirm?: () => void;
};
declare const Dialog: {
    ({ visible, title, description, children, hideButtons, cancellable, cancelText, confirmText, onCancel, onConfirm, }: DialogProps): JSX.Element;
    defaultProps: {
        cancelText: string;
        confirmText: string;
    };
};
export default Dialog;
