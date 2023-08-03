import Image from "next/image";

type Props = {
    title: string;
};

export const Header = ({ title }: Props) => {
    return (
        <>
            <div className="flex justify-center mb-4 px-2 sm:p-0">
                <Image src="/logo.svg" alt="" width={400} height={0} className="sm:w-[80%]" />
            </div>
            <div className="text-3xl text-center sm:text-5xl text-slate-100 font-light tracking-wider p-5 sm:p-8">
                {title}
            </div>
        </>
    );
};
