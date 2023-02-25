//---IMPORT DATABASE CONNECTION FROM CONFIG OLDER--//
let db=require('../config');

//--import bcrypt module--//
let { hash,compare,hashSync }=require('bcrypt');