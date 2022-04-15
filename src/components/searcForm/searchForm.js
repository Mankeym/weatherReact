import './searchForm.css'
export function SearchForm(props){
    console.log(props)
    return (
        <div className='searchForm'>
            <form className="searchForm__form" onSubmit={props.onSearch}>
                <input className='searchForm__input' type='text'/>
                <button type='submit' className='searchForm__submit'> Поиск</button>
            </form>
        </div>
    );
}
