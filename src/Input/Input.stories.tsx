/** @jsx jsx */
import Input from './Input';
import { jsx, css } from '@emotion/core';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import React from 'react';

export default {
  title: 'components|Input',
  component: Input,
  decorators: [withKnobs],
};

export const input = () => {
  const value = text('value', '');
  const placeholder = text('placeholder', '라벨입니다');
  const theme = select(
    'theme',
    ['primary', 'secondary', 'tertiary'],
    'primary'
  );
  const disabled = boolean('disabled', false);
  const width = text('width', '');

  return (
    <div css={inputWrapper}>
      <Input
        value={value}
        placeholder={placeholder}
        theme={theme}
        width={width}
        onChange={action('onChange')}
        disabled={disabled}
      />
    </div>
  );
};

input.story = {
  name: 'Default',
};

const inputWrapper = css`
  padding-top: 12px;
`;

export const inputChange = () => {
  const [value, setValue] = React.useState();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(value);
  };

  return (
    <div css={inputWrapper}>
      <Input value={value} placeholder="입력해 보세요" onChange={onChange} />
    </div>
  );
};
