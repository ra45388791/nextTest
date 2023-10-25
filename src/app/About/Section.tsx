import Count from './Count';

export default function Section() {

    return (
        <div>
            <h2>測試countContext跨組件傳值</h2>
            <div className='flex flex-col'>
                <Count />
            </div>
        </div>
    )
}