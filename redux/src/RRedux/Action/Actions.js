
export const INCREMENT='increment'
export const DECREMENT='decrement'
export const INCBYFIVE='incbyfive'
export const DECBYFIVE='decbyfive'


export const LATENCY='latency'

export const increment=()=>({
    type:INCREMENT
})

export const decrement=()=>({
    type:DECREMENT
})
export const incbyfive=(value)=>({
    type:INCBYFIVE,
    payload:value
})

export const decbyfive=(a)=>({
    type:DECBYFIVE,
    payload:a
})

export const latency=()=>{
    return (dispatch)=>{
        setTimeout(() => {
            dispatch(increment())
            
        }, 1000);
    }
}
