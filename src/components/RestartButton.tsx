type Props = {
    onClick: () => void;
};

export const RestartButton = ({ onClick }: Props) => {
    return (
        <div className="flex mt-4 sm:mt-10 justify-center items-center">
            <button
                className="px-5 py-3 text-lg font-bold bg-[#9b7c01] text-slate-100 rounded-md tracking-wide transition duration-300 hover:opacity-90"
                onClick={onClick}
            >
                Reiniciar
            </button>
        </div>
    );
};
