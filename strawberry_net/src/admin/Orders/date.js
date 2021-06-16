export const formateDate=(date)=>{
   
    const a= date.split("-")
    const c= a[1].split("")
    if(c[0]=="0"){
        const b=`${c[1]}/${a[2]}/${a[0]}`
        return b
    }
    const b=`${a[1]}/${a[2]}/${a[0]}`
    console.log(c);
    return b
}