import { GITHUB_COLORS } from '../assets';
import type { ContributionDay } from '../hooks';

export const useContributionData = (contributions: ContributionDay[]) => {
    const weeks: ContributionDay[][] = [];
    let currentWeek: ContributionDay[] = [];

    contributions.forEach((day) => {
        const date = new Date(day.date);
        const dayOfWeek = date.getDay();

        if (dayOfWeek === 0 && currentWeek.length > 0) {
            weeks.push(currentWeek);
            currentWeek = [];
        }
        currentWeek.push(day);
    });
    if (currentWeek.length > 0) weeks.push(currentWeek);

    const z: number[][] = Array(7).fill(0).map(() => []);
    const text: string[][] = Array(7).fill(0).map(() => []);
    const xLabels: string[] = [];

    weeks.forEach((week) => {
        if (week[0]) {
            const date = new Date(week[0].date);
            const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            const dayOfMonth = date.getDate();
            if (dayOfMonth <= 7) {
                xLabels.push(monthNames[date.getMonth()]);
            } else {
                xLabels.push('');
            }
        } else {
            xLabels.push('');
        }

        for (let i = 0; i < 7; i++) {
            if (week[i]) {
                z[i].push(week[i].level);
                text[i].push(`${week[i].count} contributions on ${week[i].date}`);
            } else {
                z[i].push(0);
                text[i].push('');
            }
        }
    });

    const plotData = [{
        z: z,
        type: 'heatmap' as const,
        colorscale: [
            [0, GITHUB_COLORS.contributionL0],
            [0.2, GITHUB_COLORS.contributionL0],
            [0.2, GITHUB_COLORS.contributionL1],
            [0.4, GITHUB_COLORS.contributionL1],
            [0.4, GITHUB_COLORS.contributionL2],
            [0.6, GITHUB_COLORS.contributionL2],
            [0.6, GITHUB_COLORS.contributionL3],
            [0.8, GITHUB_COLORS.contributionL3],
            [0.8, GITHUB_COLORS.contributionL4],
            [1, GITHUB_COLORS.contributionL4]
        ] as any,
        zmin: 0,
        zmax: 4,
        showscale: false,
        hovertemplate: '%{text}<extra></extra>',
        text: text as any,
        xgap: 3,
        ygap: 3
    }];

    const plotLayout = {
        yaxis: {
            ticktext: ['', 'Mon', '', 'Wed', '', 'Fri', ''],
            tickvals: [0, 1, 2, 3, 4, 5, 6],
            autorange: 'reversed' as const,
            tickfont: { size: 10, color: GITHUB_COLORS.textSecondary },
            showgrid: false,
            zeroline: false,
        },
        xaxis: {
            side: 'top' as const,
            ticktext: xLabels,
            tickvals: xLabels.map((_, i) => i),
            tickfont: { size: 10, color: GITHUB_COLORS.textSecondary },
            showgrid: false,
            zeroline: false,
        },
        margin: { l: 30, r: 10, t: 20, b: 5 },
        height: 104,
        paper_bgcolor: 'transparent',
        plot_bgcolor: 'transparent'
    };

    return { data: plotData, layout: plotLayout };
};
