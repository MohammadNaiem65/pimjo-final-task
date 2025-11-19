import { Search } from 'lucide-react';

export default function Input() {
    return (
        <div className='flex items-center justify-between border border-(--color-border) py-2 pr-2.5 pl-4 rounded-xl'>
            <Search className='size-5 mr-5 text-[#9CA3AF]' />

            <input type='text' placeholder='Quick search...' />

            <span className='px-2 py-1.5 rounded-lg border border-(--color-border) inline-flex justify-start items-center gap-0.5 text-[#6B7280] text-xs font-normal '>
                ⌘ K
            </span>
        </div>
    );
}
