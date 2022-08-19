export default function QuoteBox({ text }: { text: string }) {
  return (
    <div className="max-w-4xl my-2 p-2 bg-slate-300 text-gray-600 dark:bg-slate-600 dark:text-gray-300 rounded-lg shadow">
      <div className="mb-1">
        <div className="h-3 text-3xl text-left">“</div>
        <p className="px-4 text-sm text-center">{text}</p>
        <div className="h-3 text-3xl text-right">”</div>
      </div>
    </div>
  );
}
