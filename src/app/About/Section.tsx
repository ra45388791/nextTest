import { ReactNode, forwardRef } from 'react';
// import Count from './Count';

interface childrenType {
    children: ReactNode
}

function Section({ children }: childrenType, ref: any) {
    return (
        <div ref={ref}>
            <h2>測試countContext跨組件傳值</h2>
            <div className='flex flex-col'>
                {children}
            </div>
            <h2>測試countContext跨組件傳值</h2>
        </div>
    )
}

export default forwardRef(Section)