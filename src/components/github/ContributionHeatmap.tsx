import React, { useMemo } from 'react';
import Plotly from 'plotly.js';
import createPlotlyComponentModule from 'react-plotly.js/factory';
import type { ContributionDay } from '../../hooks';
import { useContributionData } from '../../utils/contributionData';

const createPlotlyComponent = (createPlotlyComponentModule as any).default || createPlotlyComponentModule;
const Plot = createPlotlyComponent(Plotly);

interface ContributionHeatmapProps {
    contributions: ContributionDay[];
}

export const ContributionHeatmap: React.FC<ContributionHeatmapProps> = ({ contributions }) => {
    const { data, layout } = useMemo(() => useContributionData(contributions), [contributions]);

    return (
        <div className="overflow-x-auto !p-3">
            <Plot
                data={data}
                layout={layout}
                config={{ displayModeBar: false, responsive: true }}
                style={{ width: '100%', minWidth: '700px' }}
            />
        </div>
    );
};
