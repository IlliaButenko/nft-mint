export default function Slider() {
    const numbers = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    const listItems = numbers.map((numbers,index) =>
        <img key = {index} className='img-slide' alt="slide" src={"/asserts/media/image/slide" + numbers.toString() + ".jpg"} />
    );

    return (
        <div className='slider-grp'>
            {listItems}
        </div>
    );
}