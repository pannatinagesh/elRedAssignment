import * as React from 'react';
import { Skeleton, TableRow, TableCell } from '@mui/material';

export default function MiscSkeleton(props:any) {

  return (
    <>
       {Array.from(new Array(4)).map((item) => ( 

               <TableRow>     
                  {Array.from(new Array(props.record.number)).map((item) => (    
                  <TableCell align="center">
                        <Skeleton variant="rounded"  height={30}/></TableCell>
                  ))}
                   
                </TableRow>
      ))}
    </>
  );
}
