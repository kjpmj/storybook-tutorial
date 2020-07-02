/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import palette from '../style/palette';

export type ButtonProps = {
  /** 버튼 안의 내용 */
  children: React.ReactNode;
  /** 클릭했을 때 호출할 함수 */
  onClick?: (e?: React.MouseEvent<HTMLButtonElement>) => void;
  /** 버튼의 생김새를 설정합니다. */
  theme: 'primary' | 'secondary' | 'tertiary';
  /** 버튼의 크기를 설정합니다 */
  size: 'small' | 'medium' | 'big';
  /** 버튼을 비활성화 시킵니다. */
  disabled?: boolean;
  /** 버튼의 너비를 임의로 설정합니다. */
  width?: string | number;
  /** 버튼에서 아이콘만 보여줄 때 이 값을 `true`로 설정하세요. */
  iconOnly?: boolean;
};

/** `Button` 컴포넌트는 어떠한 작업을 트리거 할 때 사용합니다. */
const Button = ({
  children,
  theme,
  size,
  disabled,
  width,
  iconOnly,
  onClick,
}: ButtonProps) => {
  return (
    <button
      css={[
        style,
        themes[theme],
        sizes[size],
        { width },
        iconOnly && [iconOnlyStyle, iconOnlySizes[size]],
      ]}
      onClick={onClick}
      disabled={disabled}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  theme: 'primary',
  size: 'medium',
};

const style = css`
  outline: none;
  border: none;
  box-sizing: border-box;
  height: 2rem;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  background: ${palette.main()[5]};
  color: white;
  border-radius: 0.25rem;
  line-height: 1;
  font-weight: 600;
  &:focus {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
  }
  &:hover:enabled {
    background: ${palette.main()[4]};
    cursor: pointer;
  }
  &:active:enabled {
    background: ${palette.main()[6]};
  }
  &:disabled {
    cursor: not-allowed;
  }

  svg {
    width: 1em;
    margin-right: 1em;
  }
`;

const themes = {
  primary: css`
    background: ${palette.main()[5]};
    color: white;
    svg {
      fill: white;
    }
    &:hover:enabled {
      background: ${palette.main()[4]};
    }
    &:active:enabled {
      background: ${palette.main()[6]};
    }
    &:disabled {
      background: ${palette.gray[5]};
    }
  `,
  secondary: css`
    background: ${palette.gray[2]};
    color: ${palette.gray[8]};
    svg {
      fill: ${palette.gray[8]};
    }
    &:hover:enabled {
      background: ${palette.gray[1]};
    }
    &:active:enabled {
      background: ${palette.gray[3]};
    }
    &:disabled {
      color: white;
    }
  `,
  tertiary: css`
    background: none;
    color: ${palette.main()[5]};
    svg {
      fill: ${palette.main()[5]};
    }
    &:hover:enabled {
      background: ${palette.main()[0]};
    }
    &:active:enabled {
      background: ${palette.main()[1]};
    }
    &:disabled {
      color: ${palette.gray[3]};
    }
  `,
};

const sizes = {
  small: css`
    height: 1.75rem;
    font-size: 0.75rem;
    padding: 0 0.875rem;
  `,
  medium: css`
    height: 2.5rem;
    font-size: 1rem;
    padding: 0 1rem;
  `,
  big: css`
    height: 3rem;
    font-size: 1.125rem;
    padding: 0 1.5rem;
  `,
};

const iconOnlyStyle = css`
  padding: 0;
  border-radius: 50%;
  svg {
    margin: 0;
  }
`;

const iconOnlySizes = {
  small: css`
    width: 1.75rem;
  `,
  medium: css`
    width: 2.5rem;
  `,
  big: css`
    width: 3rem;
  `,
};

export default Button;
