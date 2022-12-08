export type To_do = {
    id:number,
    text:string,
    is_done:boolean
}

export type To_do_Creator = Omit <To_do,"id">