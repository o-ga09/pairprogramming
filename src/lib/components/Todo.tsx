import React from 'react';

type Props = {
  title: string;
  isFinished: boolean;
};

function Todo({ title, isFinished }: Props) {
  return <p>{title}</p>;
}

export default Todo;
