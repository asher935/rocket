export default function PromptSuggestion({ prompt, setPrompt }: { prompt: string, setPrompt: (prompt: string) => void }) {
    return (
        <button onClick={() => setPrompt(prompt)}
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center 
            hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm p-2">
            {prompt}
        </button>
    )
}