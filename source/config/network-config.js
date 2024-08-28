export const networkConfig = {
    nodes: {
        borderWidth: 1,
        borderWidthSelected: 10,
        color: {
            border: "#2b7ce9",
            background: "#97c2fc",
            highlight: {
                border: "#2b7cE9",
                background: "#d2e5ff"
            },
            hover: {
                border: "#2b7ce9",
                background: "#d2e5ff"
            }
        },
        fixed: {
            x: false,
            y: false
        },
        font: {
            color: "#343434",
            size: 14, // px
            face: "arial",
            background: "none",
            strokeWidth: 0, // px
            strokeColor: "#fff",
        },
        hidden: false,
        labelHighlightBold: true,
        physics: true,
        scaling: {
            min: 10,
            max: 30,
            label: {
                enabled: false
            }
        },
        shape: "circularImage",
        shapeProperties: {
            borderDashes: false, // only for borders
            borderRadius: 6, // only for box shape
            interpolation: false, // only for image and circularImage shapes
            useImageSize: false, // only for image and circularImage shapes
        },
        size: 25
    },

    edges: {
        arrows: {
            to: false,
            middle: false,
            from: false
        },
        arrowStrikethrough: true,
        color: {
            color: "#848484",
            highlight: "#848484",
            hover: "#848484",
            opacity: 1
        },
        dashes: false,
        font: {
            color: "#343434",
            size: 14,
            face: "arial",
            background: "transparent",
            strokeWidth: 2,
            strokeColor: "#ffffff",
            align: "horizontal"
        },
        hidden: false,
        hoverWidth: 1.5,
        labelHighlightBold: true,
        physics: true,
        scaling: {
            min: 1,
            max: 15,
            label: {
                enabled: false
            }
        },
        selectionWidth: 1.5,
        selfReferenceSize: 20,
        shadow: false,
        smooth: false,
        width: 1
    },

    layout: {
        hierarchical: false
    },

    interaction: {
        dragNodes: true,
        dragView: true,
        hideEdgesOnDrag: false,
        hideNodesOnDrag: false,
        hover: false,
        multiselect: false,
        selectable: true,
        selectConnectedEdges: true,
        hoverConnectedEdges: true,
        navigationButtons: true,
        keyboard: true,
        tooltipDelay: 300,
        zoomView: true
    },

    manipulation: {
        enabled: false,
        initiallyActive: false
    },

    physics: {
        enabled: true,
        maxVelocity: 50,
        minVelocity: 0.1,
        timestep: 0.5,
        solver: "barnesHut"
    }
}