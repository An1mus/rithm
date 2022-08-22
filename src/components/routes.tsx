import Algorithms from "./pages/algorithms ";
import DataStructures from "./pages/data-structures";
import Patterns from "./pages/patterns";
import SystemDesign from "./pages/system-design";

export const ROUTES = [
    {
        url: '/algorithms',
        label: 'algorithms',
        component: <Algorithms />,
    },
    {
        url: '/data_structures',
        label: 'data structures',
        component: <DataStructures />,
    },
    {
        url: '/patterns',
        label: 'patterns',
        component: <Patterns />,
    },
    {
        url: '/system_design',
        label: 'system design',
        component: <SystemDesign />
    }
]