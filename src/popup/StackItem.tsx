import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';


const StackItem = styled( Paper )( ( { theme } ) => ( {
    backgroundColor: 'white',
    ...theme.typography.body2,
    padding: theme.spacing( 1 ),
    textAlign: 'center',
    color: theme.palette.text.secondary,

} ) );

export default StackItem;
