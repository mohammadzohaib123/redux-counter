
export default class CounterAction
{
    static INCREMENT='INCREMENT';
    static DECREMENT='DECREMENT';

    static increment()
    {
        console.log('dispatch increment');
         return{
             type:CounterAction.INCREMENT
         };
    }

    static decrement()
    {
        console.log('dispatch decrement');
        return{
            type:CounterAction.DECREMENT
        };
    }
}