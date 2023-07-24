import './style.css'

export const Pagination = () => {
    return (
        <div className='pagination'>
            <button className='btn-nav'>Назад</button>
        <div className='pages'>
            <button className='btn-page active'>1</button>
            <button className='btn-page'>2</button>
            <button className='btn-page'>3</button>
            <button className='btn-page'>4</button>
            <button className='btn-page'>5</button>
        </div>
            <button className='btn-nav'>Далее</button>
        </div>
    );
};