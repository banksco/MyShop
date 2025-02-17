import bcrypt from "bcryptjs"
const users = [
{
    name: 'Admin User',
    email: 'info@kalacademy.org',
    password: bcrypt.hashSync('123456'), 
    isAdmin: true
}, 
{
    name: 'John Doe',
    email: 'john@kalacademy.org',
    password: bcrypt.hashSync('123456'), 
}, 
{
    name: 'Jane Doe',
    email: 'info@kalacademy.org',
    password: bcrypt.hashSync('123456'), 
},     
]

export default users 