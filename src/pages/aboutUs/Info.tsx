import { Button, Card, CardActions, CardContent, Grid, Stack, Typography, IconButton, Avatar } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Iconify from '../../components/Iconify'
import EditConatct from './EditContact';
import { contact, address, statement } from '../../utils/DataSet';
import EditAddress from './EditAddress';
import EditMedia from './EditMedia';
import EditStatement from './EditStatement';

const Info = () => {
const [state, setState] = useState({contact: false, address: false, media: false, statement: false})
const [data, setData]:any = useState([]);
const [contactEmail, setContactEmail] = useState([]);
const [addressData, setAddressData]:any = useState({});
const [statementData, setStatementData]:any = useState([]);

const GetEmails = () => {
    const list:any = []
    data.map((d:any, i:number)=> { d.email.map((v:any)=> { if(v) list.push(v) }) })
   setContactEmail(list)
}
useEffect(()=> {
    GetEmails()
 },[data])

useEffect(()=> {
    setData(contact)
    setAddressData(address)
    setStatementData(statement)
   },[])
   
const handleContactData = (contact:any) => {
    setData(contact)
};

const handleAddressData = (dataAdd:any) => {
    setAddressData(dataAdd)
}

const handleStatementData = (dataStatement:any) => {
    setStatementData(dataStatement)
}
    return (
        <>
        <Grid container spacing={2}>
        <Grid item xs={4}>
        <Card variant="outlined" sx={{height:'100%'}}>
      <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography variant='h5' gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='bxs:contact' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={25} height={25}/>&nbsp; Contact</Typography>
      <IconButton onClick={()=>setState((prevState)=>({...prevState, contact: true}))} sx={{width:'50px', height:'50px', color:'#B72136'}}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
      </Stack>
      <br />
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography gutterBottom > <Iconify icon='material-symbols:mail-rounded' sx={{color:'rgba(0, 0, 0, 0.38)'}} />&nbsp; {contactEmail.length > 0 ? `${contactEmail[0]} / ${contactEmail[1]}`: null}</Typography>
      {contactEmail.length > 1 ? <Avatar sx={{color: '#B72136', backgroundColor:'rgba(255, 72, 66, 0.16)', fontSize:'1rem'}}>+{contactEmail.length -1}</Avatar> :null}
      </Stack>
      <Typography gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='ic:round-phone' sx={{color:'rgba(0, 0, 0, 0.38)'}} />&nbsp; +91 8523423444 / 8090234234</Typography>
    </CardContent>  
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card variant="outlined" sx={{height:'100%'}}>
      <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography variant='h5' gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='mdi:address-marker' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={25} height={25}/>&nbsp; Address</Typography>
      <IconButton onClick={()=>setState((prevState)=>({...prevState, address: true}))} sx={{width:'50px', height:'50px', color:'#B72136'}}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
      </Stack>
      <br />
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography gutterBottom >{addressData.office_name}, {addressData.area}, {addressData.ladmark} - {addressData.pincode}, {addressData.town}, {addressData.city}</Typography>
      </Stack>
    </CardContent>           
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card variant="outlined" sx={{height:'100%'}}>
      <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography variant='h5' gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='fa6-solid:business-time' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={25} height={25}/>&nbsp; Hours of Operations</Typography>
      <IconButton sx={{width:'50px', height:'50px', color:'#B72136'}}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
      </Stack>
      <br />
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography gutterBottom >Monday To Friday - 09:00 Am To 06: 00 Pm</Typography>
      </Stack>
    </CardContent> 
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card variant="outlined" sx={{height:'100%'}}>
      <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography variant='h5' gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='ph:link-simple-bold' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={25} height={25}/>&nbsp; Social Media & Links</Typography>
      <IconButton onClick={()=>setState((prevState)=>({...prevState, media: true}))} sx={{width:'50px', height:'50px', color:'#B72136'}}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
      </Stack>
      <br />
      <Stack direction="row" justifyContent="space-evenly" alignItems="center" spacing={0}>
      <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={0}>
      <Iconify icon='fluent:globe-20-filled' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={30} height={30}/>
      <Typography variant="caption" gutterBottom >Website</Typography>
      </Stack>
      <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={0}>
      <Iconify icon='ph:instagram-logo-fill' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={30} height={30}/>
      <Typography variant="caption" gutterBottom >Instagram</Typography>
      </Stack>
      <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={0}>
      <Iconify icon='ic:baseline-facebook' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={30} height={30}/>
      <Typography variant="caption" gutterBottom >Facebook</Typography>
      </Stack>
      <Stack direction="column" justifyContent="space-evenly" alignItems="center" spacing={0}>
      <Iconify icon='mdi:twitter' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={30} height={30}/>
      <Typography variant="caption" gutterBottom >Twitter</Typography>
      </Stack></Stack>
    </CardContent>          
        </Card>
        </Grid>

        <Grid item xs={4}>
        <Card variant="outlined" sx={{height:'100%'}}>
      <CardContent>
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography variant='h5' gutterBottom alignItems={'center'} display={'flex'}> <Iconify icon='ooui:quotes-ltr' sx={{color:'rgba(0, 0, 0, 0.38)'}} width={25} height={25}/>&nbsp; Statement</Typography>
      <IconButton onClick={()=>setState((prevState)=>({...prevState, statement: true}))} sx={{width:'50px', height:'50px', color:'#B72136'}}><Iconify icon="ic:baseline-mode-edit" /></IconButton>
      </Stack>
      <br />
      <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
      <Typography gutterBottom >{statementData[0]}</Typography>
      {statementData.length > 1 ?<Avatar sx={{color: '#B72136', backgroundColor:'rgba(255, 72, 66, 0.16)', fontSize:'1rem'}}>+{statementData.length-1}</Avatar>:null}
      </Stack>
    </CardContent>
        </Card>
        </Grid> </Grid>
        <EditConatct record={{open: state.contact}} parentCallback={()=>setState((prevState)=>({...prevState, contact: false}))} ParentData={handleContactData} />

        <EditAddress record={{open: state.address}} parentCallback={()=>setState((prevState)=>({...prevState, address: false}))} ParentData={handleAddressData} />

        <EditMedia record={{open: state.media}} parentCallback={()=>setState((prevState)=>({...prevState, media: false}))} />
       
        <EditStatement record={{open: state.statement}} parentCallback={()=>setState((prevState)=>({...prevState, statement: false}))} ParentData={handleStatementData} />
        </>
    )
}

export default Info