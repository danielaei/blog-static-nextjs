import { TagProps } from '@/types';

export const Tags = ({ data }: TagProps<'list'>) => {
  return (
    <ul data-cy='tags' className='flex gap-5'>
      {data.map((item, index) => (
        <li key={index} className={`tag-${item.color}`}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
