import GameSetup from '@/app/components/GameSetup';

export default function Home() {
  return (
    <main className='h-screen w-screen bg-indigo-950 p-8'>
      <h1 className='text-center text-2xl font-bold uppercase text-white md:text-5xl'>Memory games</h1>
      <GameSetup />
    </main>
  );
}
