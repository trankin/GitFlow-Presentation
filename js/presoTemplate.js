var graphConfig = new GitGraph.Template({
    colors: ["#a9c16d", "#a9c16d", "#619dc7", "#ffa454", "#3cbad0", "#d6746b"],
    branch: {
        lineWidth: 6,
        spacingX: 60,
        showLabel: true,                // display branch names on graph
        mergeStyle: "bezier",
        labelFont: "bold 12pt Arial"
    },
    commit: {
        spacingY: -50,
        dot: {
            size: 12,
            strokeWidth: 4,
            strokeColor: 'black'
        },
        tag: {
            font: "normal 12pt Courier",
            color: "#f5f298"
        },
        message: {
            color: '#222',
            font: "normal 12pt Consolas",
            displayAuthor: true,
            displayBranch: true,
            displayHash: false
        }
    }
});