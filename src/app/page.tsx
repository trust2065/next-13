import TodoItem from '@/components/TodoItem';
import { prisma } from '@/db';
import Link from 'next/link';

async function getTodos() {
  return prisma.todo.findMany() as any[];
}

async function createSampleTodo() {
  await prisma.todo.create({ data: { title: 'test', complete: false } });
}

export default async function Home() {
  const todos = await getTodos();

  return (
    <>
      <header className='flex justify-between items-center mb-4'>
        <h1 className="text-2xl">Todos</h1>
        <Link className='border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none' href="/pages">
          New
        </Link>
      </header>
      <ul className='pl-4'>
        {todos.map(todo => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </ul>
    </>
  );
}