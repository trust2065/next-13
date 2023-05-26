type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
};

export default function TodoItem(props: TodoItemProps) {
  const { id, title, complete } = props;

  return (
    <li className='flex gap-1 items-center'>
      <input title='complete' id={id} type='checkbox' className='cursor-pointer peer' />
      <label htmlFor={id} className='cursor-pointer peer-checked:line-through'>{title} {complete}</label>
    </li>
  );
}