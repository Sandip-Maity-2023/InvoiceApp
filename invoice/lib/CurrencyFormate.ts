export default function CurrencyFormate( amt:number, currency:string ) { 
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: currency }).format(amt);
}
