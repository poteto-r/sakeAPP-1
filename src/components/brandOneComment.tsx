import React, { useState, useEffect } from 'react';
import { getOneComment } from '../function/getOneComment';

type PropsType = {
  selectBrandId: number;
};

// コメント表示コンポーネント
export const BrandOneComment: React.FC<PropsType> = (props: PropsType) => {
  const { selectBrandId } = props;
  const [comment, setComment] = useState('');

  // selectBrandIdが変わるたびに、一言コメントを取得してcommentにセットする
  useEffect(() => {
    console.log(selectBrandId);
    setComment(getOneComment(selectBrandId));
  }, [selectBrandId]);

  return (
    <>
      <h3>一言コメント</h3>
      <p>{comment}</p>
    </>
  );
};

export default BrandOneComment;
