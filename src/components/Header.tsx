interface Props {
  dark: boolean;
  onToggle: () => void;
}

export default function Header({ dark, onToggle }: Props) {
  return (
    <header className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-xl font-bold text-slate-800 dark:text-white">
          Analytics Dashboard
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          December 2024 — overview
        </p>
      </div>
      <button
        onClick={onToggle}
        aria-label="Toggle theme"
        className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent hover:text-accent transition-colors"
      >
        {dark ? "☀️" : "🌙"}
      </button>
    </header>
  );
}
