/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from '../style/palette';

type InputProps = {
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

const Input = ({
  value,
  placeholder,
  theme,
  width,
  onChange,
  disabled,
}: InputProps) => {
  return (
    <label css={labelStyle}>
      <input
        value={value}
        css={[style, themes[theme], { width }]}
        onChange={onChange}
        disabled={disabled}
        placeholder=" "
      />
      <span css={labelSpanStyle}>{placeholder}</span>
      <span css={borderSpanStyle}></span>
    </label>
  );
};

Input.defaultProps = {
  theme: 'primary',
};

const labelStyle = css`
  position: relative;
  margin: auto;
  width: 100%;
  max-width: 280px;
`;

const labelSpanStyle = css`
  position: absolute;
  top: 0;
  left: 0;
  color: ${palette.gray[6]};
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

const borderSpanStyle = css`
  position: absolute;
  top: 28px;
  left: 0;
  height: 2px;
  width: 100%;
  background: ${palette.main()[5]};
  transform: scaleX(0);
  transform-origin: 0 0;
  transition: all 0.2s ease;
`;

const style = css`
  -webkit-appearance: none;
  width: 100%;
  border: 0;
  padding: 8px 0;
  border-bottom: 2px solid ${palette.gray[6]};
  background: none;
  border-radius: 0;
  color: ${palette.gray[7]};
  &:hover {
    background: rgba(34, 50, 84, 0.03);
  }
  &:focus {
    background: none;
    outline: none;
  }
  &:not(:placeholder-shown) + span {
    color: ${palette.main()[5]};
    transform: translateY(-20px) scale(0.8);
  }
  &:not(:-ms-input-placeholder) + span {
    color: ${palette.gray[6]};
    transform: translateY(-20px) scale(0.8);
  }
  &:focus + span {
    color: ${palette.main()[5]};
    transform: translateY(-20px) scale(0.8);
  }
  &:focus + span + span {
    transform: scaleX(1);
  }
  &:disabled {
    cursor: not-allowed;
    background: rgba(34, 50, 84, 0.1);

    & + span {
      color: ${palette.gray[5]};
    }
  }
`;

const themes = {
  primary: css`
    color: ${palette.gray[7]};
  `,
  secondary: css`
    color: ${palette.teal[5]};
  `,
  tertiary: css`
    color: ${palette.orange[5]};
  `,
};

export default Input;
