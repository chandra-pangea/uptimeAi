import React from 'react';

interface YearSelectorProps {
    years: number[];
    selectedYear: number;
    onYearSelect: (year: number) => void;
}

export const YearSelector: React.FC<YearSelectorProps> = ({ years, selectedYear, onYearSelect }) => {
    return (
        <div className="hidden lg:flex w-[50px] flex-shrink-0 flex-col gap-1.5">
            {years.map((year) => (
                <button
                    key={year}
                    onClick={() => onYearSelect(year)}
                    className={`text-[12px] p-1! text-center ${year === selectedYear
                        ? 'bg-[#0969da] text-white rounded font-medium'
                        : 'text-[#656d76] hover:text-[#0969da]'
                        }`}
                >
                    {year}
                </button>
            ))}
        </div>
    );
};
