export const SortingLoading = () => {
    return (
        <div className="fixed top-0 right-0 bottom-0 left-0 flex items-center justify-center bg-black/60">
            <div className="flex items-center gap-4">
                <div className="text-4xl text-white">Sorteando...</div>
                <div className="w-10 h-10 border-2 border-r-[#d4AA00] border-b-[#d4AA00] rounded-full animate-spin"></div>
            </div>
        </div>
    );
};