type Props = {
    label: string;
    onClick?: () => void;
};

export const Button = ({ label, onClick }: Props) => {
    return (
        <button
            onClick={onClick}
            className="px-5 py-2 text-xl font-bold bg-[#d4AA00] text-zinc-800 rounded-md tracking-wide transition duration-300 hover:opacity-90"
        >
            {label}
        </button>
    );
};
