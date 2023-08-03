export const SortingLoading = () => {
    return (
        <div className="justify-center flex gap-4 my-5 absolute w-auto left-1/2 -translate-x-1/2 top-[3%]">
            <div className="text-lg text-white">Sorteando...</div>
            <div className="w-6 h-6 border-2 border-r-[#d4AA00] border-b-[#d4AA00] rounded-full animate-spin"></div>
        </div>
    );
};
