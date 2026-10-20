import AppUser from '../Models/AppUser'
var appUsersList=[
    new AppUser('ali', 'xyz'),
    new AppUser('ahmed', 'xyz')
]

export function validate(reg, pass)
{
    let a=appUsersList.filter(u=>u.reg==reg&&u.pass==pass).length;
    return a>0;
}

