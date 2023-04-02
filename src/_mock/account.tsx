// ----------------------------------------------------------------------

import React from "react";

let user:any = {}

React.useMemo(()=> {
  user = JSON.parse(sessionStorage.getItem('user') as any)
}, [sessionStorage.getItem('user')])

const account = {
  firstName: user?user['first_name']:null,
  lastName: user?user['last_name']:null,
  email: user?user["email"]:null,
};


export default account;
