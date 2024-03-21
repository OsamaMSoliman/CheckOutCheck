import List from '@mui/material/List';
import { ReactNode } from 'react';
import { TransitionGroup } from 'react-transition-group';


export default function ({ nodes }: { nodes: ReactNode[] }) {
    return (
        <List>
            <TransitionGroup>
                {...nodes}
            </TransitionGroup>
        </List>
    );
}