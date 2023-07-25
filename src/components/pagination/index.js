import './style.css'

export const Pagination = ({page, count, onChange, onChangeBack, onChangeNext}) => {
    const length = Math.ceil(count / Math.max(10, 1))
    let items = []
    for (let page = 1; page <= length; page++) items.push(page)


    return (
        <div className='pagination'>
            <button className={`btn-nav ${page === 1 && 'btn-disable'}`}
                    disabled={page === 1}
                    onClick={() => onChangeBack(page)}
            >Назад
            </button>
            <div className='pages'>
                {items.map((number, index) => (
                    <button
                        key={index}
                        className={`btn-page ${number === page && 'active'}`}
                        onClick={() => onChange(number)}
                    >
                        {number}
                    </button>
                ))}
            </div>
            <button className={`btn-nav ${page === length && 'btn-disable'}`}
                    disabled={page === length}
                    onClick={() => onChangeNext(page)}
            >Далее
            </button>
        </div>
    );
};